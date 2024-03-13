import { useState } from 'react';

import css from '../Forms/BoardForms/AddBoardForm/AddBoardForm.module.css';

const BoardBackgroundPicker = ({ onChangeImage, backgroundName }) => {
  const images = [
    { alt: 'defoult black bacground', imgId: '00.png' },
    { alt: 'pink flowering tree on the river', imgId: '01.png' },
    { alt: 'starry night in the mountains', imgId: '02.png' },
    { alt: 'background of green palm leaves', imgId: '03.png' },
    { alt: 'white clouds over the ocean', imgId: '04.png' },
    { alt: 'abstraction in soft shades of violet', imgId: '05.png' },
    { alt: 'a yacht at sea at sunset', imgId: '06.png' },
    { alt: 'japanese cherry blossoms', imgId: '07.png' },
    { alt: 'young moon in the night sky', imgId: '08.png' },
    { alt: 'rocky shore of the ocean', imgId: '09.png' },
    { alt: 'planet in space', imgId: '10.png' },
    { alt: 'colorful hot air balloons in the mountains', imgId: '11.png' },
    { alt: 'view of the blue sky in the mountains', imgId: '12.png' },
    { alt: 'yacht on the azure coast', imgId: '13.png' },
    { alt: 'colorful flying balloons over the plain', imgId: '14.png' },
    { alt: 'beautiful northern lights', imgId: '15.png' },
  ];

  const [selectedValue, setSelectedValue] = useState('');
  const handleRadioChange = imgId => {
    onChangeImage(imgId);
    setSelectedValue(imgId);
  };

  return (
    <div className={css.backPickerWrapper}>
      {images.map(({ alt, imgId }, index) => {
        const imgKey = imgId.replace('.png', '');

        return (
          <label className={css.backPickerLabel} key={imgKey}>
            <input
              className={css.backPickerInput}
              type="radio"
              value={imgId}
              name="image"
              checked={selectedValue === imgKey}
              onChange={() => {
                handleRadioChange(imgKey);
              }}
            />
            <img
              src={require(`../../assets/images/boardBacgrounds/${imgId}`)}
              alt={alt}
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
