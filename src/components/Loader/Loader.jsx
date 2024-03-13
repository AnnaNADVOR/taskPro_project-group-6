import { RotatingLines } from 'react-loader-spinner';

import style from './Loader.module.css';

export default function Loader() {
  return (
    <div className={style.loader}>
      <RotatingLines
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        color="black"
        ariaLabel="rotating-lines-loading"
        strokeColor="#9dc888"
      />
    </div>
  );
}
