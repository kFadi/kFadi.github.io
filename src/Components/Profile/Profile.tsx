import { useTranslation } from "react-i18next";
import { AiFillStar } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { HiPhone } from "react-icons/hi";
import { RiLinkedinFill } from "react-icons/ri";
import me from "../../assets/images/profile.png";
import "./Profile.css";

function Profile(): JSX.Element {
    
    const [t, i18n] = useTranslation();

    return (
        <div className={"profile " + i18n.language}>
            
            <div className="profile-header">
                <div className="profile-header__txt">
                    <h1 className="profile-header__name">{t("profile.name")}</h1>
                    <h4 className="profile-header__motto">{t("profile.motto")}</h4>
                </div>
                <div className="profile-header__img-wrp">
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
