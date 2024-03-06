import sprite from '../../assets/images/sprite.svg';
import { useState, useEffect } from 'react';
import css from '../Forms/BoardForms/AddBoardForm/AddBoardForm.module.css';

const BoardMarkPicker = ({ onChangeIcon, currentBoardIcon }) => {
  const icons = [
    'mark-circuls-18',
    'mark-star-18',
    'mark-loading-18',
    'mark-puzzle-18',
    'mark-cube-18',
    'mark-lightning-18',
    'mark-colors-18',
    'mark-hexagon-18',
  ];

  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    if (!selectedValue) {
      setSelectedValue(currentBoardIcon || 'mark-circuls-18');
    }
  }, [currentBoardIcon, selectedValue]);

  const handleRadioChange = icon => {
    setSelectedValue(icon);
    onChangeIcon(icon);
  };

  return (
    <div className={css.markPickerWrapper}>
      {icons.map((icon, index) => (
        <label className={css.markPickerlabel} key={index}>
          <input
            className={css.markPickerinput}
            type="radio"
            value={icon}
            name="icon"
            checked={selectedValue === icon}
            onChange={() => handleRadioChange(icon)}
          />
          <svg className={css.markPickersvg}>
            <use href={`${sprite}#${icon}`} />
          </svg>
        </label>
      ))}
    </div>
  );
};

export default BoardMarkPicker;
