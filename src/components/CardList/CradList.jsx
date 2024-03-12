import { useSelector } from "react-redux";
import { selectVisibleTasks } from "../../redux/boards/selectors";
import Card from "../CardList/Card/Card";

const CardList = ({columnId}) => {
    const visibleCards = useSelector(selectVisibleTasks);

    const columnCards = visibleCards.filter(item => item.columnId === columnId)
   
    return (
        <ul style={{display: "flex", flexDirection:"column", gap:"8px"}}>
            {columnCards.length > 0 &&
                <>
                    {columnCards.map(card =>
                        <li key={card._id}>
                            <Card newCard={card} columnId={columnId} />
                        </li>
                    )}
                </>          
            }
        </ul>            
    )
}

export default CardList; 
