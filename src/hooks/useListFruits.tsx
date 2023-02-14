import { useEffect, useState } from "react";
import { fetchFruits } from "../services/getListFruits";

const useListFruits = () => {
    const [fruitsList, setFruitsList] = useState<string[]>([]);
    useEffect(() => {
        fetchFruits().then((res) => {
            const {
                data: { fruits },
            } = res;
            const sliceFruits = fruits.slice(0, 6);
            setFruitsList(sliceFruits);
        });
    }, []);
    return { fruitsList };
};

export default useListFruits;
