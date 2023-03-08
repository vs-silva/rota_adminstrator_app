import {ref} from "vue";
import type {RotaDTO} from "../../integration/rotas/business/dtos/rota.dto";
import Rotas from "../../integration/rotas";

export function RotasStore() {

    const rotas = ref(<RotaDTO[]>[]);
    const rota = ref(<RotaDTO>{});

    async function getAllRotas(): Promise<void> {
        rotas.value = await Rotas.getAllRotas();
    }

    async function getRotaByID(rotaID: number): Promise<void> {
        rota.value = await Rotas.getRotaByID(rotaID);
    }

    return {
        getAllRotas,
        getRotaByID,
        rotas,
        rota
    };
}
