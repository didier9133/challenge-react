import { useEffect, useState } from "react";
import { fetchFruits } from "../services/getListFruits";

const URL = import.meta.env.VITE_URL;
console.log(URL);
const useListFruits = () => {
    const [fruitsList, setFruitsList] = useState<string[]>([]);
    useEffect(() => {
        fetchFruits(URL)
            .then((res) => {
                const {
                    data: { fruits },
                } = res;
                setFruitsList(fruits);
            })
            .catch((err) => console.log(err));
    }, []);
    return { fruitsList };
};

export default useListFruits;
