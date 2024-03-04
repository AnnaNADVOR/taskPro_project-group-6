import React from 'react';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal/Modal';
import MainAddButton from 'components/Buttons/MainAddButton/MainAddButton';
import BoardBackgroundPicker from 'components/BoardBackgroundPicker/BoardBeckgroundPicker';
import BoardMarkPicker from 'components/BoardMarkPicker/BoardMarkPicker';
// import { getBoardSelector } from 'redux/auth/authSelectors';
import 'react-toastify/dist/ReactToastify.css';
import css from '../EditBoardForm/EditBoardForm.module.css';

const TitleSchema = Yup.object().shape({
  boardTitle: Yup.string().required('Title is required'),
});

const AddBoardForm = ({
  onClose,
  onCreateBoard,
  btnName,
  boardName,
  currentBoard,
}) => {
  const [backgroundName, setBackgroundName] = useState('00');
  const [iconName, setIconName] = useState('icon-project');
  const [isDuplicate, setIsDuplicate] = useState(false);
  // const boards = useSelector(getBoardSelector);
  const [boards, setBoards] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  let updatedBackground;
  let updatedIcon;
  if (btnName === 'Edit') {
    updatedBackground =
      backgroundName !== '00' ? backgroundName : currentBoard.background;

    updatedIcon = iconName !== 'marc-circuls-18' ? iconName : currentBoard.icon;
  }

  const handleCreateBoard = boardInfo => {
    const newBoard = { ...boardInfo, id: boards.length + 1 };
    setBoards([...boards, newBoard]);
  };

  return (
    !showModal && (
      <Modal onClose={toggleModal}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <h2 className={css.modalTitle}>New Board</h2>

        <Formik
          initialValues={{
            boardTitle: boardName,
          }}
          validationSchema={TitleSchema}
          onSubmit={(values, { resetForm }) => {
            if (btnName === 'Create') {
              if (boards.some(el => el.title === values.boardTitle)) {
                setIsDuplicate(true);
                return toast.warn('This title already exists!');
              }
              const boardInfo = {
                values,
                background: backgroundName,
                icon: iconName,
              };
              onCreateBoard(boardInfo);
              setIsDuplicate(false);
              handleCreateBoard(boardInfo);

              resetForm();
              onClose();
            }
          }}
        >
          {({ handleChange, values }) => (
            <Form>
              <label htmlFor="boardTitle"></label>
              <Field
                className={css.inputField}
                text="Title"
                id="boardTitle"
                name="boardTitle"
                type="text"
                onChange={handleChange}
                value={values.boardTitle || ''}
              />
              <ErrorMessage
                className={css.inputErrorMessage}
                name="boardTitle"
                component={'p'}
              />
              {isDuplicate && (
                <p className={css.duplicate}>Title is duplicate!</p>
              )}

              <p className={css.subtitle}>Icons</p>
              <BoardMarkPicker
                onChangeIcon={setIconName}
                currentBoardIcon={updatedIcon}
              />
              <p className={css.subtitle}>Background</p>

              <BoardBackgroundPicker
                onChangeImage={setBackgroundName}
                currentBoardBackground={updatedBackground}
              />

              <MainAddButton
                type="submit"
                text="Create"
                click={handleCreateBoard}
              />
            </Form>
          )}
        </Formik>
      </Modal>
    )
  );
};

export default AddBoardForm;
