import {UsersService} from "./users.service";
import {UsersApiClientAdapter} from "./adapters/users-api-client.adapter";

export default UsersService(UsersApiClientAdapter());
