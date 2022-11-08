import img_en from "../../assets/images/language/en.png";
import img_he from "../../assets/images/language/he.png";
import img_ar from "../../assets/images/language/ar.png";
import { GrLanguage } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Lang.css";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import { BsChevronCompactDown } from "react-icons/bs";
import { useState } from "react";

interface LangProps {
    handleChange: Function;
}

function Lang(props: LangProps): JSX.Element {

    const [showList,setShowList] = useState<boolean>(false);
    const [t, i18n ] = useTranslation();

    const selected = (lng: string) => {
        // setShowList(false);
        props.handleChange(lng);
    }
    
    return (
        <div className="lang">
            <button className={"lang-btn " + ((i18n.language==="en")? "en":((i18n.language==="he")? "he":"ar"))} title={t("header.lang.title")} onClick={() => setShowList(!showList)}>
                <FaGlobe className="lang-icn1"/>
                <BsChevronCompactDown className="lang-icn2"/>
            </button>
            
            {/* <div className={"lang-list " + (showList? "yes":"no")}> */}
            <div className="lang-list">
                { (i18n.language!=="en") && (<button className="lang-select-btn" onClick={() => selected("en")}>English</button>) }
                { (i18n.language!=="he") && (<button className="lang-select-btn"  onClick={() => selected("he")}>עברית</button>) }
                { (i18n.language!=="ar") && (<button className="lang-select-btn ar"  onClick={() => selected("ar")}>العربية</button>) }
            </div>
            
            
            {/* {
                (showList)
                &&
                (
                    <div className="lang-list">
                        { (i18n.language!=="en") && (<button className="lang-select-btn" onClick={() => selected("en")}>English</button>) }
                        { (i18n.language!=="he") && (<button className="lang-select-btn"  onClick={() => selected("he")}>עברית</button>) }
                        { (i18n.language!=="ar") && (<button className="lang-select-btn ar"  onClick={() => selected("ar")}>العربية</button>) }
                    </div>
                )
            } */}
            {/* <label htmlFor="lang-select" className={"lang-label " + i18n.language}>
                <FaGlobe className="lang-icn1"/>
                <BsChevronCompactDown className="lang-icn2"/>
            </label>
            <select name="lang" className="lang-select" onChange={e => props.handleChange(e.target.value)}>
                <option value="en" className="lang-op-en" disabled={i18n.language==="en"} selected>English</option>
                <option value="he" className="lang-op-he" disabled={i18n.language==="he"}>עברית</option>
                <option value="ar" className="lang-op-ar" disabled={i18n.language==="ar"}>العربية</option>
            </select> */}
        </div>
    );
}

export default Lang;
