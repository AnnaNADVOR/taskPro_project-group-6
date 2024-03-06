import AddBtnColumn from 'components/BoardsList/AddBtnColumn/AddBtnColumn';
import ColumnsList from '../ColumnsList/ColumnsList';
import css from './Screens.page.module.css';
import HeaderDashboard from 'components/BoardsList/HeaderDashboard/HeaderDashboard';

const ScreensPage = () => {
  return (
    <>
      <HeaderDashboard />
      <div className={css.container}>
        <ColumnsList />
        <AddBtnColumn />
      </div>
    </>
  );
};

export default ScreensPage;
