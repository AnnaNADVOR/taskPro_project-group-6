import css from './Card.module.css';
import sprite from '../../../assets/images/sprite.svg';
import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import Modal from 'components/Modal/Modal';
import CardForm from 'components/Forms/BoardForms/CardForm/CardForm';
import Progress from '../Progress/Progress';
// import { useDispatch } from "react-redux";

const Card = ({ newCard }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

console.log("new", newCard.newCard)
  //date
  const today = new Date();
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  }
  const formattedDate = formatDate(today);

  //priorityOptions
  const priority = newCard.priority;
  let color;
  switch (priority) {
    case 'Low':
      color = 'var(--priority-low-color)';
      break;
    case 'Medium':
      color = '#E09CB5';
      break;
    case 'High':
      color = '#BEDBB0';
      break;
    case "Without":
      color = 'var(--priority-color-without)';
      break;
    default:
      color = `var(--priority-color-without)`;
  }

  //progress popup
  const [showMenu, setShowMenu] = useState(false);
  const [setProgress] = useState('');

  useEffect(() => {
    const handleClickOutside = event => {
      setShowMenu(false);
    };

    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleProgressChange = progress => {
    setProgress(progress);
    setShowMenu(false);
  };

  // const dispatch = useDispatch(); 

  return (
    <>
      <div className={css.card} style={{ borderLeft: `4px solid ${color}` }}>
        <h4 className={css.cardTitle}>{newCard.title}</h4>
        <p className={css.cardDescription}>{newCard.description}
          {/* Create visually appealing and functional design prototypes based on
          the approved concepts, ensuring seamless user experience and
          incorporating feedback for iterative improvements. */}
        </p>
        <div className={css.cardOptions}>
          <div className={css.optionsInfo}>
            <div className={css.optionWrapper}>
              <h5 className={css.optionTitle}>Priority</h5>
              <div className={css.priorityLabel}>
                <span
                  className={css.priorityMark}
                  style={{ backgroundColor: color }}
                ></span>
                <p>{newCard.priority}</p>
              </div>
            </div>
            <div className={css.optionWrapper}>
              <h5 className={css.optionTitle}>Deadline</h5>
              <p>{formattedDate}</p>
            </div>
          </div>
          <ul className={css.optionsBtnList}>
            <li className={css.deadlineNotify}>
              <button className={css.optionBtn} type="button">
                <svg className={css.bell}>
                  <use href={`${sprite}#bell-16`}></use>
                </svg>
              </button>
            </li>
            <li>
              <button
                className={css.optionBtn}
                type="button"
                onClick={toggleMenu}
              >
                <svg className={css.optionBtnSvg}>
                  <use href={`${sprite}#remove-16`}></use>
                </svg>
              </button>
              <div className={css.progressContainer}>
                {showMenu && (
                  <Progress
                    showMenu={showMenu}
                    handleProgressChange={handleProgressChange}
                    toggleMenu={toggleMenu}
                  />
                )}
              </div>
            </li>
            <li className={css.btnItem}>
              <button
                className={css.optionBtn}
                type="button"
                onClick={toggleModal}
              >
                <svg className={css.optionBtnSvg}>
                  <use href={`${sprite}#pencil-16`}></use>
                </svg>
              </button>
            </li>
            <li>
              <button className={css.optionBtn} type="button">
                <svg className={css.optionBtnSvg}>
                  <use href={`${sprite}#trash-16`}></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {showModal && (
        <Modal closeModal={toggleModal}>
          <CardForm title="Edit card" action="Edit" />
        </Modal>
      )}
    </>
  );
};

export default Card;
