import { useState } from "react";
import Modal from "../Modal/Modal";
import AddCardForm from "../Forms/BoardForms/AddCardForm/AddCardForm";
import sprite from "../../assets/images/sprite.svg";

 const TestBtn = () => {
    const [showModal, setShowModal] = useState(false); 
    const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
    
    return (     
        <>
            <button onClick={toggleModal}>
                <svg style={{with:"30px", height:"30px"}}>
                    <use href={`${sprite}#plus-black-background`} />
                </svg>
                Add card
            </button>
            {showModal && (
                <Modal closeModal={toggleModal}>
                    <AddCardForm/>
                </Modal>
            )}    
        </>           
    )  
}

export default TestBtn; 