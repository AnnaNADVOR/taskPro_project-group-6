import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';
import css from '../Forms/BoardForms/EditBoardForm/EditBoardForm.module.css';

const BoardBackgroundPicker = ({ onChangeImage, currentBoardBackground }) => {
  const images = [
    '00.png',
    '01.png',
    '02.png',
    '03.png',
    '04.png',
    '05.png',
    '06.png',
    '07.png',
    '08.png',
    '09.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
  ];

  const [selectedValue, setSelectedValue] = useState(0);

  useEffect(() => {
    if (!selectedValue) {
      setSelectedValue(currentBoardBackground || '00');
    }
  }, [currentBoardBackground, selectedValue]);

  const handleRadioChange = index => {
    setSelectedValue(index <= 9 ? `0${index}` : `${index}`);
    const paddedIndex = index.toString().padStart(2, '0');
    const backgroundValue = `${paddedIndex}`;
    onChangeImage(backgroundValue);
  };

  return (
    <div className={css.backPickerWrapper}>
      {images.map((image, index) => {
        const id = nanoid();
        return (
          <label className={css.backPickerLabel} key={id}>
            <input
              className={css.backPickerInput}
              type="radio"
              value={index}
              name="image"
              checked={selectedValue === image.substring(0, 2)}
              onChange={() => handleRadioChange(index)}
            />
            <img
              src={require(`../../images/background/${image}`)}
              alt={`option ${index + 1}`}
              width="28px"
              height="28px"
            />
          </label>
        );
      })}
    </div>
  );
};

export default BoardBackgroundPicker;
