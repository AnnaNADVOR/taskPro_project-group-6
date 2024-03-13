import { useSelector } from 'react-redux';

import { selectVisibleTasks } from '../../redux/boards/selectors';
import Card from '../CardList/Card/Card';

import css from '../CardList/Card/Card.module.css';

const CardList = ({ columnId }) => {
  const visibleCards = useSelector(selectVisibleTasks);
  const columnCards = visibleCards.filter(item => item.columnId === columnId);
  return (
    <ul className={css.cardList}>
      {columnCards.length > 0 && (
        <>
          {columnCards.map(card => (
            <li key={card._id}>
              <Card newCard={card} columnId={columnId} />
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default CardList;
