import ReactDOM from "react-dom";
import "./Modal.css";
import { GrFormClose } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

interface ModalProps {
	open: boolean;
    onClose: Function;
    date: string;
    isDark: boolean;
    // children: any;
}

function Modal(props: ModalProps): JSX.Element {
    const [t, i18n ] = useTranslation();
    if (!props.open) { return null!}
    
    return ReactDOM.createPortal(
        <>
            <div className="overlay"/>
            <div className={"modal" + (props.isDark? " drk":"")}>
                <button onClick={()=>{props.onClose()}}>
                    <IoMdCloseCircle size={36} id="modal__icn" title={t("header.info.close")}/>
                </button>
                <div>
                    <div className="modal__line"><b> {props.date}</b> </div>
                    <div className="modal__line"> {<br/>}<u>Demonstrating:</u></div>
                    <div className="modal__line"> Accessibility (Themes), Localization (Multilingual), Responsive Web Design & more.. </div>
                    <div className="modal__line"> {<br/>} Deployed @ <b>GitHub-Pages</b>  </div>

                </div>
                {/* {props.children} */}
            </div>
        </>,
        document.getElementById("portal")!
    );
}

export default Modal;
