import type {UserDTO} from "../../integration/users/business/dtos/user.dto";
import {ref} from "vue";
import Users from "../../integration/users";

export function UserStore() {

    const users = ref(<UserDTO[]>[]);
    const filteredUsers = ref(<UserDTO[]>[]);
    const user = ref(<UserDTO>{});

    async function getAllUsers(): Promise<void> {
       users.value = await Users.getAllUsers();
        filteredUsers.value = users.value;
    }

    async function getUserById(userID: number): Promise<void> {
        const result = users.value.find(user => user.id === userID);

        if(!result) {
            user.value = <UserDTO>{};
            return;
        }

        user.value = result;
    }


    return {
        getAllUsers,
        getUserById,
        users,
        filteredUsers,
        user
    };
}
