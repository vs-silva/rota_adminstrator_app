import {UsersServiceDrivenPort} from "../ports/users-service-driven.port";
import UsersMockData from "../../../mockdata/users-mock.data";

export function UsersMockDataAdapter(): UsersServiceDrivenPort {

    const data = {
        users: UsersMockData
    };

    async function get(resource:string): Promise<object[]> {
        const key = resource.replace('/','');
        // @ts-ignore
        return data[`${key}`];
    }

    return {
      get
    };
}
