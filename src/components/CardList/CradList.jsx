import { useSelector } from "react-redux";
import { selectTasks } from "redux/tasks/selectors";
import Card from "../CardList/Card/Card";

const CardList = () => {
    const cards = useSelector(selectTasks)
    return (
        <ul>
            {cards.map(card =>
                <li key={card._id}>
                    <Card newCard={card} />
                </li>
            )}
        </ul>
    
    )
}

export default CardList; 