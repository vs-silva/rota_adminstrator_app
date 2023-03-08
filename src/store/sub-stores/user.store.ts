import type {UserDTO} from "../../integration/users/business/dtos/user.dto";
import {ref} from "vue";
import Users from "../../integration/users";

export function UserStore() {

    const users = ref(<UserDTO[]>[]);

    async function getAllUsers(): Promise<void> {
        users.value = await Users.getAllUsers();
    }

    return {
        getAllUsers,
        users

    };
}
