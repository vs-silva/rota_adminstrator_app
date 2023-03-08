import {RotasService} from "./rotas.service";
//import {RotasApiClientAdapter} from "./adapters/rotas-api-client.adapter";
import {RotasApiMockAdapter} from "./adapters/rotas-api-mock.adapter";

export default RotasService(RotasApiMockAdapter());
