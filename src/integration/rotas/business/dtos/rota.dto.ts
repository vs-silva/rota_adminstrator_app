import type {UserDTO} from "../../../users/business/dtos/user.dto";

export interface RotaDTO {
    id: number;
    type: string;
    date: string;
    startDate: string;
    endDate: string;
    userID: number;
    user?: UserDTO;
}
