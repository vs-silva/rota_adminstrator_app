import type {RotasMapperInterface} from "./rotas-mapper.interface";
import type {RotaDTO} from "../../dtos/rota.dto";
import {RotasResponseRequestedFieldsConstants} from "../../constants/rotas-response-requested-fields.constants";

async function mapToRotaDTOCollection(data: object[]): Promise<RotaDTO[]> {

    return data.map( rota => (<RotaDTO>{
        // @ts-ignore
        id: parseInt(rota[`${RotasResponseRequestedFieldsConstants.ID}`]),
        // @ts-ignore
        type: rota[`${RotasResponseRequestedFieldsConstants.TYPE}`],
        // @ts-ignore
        date: rota[`${RotasResponseRequestedFieldsConstants.DATE}`],
        // @ts-ignore
        startDate: rota[`${RotasResponseRequestedFieldsConstants.START_DATE}`],
        // @ts-ignore
        endDate: rota[`${RotasResponseRequestedFieldsConstants.END_DATE}`],
        // @ts-ignore
        userID: parseInt(rota[`${RotasResponseRequestedFieldsConstants.USER_ID}`]),
    }));
}


export const RotasMapperService: RotasMapperInterface = {
    mapToRotaDTOCollection
}
