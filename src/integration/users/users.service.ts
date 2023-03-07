import type {UsersServiceDriverPort} from "./ports/users-service-driver.port";
import type {UsersServiceDrivenPort} from "./ports/users-service-driven.port";
import type {UserDTO} from "./business/dtos/user.dto";
import {UsersResourceConstants} from "./business/constants/users-resource.constants";
import {UsersMapperService} from "./business/mappers/users-mapper/users-mapper.service";


export function UsersService(reader: UsersServiceDrivenPort): UsersServiceDriverPort {

    async function getAllUsers(): Promise<UserDTO[]> {

        const response = await reader.get(UsersResourceConstants.USERS);

        if(!response.length) {
            return <UserDTO[]>[];
        }

        return UsersMapperService.mapToUserDTOCollection(response);
    }

    return {
      getAllUsers
    };
}
