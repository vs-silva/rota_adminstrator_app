import Eventbus from "../../../eventbus";
import {EventTypeConstants} from "../../../eventbus/event-type.constants";

function handleRotaDetailViewClick(rotaID: number):void {
    Eventbus.emit(EventTypeConstants.VIEW_USER_ROTAS_DETAILS, rotaID);
}

export const RotasTableComponentEventHandlers = Object.freeze({
    handleRotaDetailViewClick
});
