import type {RotaDTO} from "../business/dtos/rota.dto";

export interface RotasServiceDriverPort {
    getAllRotas(): Promise<RotaDTO[]>;
    getRotaByID(rotaID: number): Promise<RotaDTO>;
}
