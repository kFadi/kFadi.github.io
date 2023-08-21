import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronDown } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
import useClickOutside from "../../custom/useClickOutside";
import "./Lang.css";

function Lang(): JSX.Element {

    const [open,setOpen] = useState<boolean>(false);
    const [t, i18n ] = useTranslation();
    
    const langRef = useRef<any>(null);
    useClickOutside(langRef,()=>{ if (open) setOpen(false) });
    
    const changeLang = (lng: string) => {
        setOpen(false);
        i18n.changeLanguage(lng)
    }
        
    return (
        <div className="lang" ref={langRef}>
            
            <div className={"lang-trigger " + i18n.language} title={t("header.lang.title")} onClick={() => setOpen(!open)}>
                <FaGlobe className="lang-trigger__icn1"/>
                <div className={"lang-trigger__icn2 " + i18n.language}>
                    <BiChevronDown/>
                </div>
            </div>
            
            <div className={"lang-content" + (open? " show":"")}>
                { (i18n.language!=="en") && (<div className="lang-content__itm" onClick={() => changeLang("en")}>English</div>) }
                { (i18n.language!=="he") && (<div className="lang-content__itm"  onClick={() => changeLang("he")}>עברית</div>) }
                { (i18n.language!=="ar") && (<div className="lang-content__itm"  onClick={() => changeLang("ar")}>العربيّة</div>) }
            </div>
        </div>
    );
}

export default Lang;
