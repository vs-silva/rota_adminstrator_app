import type {RotaDTO} from "../../dtos/rota.dto";

export interface RotasMapperInterface {
    mapToRotaDTOCollection(data: object[]): Promise<RotaDTO[]>;
}
