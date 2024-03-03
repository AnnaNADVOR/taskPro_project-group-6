import { nanoid } from 'nanoid';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import css from '../Forms/BoardForms/EditBoardForm/EditBoardForm.module.css';

const BoardMarkPicker = ({ onChangeIcon, currentBoardIcon }) => {
  const icons = [
    'marc-circuls-18',
    'marc-star-18',
    'marc-loading-18',
    'marc-puzzle-18',
    'marc-cube-18',
    'marc-lightning-18',
    'marc-colors-18',
    'marc-hexagon-18',
  ];

  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    if (!selectedValue) {
      setSelectedValue(currentBoardIcon || 'marc-circuls-18');
    }
  }, [currentBoardIcon, selectedValue]);

  const handleRadioChange = icon => {
    setSelectedValue(icon);
    onChangeIcon(icon);
  };

  return (
    <div className={css.markPickerWrapper}>
      {icons.map(icon => {
        const id = nanoid();
        return (
          <label className={css.markPickerlabel} key={id}>
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
        );
      })}
    </div>
  );
};

export default BoardMarkPicker;
