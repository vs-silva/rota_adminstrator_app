import type {RotaDTO} from "../../../integration/rotas/business/dtos/rota.dto";
import Eventbus from "../../../eventbus";
import {EventTypeConstants} from "../../../eventbus/event-type.constants";

function rotasDetailsClickHandlers(rota: RotaDTO): void {
    Eventbus.emit(EventTypeConstants.OPEN_MODAL);
    Eventbus.emit(EventTypeConstants.VIEW_USER_ROTAS_DETAILS, rota);
}

export const RotasTableEventsHandlers = Object.freeze({
    rotasDetailsClickHandlers
});
