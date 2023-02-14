import { ResponseApi } from "../types";

export const fetchFruits = (URL: string): Promise<ResponseApi> => {
    return fetch(URL).then((response) => response.json());
};
