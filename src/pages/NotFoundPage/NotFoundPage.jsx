import NotFoundImg from '../../assets/images/404-min.png';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={css.container}>
            <div className={css.infoContainer}>
                <img className={css.notFoundImg} alt='error 404' src={NotFoundImg} width='300px' height='150px'/>
                <p className={css.infoText}>
                    Sorry... <br/>               
                    The page you requested could not be found.
                </p>
            </div>
      </div>
  )
};

export default NotFoundPage;