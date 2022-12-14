import me from "../../assets/images/profile.png";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { ImLinkedin2, ImPhone } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { useTranslation } from "react-i18next";
import "./Profile.css";
import { GrLinkedinOption, GrMail, GrMailOption } from "react-icons/gr";
import { HiMail, HiOutlineMail, HiPhone } from "react-icons/hi";
import { RiLinkedinFill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";
import { AiFillStar, AiTwotoneMail } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";

function Profile(): JSX.Element {
    
    const [t, i18n] = useTranslation();

    return (
        <div className={"profile " + i18n.language}>
            
            <div className="profile-header">
                <div className="profile-header__txt">
                    <h1 className="profile-header__name">{t("profile.name")}</h1>
                    <h4 className="profile-header__motto">{t("profile.motto")}</h4>
                </div>
                <div className="profile-header__img-wrp dsp">
                    <img src={me} alt="Profile image" />
                </div>
            </div>

            <div className="profile-contact">
                <a href={t("profile.contact.phone.href")} title={t("profile.contact.phone.title")}>
                    <HiPhone className="contact-icn phone"/>
                    <span>{t("profile.contact.phone.txt")}</span>
                </a>
                <a href={t("profile.contact.email.href")} title={t("profile.contact.email.title")}>
                    <GrMail className="contact-icn email"/>
                    <span>{t("profile.contact.email.txt")}</span>
                </a>
                <a href={t("profile.contact.linkedin.href")} target={"_blank"} title={t("profile.contact.linkedin.title")}>
                    <RiLinkedinFill className="contact-icn linkedin"/>
                    <span>{t("profile.contact.linkedin.txt")}</span>
                </a>
                <a href={t("profile.contact.github.href")} target={"_blank"} title={t("profile.contact.github.title")}>
                    <FaGithub className="contact-icn github"/>
                    <span>{t("profile.contact.github.txt")}</span>
                </a>
            </div>
            
            <div className="profile-skills">
                <p>
                    <AiFillStar className="skills-icn"/>
                    {t("profile.soft_skills")}
                </p>
                <p>
                    <AiFillStar className="skills-icn"/>
                    {t("profile.languages")}
                </p>
            </div>

        </div>
    );
}

export default Profile;
