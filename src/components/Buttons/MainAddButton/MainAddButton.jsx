import sprite from "../../../assets/images/sprite.svg";
import css from "./MainAddButton.module.css";

const MainAddButton = ({ text, click }) => {
    const theme = localStorage.getItem('selectedTheme'); 
    let iconId; 
    switch (theme) {
        case 'violet':
            iconId = "#plus-white-background";
            break;  
        default:
            iconId = "#plus-black-background";               
        }   
    return (
        <button className={css.button} onClick={click} type="submit">
            <svg >
                <use href={sprite+iconId} />
            </svg>
            {text}
        </button>
    )
}

export default MainAddButton;