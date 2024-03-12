import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoard } from '../../../redux/boards/operation';
import { selectUser } from '../../../redux/auth/selectors';
import BoardListItem from '../BoardListItem/BoardListItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import css from './BoardList.module.css';

const BoardList = () => {
  const { user } = useSelector(selectUser);
  const initialBoards = user.boards;
  const dispatch = useDispatch();

  const [boards, setBoards] = useState(initialBoards);
  const [activeBoardId, setActiveBoardId] = useState(null);
  
  const handleClick = boardId => {
    dispatch(getBoard(boardId));
    setActiveBoardId(boardId);
  };

  const handleDragEnd = result => {
    if (!result.destination) return;

    const newBoards = Array.from(boards);
    const [removed] = newBoards.splice(result.source.index, 1);
    newBoards.splice(result.destination.index, 0, removed);

    setBoards(newBoards);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="boardList">
        {(provided, snapshot) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={
              snapshot.isDraggingOver ? css.draggingOver : css.boardList
            }
          >
            {boards.map((board, index) => (
              <Draggable key={board._id} draggableId={board._id} index={index}>
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => handleClick(board._id)}
                    className={`${snapshot.isDragging ? css.dragging : ''} ${
                      activeBoardId === board._id ? css.activeBoard : ''
                    }`}
                  >
                    <BoardListItem board={board} allBoards={boards} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BoardList;
