import type {UserDTO} from "../business/dtos/user.dto";

export interface UsersServiceDriverPort {
    getAllUsers(): Promise<UserDTO[]>;
}
