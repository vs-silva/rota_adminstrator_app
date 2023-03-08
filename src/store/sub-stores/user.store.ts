import type {UserDTO} from "../../integration/users/business/dtos/user.dto";
import {ref} from "vue";
import Users from "../../integration/users";
import Rotas from "../../integration/rotas";
import {RotaDTO} from "../../integration/rotas/business/dtos/rota.dto";

export function UserStore() {

    const users = ref(<UserDTO[]>[]);

    async function getAllUsers(): Promise<void> {
        const allUsers = await Users.getAllUsers();
        const allRotas = await Rotas.getAllRotas();
        await populateUsersRotas(allUsers, allRotas);
        users.value = allUsers;
    }

    async function populateUsersRotas(users: UserDTO[], rotas: RotaDTO[]): Promise<void> {

        for (const user of users) {
            user.rotas = rotas.filter(rota => rota.userID === user.id);
        }

    }

    return {
        getAllUsers,
        users

    };
}
