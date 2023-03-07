import type {RotasServiceDrivenPort} from "../ports/rotas-service-driven.port";
import settings from "../../../settings";
import ApiEngine from "../../../apiengine";

export function RotasApiClientAdapter(): RotasServiceDrivenPort {

    const endpoint = settings.endpoint;
    const requestParams = {
        key: settings.apiKey
    };

    async function get(resource:string): Promise<object[]> {
        const response = await ApiEngine.get(`${endpoint}${resource}`, { params: requestParams });
        return response['data'];
    }

    async function getByID(resource:string, resourceID: string): Promise<object> {
        const response = await ApiEngine.get(`${endpoint}${resource}/${resourceID}`, { params: requestParams });
        return response['data'];
    }

    return {
      get,
      getByID
    };
}
