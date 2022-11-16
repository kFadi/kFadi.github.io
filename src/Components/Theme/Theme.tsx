import "./Theme.css";
import { useTranslation} from 'react-i18next';

interface ThemeProps {
    handleChange: Function;
}

function Theme(props: ThemeProps): JSX.Element {

    const [t, i18n ] = useTranslation();

    
    return (
        <label className="theme he" title={t("header.theme.title.start")+" "+String.fromCharCode(8596)+" "+t("header.theme.title.end")}>
            <input className="theme__inp" type="checkbox" onChange={(e) => props.handleChange(e.target.checked)}/>
            <span className="theme__sld"/>
        </label>
    );
}

export default Theme;