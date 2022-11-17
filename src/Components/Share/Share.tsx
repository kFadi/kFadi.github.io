import "./Share.css";
import { useTranslation} from 'react-i18next';
import { FaShareAlt } from 'react-icons/fa';
import {
    EmailIcon,
    EmailShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import { useRef, useState } from "react";
import useClickOutside from "../../custom/useClickOutside";


function Share(): JSX.Element {
    
    const [open,setOpen] = useState<boolean>(false);
    const [t, i18n ] = useTranslation();
    const sharedUrl = "https://kfadi.github.io/";

    const shareRef = useRef<any>(null);
    useClickOutside(shareRef,()=>{ if (open) setOpen(false) });
    
    return (
        <div className={"share " + i18n.language} ref={shareRef}>
            
            <div className={"share-cover" + (open? " opened":"")} onClick={() => setOpen(!open)}>
                <FaShareAlt className="share-cover__icn"/>
                <div className="share-cover__txt">{t("header.share.title")}</div>
            </div>

            <div className="share-content">
                <div className="share-item" title={t("header.share.whatsapp.title")}>
                    <WhatsappShareButton
                        className="share-item__btn"
                        title={t("header.share.whatsapp.shared_title")}
                        url={sharedUrl}
                    >
                        <WhatsappIcon round={true} className="share-item__icn whatsapp"/>        
                    </WhatsappShareButton>
                </div>  
                <div className="share-item" title={t("header.share.linkedin.title")}>
                <LinkedinShareButton
                    className="share-item__btn"
                    source={t("header.share.linkedin.shared_source")}
                    url={sharedUrl}
                >
                    <LinkedinIcon round={true} className="share-item__icn linkedin"/>       
                </LinkedinShareButton>
                </div>
                <div className="share-item" title={t("header.share.email.title")}>
                <EmailShareButton
                    className="share-item__btn"
                    subject={t("header.share.email.shared_subject")}
                    body={t("header.share.email.shared_body")}
                    url={sharedUrl}
                >    
                    <EmailIcon round={true} className="share-item__icn email"/>        
                </EmailShareButton>
                </div>
            </div>

            {/* <WhatsappShareButton
                className="share-social share-whatsapp"
                title={t("header.share.whatsapp.shared_title")}
                url={sharedUrl}
            >
                    <div className="share-social-icon-wrp" title={t("header.share.whatsapp.title")}>
                        <WhatsappIcon round={true} className="share-social-icon"/>
                    </div>  
            </WhatsappShareButton> */}

            

            

        </div>
    );
}

export default Share;
