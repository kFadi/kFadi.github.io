import "./Theme.css";
import { useTranslation} from 'react-i18next';
import { useState } from "react";



interface ThemeProps {
    handleChange: Function;
}

function Theme(props: ThemeProps): JSX.Element {

    // const [isChecked, setIsChecked] = useState<boolean>(false);
    
    const [t, i18n ] = useTranslation();

    // const hndlChng = (e) => {
    //     e.preventDefault();
    //     props.handleChange(e.target.checked);
    // };
    
    return (
        // <label className="theme" title={t("header.theme.title.start")+" "+String.fromCharCode(8596)+" "+t("header.theme.title.end")}>
        //     <input className="theme__inp" type="checkbox" onChange={(e) => props.handleChange(e.target.checked)}/>
        //     <span className="theme__sld"/>
        // </label>
        <div className="theme" title={t("header.theme.title.start")+" "+String.fromCharCode(8596)+" "+t("header.theme.title.end")}>
            <input id="thm" className="theme__inp" type="checkbox"
                // onChange={(e) => {
                //     e.preventDefault();
                //     props.handleChange(e.target.checked);
                // }}
                // onChange={e => hndlChng(e)}
            />
            {/* <input id="thm" className="theme__inp" type="checkbox" onChange={(e) => props.handleChange(e.target.checked)}/> */}
            <label htmlFor="thm" className="theme__sld"/>
        </div>
    );
}

export default Theme;