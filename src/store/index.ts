import {defineStore} from "pinia";
import {StoreIdentifierConstants} from "./constants/store-identifier.constants";
import {UserStore} from "./sub-stores/user.store";
import {RotaStore} from "./sub-stores/rota.store";

export default {
  useUserStore: defineStore(StoreIdentifierConstants.USER_STORE, UserStore),
  useRotaStore: defineStore(StoreIdentifierConstants.ROTA_STORE, RotaStore),
};
