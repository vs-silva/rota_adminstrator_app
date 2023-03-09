import {Ref, ref} from "vue";
import type {RotaDTO} from "../../integration/rotas/business/dtos/rota.dto";
import type {UserDTO} from "../../integration/users/business/dtos/user.dto";
import Rotas from "../../integration/rotas";

export function RotaStore() {

    const rotas = ref(<RotaDTO[]>[]);
    const rota = ref(<RotaDTO>{});

    async function getAllRotas(): Promise<void> {
       rotas.value = await Rotas.getAllRotas();
    }

    async function getRotaById(rotaID: number): Promise<void> {
        rota.value = await Rotas.getRotaByID(rotaID);
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
        mapUsersToRotas,
        rotas,
        rota

    };
}
