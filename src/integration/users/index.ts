import {UsersService} from "./users.service";
import {UsersApiClientAdapter} from "./adapters/users-api-client.adapter";
//import {UsersMockDataAdapter} from "./adapters/users-mock-data.adapter";

export default UsersService(UsersApiClientAdapter());
