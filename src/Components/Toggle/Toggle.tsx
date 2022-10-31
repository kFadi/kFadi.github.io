import "./Toggle.css";
import { useTranslation} from 'react-i18next';


export enum ToggleType{
    THEME ="THEME",
    LANG = "LANG"
}

interface ToggleProps {
    type: ToggleType;
    handleChange: Function;
}

function Toggle(props: ToggleProps): JSX.Element {

    const type = ((props.type===ToggleType.THEME)? "theme":"lang");
    const [t, i18n ] = useTranslation();
    
    const setLngg= (chkd: boolean) => (chkd? i18n.changeLanguage("he"):i18n.changeLanguage("en"));

    // const {isDark,setIsDark} = useTheme();
    // const {isHeb,setIsHeb} = useLang();
    // const handleChange = ((props.type===ToggleType.THEME)? setIsDark:setIsHeb);
    // const handleChange = ((props.type===ToggleType.THEME)? setIsDark:setLngg);

    
    return (
        <label className="tgl-wrp" title={t("header."+type+".title")}>
            <input type="checkbox" onChange={(e) => props.handleChange(e.target.checked)}/>
            <span className={"tgl-sld-"+type}/>
        </label>
    );
}

export default Toggle;