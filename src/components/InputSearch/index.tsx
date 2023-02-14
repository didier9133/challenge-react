import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import useListFruits from "../../hooks/useListFruits";
import ItemOfListFruit from "../ItemOfListFruit";

const Search = () => {
    const { fruitsList } = useListFruits();
    const [inputValue, setInputValue] = useState("");
    const [openList, setOpenList] = useState(false);

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    };

    const fruitsFiltered = fruitsList.filter((fruit) => {
        return fruit.toLowerCase().includes(inputValue.toLowerCase());
    });

    const handlerClick = () => setOpenList(!openList);
    return (
        <>
            <div className="w-64 font-medium shadow-xl ">
                <div className="relative">
                    <input
                        value={inputValue}
                        onChange={handlerChange}
                        type={"text"}
                        placeholder={
                            openList
                                ? "This is a search input"
                                : "Select an item"
                        }
                        className="bg-white outline-none  w-full px-2 py-3 flex items-center justify-between rounded"
                    />
                    {openList ? (
                        <BiChevronUp
                            onClick={handlerClick}
                            size={20}
                            className="absolute cursor-pointer top-0 right-2 translate-y-[16px] text-black"
                        />
                    ) : (
                        <BiChevronDown
                            data-testid="drop"
                            onClick={handlerClick}
                            size={20}
                            className="absolute cursor-pointer top-0 right-2 translate-y-[16px] text-dropColor"
                        />
                    )}
                </div>
                {openList ? (
                    <ul className="bg-white rounded rounded-t-none max-h-52 overflow-y-scroll ">
                        {fruitsFiltered.length > 0 ? (
                            fruitsFiltered.map((fruit) => (
                                <ItemOfListFruit key={fruit} fruit={fruit} />
                            ))
                        ) : (
                            <span className="inline-block px-2 py-3  text-xs text-dropColor">
                                No items were found.
                            </span>
                        )}
                    </ul>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default Search;
