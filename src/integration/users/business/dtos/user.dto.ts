import type {RotaDTO} from "../../../rotas/business/dtos/rota.dto";

export interface UserDTO {
    id: number;
    name: string;
    email: string;
    rotas: RotaDTO[];
}
