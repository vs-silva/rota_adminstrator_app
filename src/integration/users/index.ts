import {UsersService} from "./users.service";
//import {UsersApiClientAdapter} from "./adapters/users-api-client.adapter";
import {UsersApiMockAdapter} from "./adapters/users-api-mock.adapter";

export default UsersService(UsersApiMockAdapter());
