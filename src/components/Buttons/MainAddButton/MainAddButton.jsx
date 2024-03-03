import sprite from "../../../assets/images/sprite.svg";
import css from "./MainButton.module.css";

const MainAddButton = ({ text, click }) => {
    return (
        <button className={css.button} onClick={click} type="submit">
            <svg >
                <use href={`${sprite}#plus-black-background`} />
            </svg>
            {text}
        </button>
    )
}

export default MainAddButton;