import {ref} from "vue";
import type {RotaDTO} from "../../integration/rotas/business/dtos/rota.dto";
import Rotas from "../../integration/rotas";

export function RotasStore() {

    const rotas = ref(<RotaDTO[]>[]);
    const rota = ref(null);

    async function getAllRotas(): Promise<void> {
        rotas.value = await Rotas.getAllRotas();
    }

    return {
        getAllRotas,
        rotas,
        rota
    };
}
