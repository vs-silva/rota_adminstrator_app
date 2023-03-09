import {RotasService} from "./rotas.service";
//import {RotasApiClientAdapter} from "./adapters/rotas-api-client.adapter";
import {RotasMockDataAdapter} from "./adapters/rotas-mock-data.adapter";

export default RotasService(RotasMockDataAdapter());
