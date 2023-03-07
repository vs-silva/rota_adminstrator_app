import {RotasService} from "./rotas.service";
import {RotasApiClientAdapter} from "./adapters/rotas-api-client.adapter";

export default RotasService(RotasApiClientAdapter());
