import {UsersServiceDrivenPort} from "../ports/users-service-driven.port";
import ApiEngine from "../../../apiengine";
import settings from "../../../settings";

export function UsersApiClientAdapter(): UsersServiceDrivenPort {

    const endpoint = settings.endpoint;
    const requestParams = {
      key: settings.apiKey
    };


    async function get(resource:string): Promise<object[]> {
        const response = await ApiEngine.get(`${endpoint}${resource}`, { params: requestParams });
        return response['data'];
    }

    return {
      get
    };
}
