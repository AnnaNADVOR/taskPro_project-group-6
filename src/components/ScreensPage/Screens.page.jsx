// import BoardStart from 'components/BoardsList/BoardStart/BoardStart';
import AddBtnColumn from 'components/BoardsList/AddBtnColumn/AddBtnColumn';
// import TestBtn from 'components/TestBtn/TestBtn';
import ColumnsList from '../ColumnsList/ColumnsList';

const ScreensPage = () => {
  return (
    <div style={{ padding: '20px', display: 'flex' }}>
      {/* <TestBtn /> */}
      {/* <BoardStart /> */}
      <ColumnsList />
      <AddBtnColumn />
    </div>
  );
};

export default ScreensPage;
