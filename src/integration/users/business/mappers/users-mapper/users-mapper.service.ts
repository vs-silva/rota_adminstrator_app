import type {UsersMapperInterface} from "./users-mapper.interface";
import type {UserDTO} from "../../dtos/user.dto";
import {UsersResponseRequestedFieldsConstants} from "../../constants/users-response-requested-fields.constants";

async function  mapToUserDTOCollection(data: object[]): Promise<UserDTO[]> {

    return data.map( user => (<UserDTO>{
        // @ts-ignore
        id: user[`${UsersResponseRequestedFieldsConstants.ID}`],
        // @ts-ignore
        name: `${user[UsersResponseRequestedFieldsConstants.FIRST_NAME]} ${user[UsersResponseRequestedFieldsConstants.LAST_NAME]}`,
        // @ts-ignore
        email: user[`${UsersResponseRequestedFieldsConstants.EMAIL}`],
        rotas: []
    }));
}


export const UsersMapperService: UsersMapperInterface = {
    mapToUserDTOCollection
};
