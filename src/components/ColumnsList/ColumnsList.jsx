import css from './ColumnsList.module.css';
import { useSelector } from 'react-redux';
import { selectAllColumns } from '../../redux/columns/selectors';
import Column from './Column';

const ColumnsList = () => {
  const allColumns = useSelector(selectAllColumns);

  return (
    <>
      <div className={css.columnsListContainer}>
        <ul className={css.columnList}>
          {allColumns.map(column => (
            <li key={column._id}>
              <Column id={column._id} title={column.title} column={column} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ColumnsList;
