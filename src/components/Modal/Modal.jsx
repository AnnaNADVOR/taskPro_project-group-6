import { useEffect } from "react";

function Modal({ closeModal, children}) {
    useEffect(() => {
        const onEscClick = (event) => {
            if (event.code === "Escape") {
                closeModal();
            }
        }
        
        window.addEventListener("keydown", onEscClick);
        
        return () => {
            window.removeEventListener('keydown', onEscClick);
        }

    }, [closeModal]);
    
    const onOverlayClisk = (event) => {
    
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }

    return ( 
        <div onClick={onOverlayClisk}>
            <div>
                <button onClick={closeModal}></button>               
                {children}      
            </div>
        </div>
    )    
}

export default Modal; 