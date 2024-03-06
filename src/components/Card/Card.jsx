import css from "./Card.module.css";
import sprite from "../../assets/images/sprite.svg";

const Card = () => {
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
    const priority = "medium"; 
    let color; 
    switch (priority) {
        case 'low':
            color = "#8fa1d0";
            break; 
        case 'medium':
            color = "#E09CB5";
            break; 
        case 'high':
            color = "#BEDBB0";
            break;         
        default:
            color = "rgba(255, 255, 255, 0.3)";               
        }   

    return (
        <div className={css.card} style={{borderLeft: `4px solid ${color}`}}>
            <h4 className={css.cardTitle}>Design and Prototyping SoYummy</h4>
            <p className={css.cardDescription}>Create visually appealing and functional design prototypes based on the approved concepts,
                ensuring seamless user experience and incorporating feedback for iterative improvements.
            </p>
            <div className={css.cardOptions} >
                <div className={css.optionsInfo}>
                    <div className={css.optionWrapper}>
                        <h5 className={css.optionTitle}>Priority</h5>
                        <div className={css.priorityLabel}>
                            <span className={css.priorityMark} style={{backgroundColor: color}}></span> 
                            <p>Low</p>
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
                        <button className={css.optionBtn} type="button">
                            <svg fill="none">
                                <use href={`${sprite}#remove-16`} ></use>
                            </svg>
                        </button>
                    </li>
                    <li className={css.btnItem}>
                        <button className={css.optionBtn} type="button">
                            <svg fill="none">
                                <use href={`${sprite}#pencil-16`} ></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className={css.optionBtn} type="button">
                            <svg  fill="none">
                                <use href={`${sprite}#trash-16`} ></use>
                            </svg>
                        </button>
                    </li>                    
                </ul>
            </div>
        </div>
    )
}

export default Card; 