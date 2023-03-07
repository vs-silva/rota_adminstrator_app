import type {RotasServiceDrivenPort} from "./ports/rotas-service-driven.port";
import type {RotasServiceDriverPort} from "./ports/rotas-service-driver.port";
import type {RotaDTO} from "./business/dtos/rota.dto";
import {RotasResourceConstants} from "./business/constants/rotas-resource.constants";
import {RotasMapperService} from "./business/mapper/rotas-mapper/rotas-mapper.service";

export function RotasService(reader: RotasServiceDrivenPort): RotasServiceDriverPort {

    async function getAllRotas(): Promise<RotaDTO[]> {

        const response = await reader.get(RotasResourceConstants.ROTAS);

        if(!response.length) {
            return <RotaDTO[]>[];
        }

        return await RotasMapperService.mapToRotaDTOCollection(response);
    }

    async function  getRotaByID(rotaID: number): Promise<RotaDTO> {

        const response = await reader.getByID(RotasResourceConstants.ROTAS, `${rotaID}`);

        if(!response) {
            return <RotaDTO>{};
        }

        const result = await RotasMapperService.mapToRotaDTOCollection([response]);
        return result[0];

    }

    return {
        getAllRotas,
        getRotaByID
    };
}
