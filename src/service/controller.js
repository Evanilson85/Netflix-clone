import { api } from "./index";
import { apiFilmes } from "./index";

export default {
  stores: (form) => {
    return api.post("/cadastro", form);
  },
  auth: (form) => {
    return api.post("/auth", form);
  },

  imgFilmes: () => {
    return apiFilmes.get();
  },
};
