import { ResponseApi } from "../types";

export const fetchFruits = (): Promise<ResponseApi> => {
    return fetch("http://172.25.113.186:8888/api/fruits.json").then(
        (response) => response.json()
    );
};
