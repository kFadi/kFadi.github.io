import img_couponinja from "../../assets/images/projects/pr_couponinja.png";
import img_taas from "../../assets/images/projects/pr_taas.png";
import img_cats_n_toys from "../../assets/images/projects/pr_cats_n_toys.png";
import img_koburger from "../../assets/images/projects/pr_koburger.png";

import { useTranslation } from "react-i18next";
import "./Projects.css";
import { MdDoubleArrow } from "react-icons/md";

function Projects(): JSX.Element {

    const [t, i18n ] = useTranslation();
    
    return (
        <div className="Projects">
            
            <div className="card-pr">
                <div className="pr-details-container">
                    <div className="pr-title">coupoNinja</div>
                    <div className="pr-info overflow-y-scroll">{t("projects.couponinja.info")}</div>
                    <a className="pr-lnk" href="https://couponinja-723-fe.oa.r.appspot.com"
                        target={"_blank"} title={t("projects.link.title")}>
                        <MdDoubleArrow size={36} />
                    </a>
                </div>
                <div className="pr-img-container">
                    <img className="pr-img" src={img_couponinja} alt=".." />
                </div>
            </div>

            <div className="card-pr">
                <div className="pr-details-container">
                    <div className="pr-title">TaaS</div>
                    <div className="pr-info overflow-y-scroll">{t("projects.taas.info")}</div>
                    {/* <a className="pr-lnk" href="#"
                        target={"_blank"} title={t("projects.link.title")}>
                        <MdDoubleArrow size={36} />
                    </a> */}
                </div>
                <div className="pr-img-container">
                    <img className="pr-img" src={img_taas} alt=".." />
                </div>
            </div>

            <div className="card-pr">
                <div className="pr-details-container">
                    <div className="pr-title">CATs & TOYs</div>
                    <div className="pr-info overflow-y-scroll">{t("projects.cats_n_toys.info")}</div>
                    {/* <a className="pr-lnk" href="#"
                        target={"_blank"} title={t("projects.link.title")}>
                        <MdDoubleArrow size={36} />
                    </a> */}
                </div>
                <div className="pr-img-container">
                    <img className="pr-img" src={img_cats_n_toys} alt=".." />
                </div>
            </div>

            <div className="card-pr">
                <div className="pr-details-container">
                    <div className="pr-title">KOBURGER</div>
                    <div className="pr-info overflow-y-scroll">{t("projects.koburger.info")}</div>
                    <a className="pr-lnk" href="https://kfadi.github.io/koburger/"
                        target={"_blank"} title={t("projects.link.title")}>
                        <MdDoubleArrow size={36} />
                    </a>
                </div>
                <div className="pr-img-container">
                    <img className="pr-img" src={img_koburger} alt=".." />
                </div>
            </div>

        </div>
    );
}

export default Projects;
