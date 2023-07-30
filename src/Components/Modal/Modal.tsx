import ReactDOM from "react-dom";
import "./Modal.css";

interface ModalProps {
	open: boolean;
    onClose: Function;
    children: any;
}

function Modal(props: ModalProps): JSX.Element {
    if (!props.open) { return null!}
    return ReactDOM.createPortal(
        <>
            <div className="overlay"/>
            <div className="modal">
                <button onClick={()=>{
                    console.log("open >> "+props.open);
                    props.onClose()}}
                >Close Modal</button>
                {props.children}
            </div>
        </>,
        document.getElementById("portal")!
    );
}

export default Modal;
