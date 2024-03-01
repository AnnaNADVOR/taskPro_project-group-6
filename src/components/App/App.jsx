
import sprite from '../../assets/images/sprite.svg';
export const App = () => {
  return (
    <div>
         <svg fill="transparent" width="18" height="18">
            <use  stroke="black" href={`${sprite}#icon-trash-16`} />
          </svg>
    </div>
  );
};
