import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import { IoMdCloseCircle } from "react-icons/io";
import "./Modal.css";

interface ModalProps {
	open: boolean;
    onClose: Function;
    date: string;
    isDark: boolean;
}

function Modal(props: ModalProps): JSX.Element {
    const [t, i18n ] = useTranslation();
    if (!props.open) { return null!}
    
    return ReactDOM.createPortal(
        <>
            <div className={"overlay " + (props.isDark? "drk":"brt")}/>
            <div className={"modal " + (props.isDark? "drk":"brt")}>
                <button onClick={()=>{props.onClose()}}>
                    <IoMdCloseCircle size={36} id="modal__icn" title={t("header.info.close")}/>
                </button>
                <div>
                    <div className="modal__line"><b> {props.date}</b> </div>
                    <div className="modal__line"> {<br/>}<u>Demonstrating:</u></div>
                    <div className="modal__line"> <b>Accessibility</b> (Themes), <b>Localization</b> (Multilingual), <b>Responsive</b> Web Design & more.. </div>
                    <div className="modal__line"> {<br/>} Deployed @ <b>GitHub-Pages</b>  </div>

                </div>
            </div>
        </>,
        document.getElementById("portal")!
    );
}

export default Modal;
