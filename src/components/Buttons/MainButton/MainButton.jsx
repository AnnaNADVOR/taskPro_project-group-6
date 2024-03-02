import sprite from "../../../assets/images/sprite.svg";
import css from "./MainButton.module.css";

const MainButton = ({ text, click }) => {
    return (
        <button className={css.button} onClick={click} type="submit">
            <svg >
                <use href={`${sprite}#plus-black-background-28`} />
            </svg>
            {text}
        </button>
    )
}

export default MainButton;