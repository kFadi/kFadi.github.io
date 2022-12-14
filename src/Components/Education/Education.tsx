import img_jo from "../../assets/images/education/ed_john_bryce.png";
import img_ne from "../../assets/images/education/ed_netanya_academic.png";
import img_te from "../../assets/images/education/ed_technion.png";

import { useTranslation} from 'react-i18next';
import "./Education.css";
import { Fragment } from "react";
import FrameShot from "../FrameShot/FrameShot";

function Education(): JSX.Element {

    const [t, i18n ] = useTranslation();
    return (
        <div className={"education " + i18n.language}>

            <div className="edu-tabs">
                <input id="tab1" type="radio" name="tabs" checked/>
                <label htmlFor="tab1">
                    <img className="edu-item__img" src={img_jo} alt="Johb Bryce logo" />
                </label>

                <input id="tab2" type="radio" name="tabs"/>
                <label htmlFor="tab2">
                    <img className="edu-item__img" src={img_ne} alt="Netanya Academic logo" />
                </label>

                <input id="tab3" type="radio" name="tabs"/>
                <label htmlFor="tab3">
                    <img className="edu-item__img" src={img_te} alt="Technion logo" />
                </label>                
            </div>
            {/* * * * */}
            
            <div className="edu-content">
                <div className="edu-item content1">
                    <div className="edu-item__grp1">
                        <div className="edu-item__year">{t("education.john_bryce.year")}</div>
                        <div className="edu-item__name">{t("education.john_bryce.name")}</div>
                    </div>
                    {/* <img className="edu-item__img" src={img_jo} alt="Johb Bryce logo" /> */}
                    <div className="edu-item__grp2">
                        <div className="edu-item__info1">{t("education.john_bryce.info1")}</div>
                        <div className="edu-item__info2">{t("education.john_bryce.info2")}</div>
                    </div>
                </div>
                
                <div className="edu-item content2">
                    <div className="edu-item__grp1">
                        <div className="edu-item__year">{t("education.netanya.year")}</div>
                        <div className="edu-item__name">{t("education.netanya.name")}</div>
                    </div>
                    {/* <img className="edu-item__img" src={img_ne} alt="Netanya Academic logo" /> */}
                    <div className="edu-item__grp2">
                        <div className="edu-item__info1">{t("education.netanya.info1")}</div>
                        <div className="edu-item__info2">{t("education.netanya.info2")}</div>
                    </div>
                </div>
                <div className="edu-item content3">
                    <div className="edu-item__grp1">        
                        <div className="edu-item__year">{t("education.technion.year")}</div>
                        <div className="edu-item__name">{t("education.technion.name")}</div>
                    </div>
                    {/* <img className="edu-item__img" src={img_te} alt="Technion logo" /> */}
                    <div className="edu-item__grp2">
                        <div className="edu-item__info1">{t("education.technion.info1")}</div>
                        {/* <div className="edu-item__info2">{t("education.technion.info2")}</div> */}
                    </div>
                </div>
            </div>
			
        </div>
    );
}

export default Education;
