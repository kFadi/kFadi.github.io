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


function Share(): JSX.Element {
    
    const [t, i18n ] = useTranslation();
    const sharedUrl = "https://kfadi.github.io/";
    
    return (
        <div className={"share " + i18n.language}>
            
            <div className="share-cvr">
                <FaShareAlt/>
                <div>{t("header.share.title")}</div>
            </div>

            <div className="share-itm share-whatsapp" title={t("header.share.whatsapp.title")}>
                <WhatsappShareButton
                    className="share-btn"
                    title={t("header.share.whatsapp.shared_title")}
                    url={sharedUrl}
                >
                    <WhatsappIcon round={true} className="share-icn"/>        
                </WhatsappShareButton>
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

            <LinkedinShareButton
                className="share-social share-linkedin"
                source={t("header.share.linkedin.shared_source")}
                url={sharedUrl}
            >
                    <div className="share-social-icon-wrp" title={t("header.share.linkedin.title")}>
                        <LinkedinIcon round={true} className="share-social-icon"/>
                    </div>
            </LinkedinShareButton>

            <EmailShareButton
                className="share-social share-email"
                subject={t("header.share.email.shared_subject")}
                body={t("header.share.email.shared_body")}
                url={sharedUrl}
            >
                    <div className="share-social-icon-wrp" title={t("header.share.email.title")}>
                        <EmailIcon round={true} className="share-social-icon"/>
                    </div>
            </EmailShareButton>

        </div>
    );
}

export default Share;
