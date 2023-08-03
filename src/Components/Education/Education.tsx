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

            <input id="rd1" type="radio" name="radio_group" checked/>
            <input id="rd2" type="radio" name="radio_group"/>
            <input id="rd3" type="radio" name="radio_group"/>

            <div className="edu-tabs">
                <label htmlFor="rd1" className="tab" id="tab1">
                    <img className="tab-img" src={img_jo} alt="Johb Bryce logo" />
                </label>
                <label htmlFor="rd2" className="tab" id="tab2">
                    <img className="tab-img" src={img_ne} alt="Netanya Academic logo" />
                </label>
                <label htmlFor="rd3" className="tab" id="tab3">
                    <img className="tab-img" src={img_te} alt="Technion logo" />
                </label>     
            </div>
            
            {/* * * * */}

            <div className="edu-panels">   
                <div className="panel" id="panel1">
                        <div className="panel-grp1">
                            <div className="grp1-year">{t("education.john_bryce.year")}</div>
                            <div className="grp1-name">{t("education.john_bryce.name")}</div>
                        </div>
                        <div className="panel-grp2">
                            <div className="grp2-info1">{t("education.john_bryce.info1")}</div>
                            <div className="grp2-info2">{t("education.john_bryce.info2")}</div>
                        </div>
                </div>
                <div className="panel" id="panel2">
                        <div className="panel-grp1">
                            <div className="grp1-year">{t("education.netanya.year")}</div>
                            <div className="grp1-name">{t("education.netanya.name")}</div>
                        </div>
                        <div className="panel-grp2">
                            <div className="grp2-info1">{t("education.netanya.info1")}</div>
                            <div className="grp2-info2">{t("education.netanya.info2")}</div>
                        </div>
                </div>
                <div className="panel" id="panel3">
                        <div className="panel-grp1">
                            <div className="grp1-year">{t("education.technion.year")}</div>
                            <div className="grp1-name">{t("education.technion.name")}</div>
                        </div>
                        <div className="panel-grp2">
                            <div className="grp2-info1">{t("education.technion.info1")}</div>
                        </div>
                </div>
                
            </div>   
        
        </div>
    );
}

export default Education;
