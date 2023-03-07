import {defineStore} from "pinia";
import {StoreIdentifierConstants} from "./constants/store-identifier.constants";
import {UserStore} from "./sub-stores/user.store";
import {RotasStore} from "./sub-stores/rotas.store";

export default {
  useUserStore: defineStore(StoreIdentifierConstants.USER_STORE, UserStore),
  useRotasStore: defineStore(StoreIdentifierConstants.ROTA_STORE, RotasStore)
};
