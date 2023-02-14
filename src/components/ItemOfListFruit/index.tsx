interface Props {
    fruit: string;
}

const ItemOfListFruit = ({ fruit }: Props) => {
    return (
        <li className="px-2 py-3  text-xs  cursor-pointer hover:text-hoverColor">
            {fruit}
        </li>
    );
};

export default ItemOfListFruit;
