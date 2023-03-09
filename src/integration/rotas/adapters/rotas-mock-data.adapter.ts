import type {RotasServiceDrivenPort} from "../ports/rotas-service-driven.port";
import RotasMockData from "../../../mockdata/rotas-mock.data";


export function RotasMockDataAdapter(): RotasServiceDrivenPort {

    const data = {
        rotas: RotasMockData,
    }

    async function get(resource:string): Promise<object[]> {
        const key = resource.replace('/','');
        // @ts-ignore
        return data[`${key}`];
    }

    async function getByID(resource:string, resourceID: string): Promise<object> {
        const key = resource.replace('/','');
        // @ts-ignore
        return data[`${key}`].find(rota => rota.id === parseInt(resourceID));
    }

    return {
        get,
        getByID
    }
}
