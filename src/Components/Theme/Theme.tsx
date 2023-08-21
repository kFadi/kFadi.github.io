import { useTranslation } from 'react-i18next';
import "./Theme.css";

interface ThemeProps {
    handleChange: Function;
}

function Theme(props: ThemeProps): JSX.Element {

    const [t, i18n ] = useTranslation();

    return (
        <div className="theme" title={t("header.theme.title.start")+" "+String.fromCharCode(8596)+" "+t("header.theme.title.end")}>
            <input id="thm" className="theme__inp" type="checkbox" onChange={(e) => props.handleChange(e.target.checked)}/>
            <label htmlFor="thm" className="theme__sld"/>
        </div>
    );
}

export default Theme;