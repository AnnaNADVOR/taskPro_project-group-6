import { useSelector } from 'react-redux';
import ColumnsList from '../ColumnsList/ColumnsList';
import HeaderDashboard from 'components/Board/HeaderDashboard/HeaderDashboard';
import { selectBoard } from '../../redux/boards/selectors';
import css from './Screens.page.module.css';

const ScreensPage = () => {
  const { title, background } = useSelector(selectBoard);
  
  const getClassForBackground = background => {
    switch (background) {
      case '01':
        return css.bgImage1;
      case '02':
        return css.bgImage2;
      case '03':
        return css.bgImage3;
      case '04':
        return css.bgImage4;
      case '05':
        return css.bgImage5;
      case '06':
        return css.bgImage6;
      case '07':
        return css.bgImage7;
      case '08':
        return css.bgImage8;
      case '09':
        return css.bgImage9;
      case '10':
        return css.bgImage10;
      case '11':
        return css.bgImage11;
      case '12':
        return css.bgImage12;
      case '13':
        return css.bgImage13;
      case '14':
        return css.bgImage14;
      case '15':
        return css.bgImage15;
      default:
        break;
    }
  };

  const containerClass = `${css.container} ${getClassForBackground(background)}`;
  return (
    <>
      <HeaderDashboard title={title} />
      <div className={containerClass}>
        <ColumnsList />
      </div>
    </>
  );
};

export default ScreensPage;
