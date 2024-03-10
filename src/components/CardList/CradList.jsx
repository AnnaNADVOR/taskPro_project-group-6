import { useSelector } from "react-redux";
import { selectTasks, selectVisibleTasks } from "../../redux/tasks/selectors";
import Card from "../CardList/Card/Card";

const CardList = () => {
    const cards = useSelector(selectTasks);
    const visibleCards = useSelector(selectVisibleTasks);
   
    return (
        <ul>
            {cards.length > 0 && visibleCards.length === 0 ? (console.log("no!")):
           <>
                {visibleCards.map(card =>
                    <li key={card._id}>
                        <Card newCard={card} />
                    </li>
                    )}
            </>
          
            }
        </ul>
            
    )
}

export default CardList; 
