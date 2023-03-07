import type {UserDTO} from "../../dtos/user.dto";

export interface UsersMapperInterface {
    mapToUserDTOCollection(data: object[]): Promise<UserDTO[]>;
}
