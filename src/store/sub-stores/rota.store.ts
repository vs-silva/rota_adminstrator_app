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

    async function setRotaUser(userPayload: Ref<UserDTO>): Promise<void> {
        if(!userPayload.value.id) {
            //@ts-ignore
            rota.value.user = null;
            return;
        }

        rota.value.user = userPayload.value;
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

    async function filterUserRotas(userName: string): Promise<void> {

        if(!userName) {
            filteredRotas.value = rotas.value;
            return;
        }

        filteredRotas.value = rotas.value.filter(rota => rota.user?.name.toLocaleLowerCase().includes(userName.toLocaleLowerCase()));
    }

    return {
        getAllRotas,
        getRotaById,
        setRotaUser,
        mapUsersToRotas,
        updateFilterRotas,
        filterUserRotas,
        rotas,
        filteredRotas,
        rota

    };
}
