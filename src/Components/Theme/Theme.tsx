import "./Theme.css";
import { useTranslation} from 'react-i18next';

interface ThemeProps {
    handleChange: Function;
}

function Theme(props: ThemeProps): JSX.Element {

    const [t, i18n ] = useTranslation();
    
    return (
        <label className="theme-wrp" title={t("header.theme.title")}>
            <input className="theme-inp" type="checkbox" onChange={(e) => props.handleChange(e.target.checked)}/>
            <span className="theme-sld"/>
        </label>
    );
}

export default Theme;