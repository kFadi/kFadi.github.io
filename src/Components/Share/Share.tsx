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
    const shareIconSize = 33;

    return (
        <div className={"share flex flx-row flx-center" + (i18n.language==="he"? " rtl":"")}>
            
            <div className="share-icon flex flx-row flx-center">
                <FaShareAlt />
                <div>{t("header.share.title")}</div>
            </div>

            <WhatsappShareButton
                className="share-social share-whatsapp"
                title={t("header.share.whatsapp.shared_title")}
                url={sharedUrl}
            >
                    <div className="share-social-icon" title={t("header.share.whatsapp.title")}>
                        <WhatsappIcon size={shareIconSize} round={true} />
                    </div>  
            </WhatsappShareButton>

            <LinkedinShareButton
                className="share-social share-linkedin"
                source={t("header.share.linkedin.shared_source")}
                url={sharedUrl}
            >
                    <div className="share-social-icon" title={t("header.share.linkedin.title")}>
                        <LinkedinIcon size={shareIconSize} round={true} />
                    </div>
            </LinkedinShareButton>

            <EmailShareButton
                className="share-social share-email"
                subject={t("header.share.email.shared_subject")}
                body={t("header.share.email.shared_body")}
                url={sharedUrl}
            >
                    <div className="share-social-icon" title={t("header.share.email.title")}>
                        <EmailIcon size={shareIconSize} round={true} />
                    </div>
            </EmailShareButton>

        </div>
    );
}

export default Share;
