import {defineStore} from "pinia";
import {StoreIdentifierConstants} from "./constants/store-identifier.constants";
import {UserStore} from "./sub-stores/user.store";

export default {
  useUserStore: defineStore(StoreIdentifierConstants.USER_STORE, UserStore)
};
