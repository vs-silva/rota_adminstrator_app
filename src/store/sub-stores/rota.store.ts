import {Ref, ref} from "vue";
import type {RotaDTO} from "../../integration/rotas/business/dtos/rota.dto";
import type {UserDTO} from "../../integration/users/business/dtos/user.dto";
import type {RotasOptionalFilterDTO} from "../../integration/rotas/business/dtos/rotas-optional-filter.dto";
import Rotas from "../../integration/rotas";

export function RotaStore() {

    const rotas = ref(<RotaDTO[]>[]);
    const filteredRotas = ref(<RotaDTO[]>[]);
    const rota = ref(<RotaDTO>{});

    async function getAllRotas(): Promise<void> {
       rotas.value = await Rotas.getAllRotas();
       filteredRotas.value = rotas.value;
    }

    async function getRotaById(rotaID: number): Promise<void> {
        rota.value = await Rotas.getRotaByID(rotaID);
    }

    async function setSpecificRota(rotaPayload: RotaDTO): Promise<void> {
        rota.value = rotaPayload;
    }

    async function updateFilterRotas(filteredRotasDTO: RotasOptionalFilterDTO): Promise<void> {

        if(!filteredRotasDTO.startDate && !filteredRotasDTO.endDate) {
            filteredRotas.value = rotas.value;
            return;
        }

        filteredRotas.value = rotas.value.filter( rota => {

            if(filteredRotasDTO.startDate && filteredRotasDTO.endDate) {
                return Date.parse(rota.startDate) >= Date.parse(filteredRotasDTO.startDate) && Date.parse(rota.endDate) <= Date.parse(filteredRotasDTO.endDate);
            }

            if(filteredRotasDTO.startDate && !filteredRotasDTO.endDate) {
                return Date.parse(rota.startDate) >= Date.parse(filteredRotasDTO.startDate);
            }

            if(!filteredRotasDTO.startDate && filteredRotasDTO.endDate) {
                return Date.parse(rota.endDate) <= Date.parse(filteredRotasDTO.endDate);
            }

        });
    }

    async function mapUsersToRotas(usersPayload: Ref<UserDTO[]>): Promise<void> {

        const users = usersPayload.value;

        for (const rota of rotas.value) {
            rota.user = users.find(user => user.id === rota.userID);
        }
    }

    return {
        getAllRotas,
        getRotaById,
        setSpecificRota,
        mapUsersToRotas,
        updateFilterRotas,
        rotas,
        filteredRotas,
        rota

    };
}