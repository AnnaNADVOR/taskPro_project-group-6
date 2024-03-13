import css from './BoarsStart.module.css';

const BoardStart = () => {
  return (
    <div className={css.boardStartContainer}>
      <p className={css.boardStartText}>
        Before starting your project, it is essential
        <span className={css.boardStartTextAccent}> to create a board </span>to
        visualize and track all the necessary tasks and milestones. This board
        serves as a powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </p>
    </div>
  );
};
export default BoardStart;
