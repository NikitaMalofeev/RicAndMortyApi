import { PropsWithChildren } from 'react';

type ModalWindowProps = {
    title?: string;
    open: boolean;
    handleOpen: () => void;
};
const Modal = ({
    title,
    open,
    handleOpen,
    children,
}: PropsWithChildren<ModalWindowProps>) => {
    const showOverlay = open ? 'modal-overlay-opened' : 'modal-overlay-closed';
    const showModalContainer = open
        ? 'modal-container-opened'
        : 'modal-container-closed';
    return (
        <div className={`modal-overlay ${showOverlay}`}>
            <div className={`modal-container ${showModalContainer}`}>
                <h2>{title}</h2>
                <div className="modal-close-btn-container">
                    <button
                        className="modal-close-button"
                        onClick={handleOpen}
                    >
                        Закрыть
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};
export default Modal;
