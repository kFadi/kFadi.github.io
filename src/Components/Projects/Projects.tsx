import img_couponinja from "../../assets/images/projects/pr_couponinja.png";
import img_taas from "../../assets/images/projects/pr_taas.png";
import img_cats_n_toys from "../../assets/images/projects/pr_cats_n_toys.png";
import img_koburger from "../../assets/images/projects/pr_koburger.png";
import img_gcp from "../../assets/images/projects/pr_gcp.png";
import img_ghp from "../../assets/images/projects/pr_ghp.png";
import img_moodle from "../../assets/images/projects/pr_moodle.png";

import { useTranslation } from "react-i18next";
import "./Projects.css";
import { MdDoubleArrow } from "react-icons/md";

function Projects(): JSX.Element {

    const [t, i18n ] = useTranslation();
    
    return (
        <div className="Projects flex flx-row-wrap flx-center">
            
            <div className="card-pr">
                <div className="pr-details-container">
                    <div className="pr-title">coupoNinja</div>
                    <div className="pr-info overflow-y-scroll">
                        <div className="pr-info-line">Advanced Coupon System (Desktop)</div>
                        <div className="pr-info-line">Full Stack (Spring-REST-React)</div>
                        <div className="pr-info-line">Deployed@ GCP</div>
                        <div className="pr-info-line">* sign-in as Admin (admin@admin.com : admin) then view Companies'/Customers' credentials to sign-in as</div>
                    </div>
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
                    <div className="pr-info overflow-y-scroll">
                        <div className="pr-info-line">Tasks as a Service (Desktop)</div>
                        <div className="pr-info-line">Full Stack (Spring-REST-React)</div>
                        <div className="pr-info-line">Deployed@ GCP</div>
                        <div className="pr-info-line">* sign-in as Admin (admin@admin.com : admin) then view Users' credentials to sign-in as</div>
                    </div>
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
                    <div className="pr-info overflow-y-scroll">
                        <div className="pr-info-line">Dynamic Multi-View UI concept (Desktop)</div>
                        <div className="pr-info-line">Full Stack (Spring-REST-React)</div>
                        <div className="pr-info-line">Deployed@ GCP</div>
                    </div>
                    <a className="pr-lnk" href="https://cats-n-toys-fe.oa.r.appspot.com"
                        target={"_blank"} title={t("projects.link.title")}>
                        <MdDoubleArrow size={36} />
                    </a>
                </div>
                <div className="pr-img-container">
                    <img className="pr-img" src={img_cats_n_toys} alt=".." />
                </div>
            </div>

            <div className="card-pr">
                <div className="pr-details-container">
                    <div className="pr-title">KOBURGER</div>
                    <div className="pr-info overflow-y-scroll">
                        <div className="pr-info-line">Classic Burger stacking fun (Desktop)</div>
                        <div className="pr-info-line">Frontend (Vanilla JS/HTML/CSS)</div>
                        <div className="pr-info-line">Deployed@ GitHub-Pages</div>
                    </div>
                    <a className="pr-lnk" href="https://kfadi.github.io/koburger/"
                        target={"_blank"} title={t("projects.link.title")}>
                        <MdDoubleArrow size={36} />
                    </a>
                </div>
                <div className="pr-img-container">
                    <img className="pr-img" src={img_koburger} alt=".." />
                </div>
            </div>

            <div className="card-pr">
                <div className="pr-details-container">
                    <div className="pr-title">GCP</div>
                    <div className="pr-info overflow-y-scroll">
                        <div className="pr-info-line">My Personal Guide to <b>Google Cloud Platform</b></div>
                        <div className="pr-info-line">Deploying <b>Spring</b> Server with <b>MySQL</b> support and <b>ReactJS</b> App</div>
                        <div className="pr-info-line">| PDF &#127470;&#127473; |</div>
                        <div className="pr-info-line">p.s. english pro-version will be available soon &#128521;</div>
                    </div>
                    <a className="pr-lnk" href={require("../../assets/docs/GCP_by_kFadi.pdf")}
                        target={"_blank"} title={t("projects.link.title")}>
                        <MdDoubleArrow size={36} />
                    </a>
                </div>
                <div className="pr-img-container">
                    <img className="pr-img" src={img_gcp} alt=".." />
                </div>
            </div>

            <div className="card-pr">
                <div className="pr-details-container">
                    <div className="pr-title">GHP</div>
                    <div className="pr-info overflow-y-scroll">
                        <div className="pr-info-line">My Personal Guide to <b>GitHub Pages</b></div>
                        <div className="pr-info-line">Public Free Deploy from GitHub </div>
                        <div className="pr-info-line">| PDF &#127482;&#127480; |</div>
                    </div>
                    {/* <a className="pr-lnk" href={require("../../assets/docs/GHP_by_kFadi.pdf")}
                        target={"_blank"} title={t("projects.link.title")}>
                        <MdDoubleArrow size={36} />
                    </a> */}
                </div>
                <div className="pr-img-container">
                    <img className="pr-img" src={img_ghp} alt=".." />
                </div>
            </div>

            <div className="card-pr">
                <div className="pr-details-container">
                    <div className="pr-title">project moodle</div>
                    <div className="pr-info overflow-y-scroll">
                        <div className="pr-info-line">my <b>DEV</b> guides/notes</div>
                        <div className="pr-info-line"> <b>moodle</b> LMS platform</div>
                        <div className="pr-info-line">Deployed@ GCP</div>
                    </div>
                    {/* <a className="pr-lnk" href="#"
                        target={"_blank"} title={t("projects.link.title")}>
                        <MdDoubleArrow size={36} />
                    </a> */}
                </div>
                <div className="pr-img-container">
                    <img className="pr-img" src={img_moodle} alt=".." />
                </div>
            </div>

        </div>
    );
}

export default Projects;
