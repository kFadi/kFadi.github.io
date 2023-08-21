import { TfiMore } from "react-icons/tfi";
import img_css from "../../assets/images/experience/css.png";
import img_docker from "../../assets/images/experience/docker.png";
import img_gcp from "../../assets/images/experience/gcp.png";
import img_github from "../../assets/images/experience/github.png";
import img_hibernate from "../../assets/images/experience/hibernate.png";
import img_html from "../../assets/images/experience/html.png";
import img_intellij from "../../assets/images/experience/intellij.png";
import img_java from "../../assets/images/experience/java.png";
import img_javascript from "../../assets/images/experience/javascript.png";
import img_maven from "../../assets/images/experience/maven.png";
import img_mvc from "../../assets/images/experience/mvc.png";
import img_mysql from "../../assets/images/experience/mysql.png";
import img_npm from "../../assets/images/experience/npm.png";
import img_postman from "../../assets/images/experience/postman.png";
import img_react from "../../assets/images/experience/react.png";
import img_redux from "../../assets/images/experience/redux.png";
import img_rest from "../../assets/images/experience/rest.png";
import img_spring from "../../assets/images/experience/spring.png";
import img_spring_boot from "../../assets/images/experience/spring_boot.png";
import img_spring_cloud from "../../assets/images/experience/spring_cloud.png";
import img_swagger from "../../assets/images/experience/swagger.png";
import img_typescript from "../../assets/images/experience/typescript.png";
import img_vscode from "../../assets/images/experience/vscode.png";

import "./Experience.css";


function Experience(): JSX.Element {

    const icn_sz = 22;
    
    return (
        <div className="experience">

            <div id="ex-java">
                <div className="ex-line">
                    <span>Java&nbsp;<small>(</small>11<small>)</small></span>
                    <img src={img_java} alt="Java logo"/>
                </div>
                <div className="ex-line">
                    <span>Spring 5</span>
                    <img src={img_spring} alt="Spring logo" className="cr"/>
                    <div className="ex-line show_when_not_phone">
                        <span><small>(</small>Core<small>/</small>Boot</span>
                        <img src={img_spring_boot} alt="Spring-Boot logo" className="cr pd"/>
                        <span><small>/</small>Data<small>/</small>Web<small>)</small></span>
                    </div>
                </div>
                <div className="ex-line show_when_phone higher">
                    <span><small>(</small>Core<small>/</small>Boot</span>
                    <img src={img_spring_boot} alt="Spring-Boot logo" className="cr pd"/>
                    <span><small>/</small>Data<small>/</small>Web<small>)</small></span>
                </div>
                
                <div className="ex-line">
                    <span>Spring Cloud Microservices</span>
                    <img src={img_spring_cloud} alt="Spring-Cloud logo" className="cr"/>
                </div>
            </div>
            <div id="ex-orm">
                <div className="ex-line">
                    <span>ORM</span>
                </div>
                <div className="ex-line">
                    <span>JPA</span>
                    <img src={img_hibernate} alt="Hibernate logo"/>
                    <div className="ex-line show_when_not_desktop_nor_big_desktop">
                        <span><small>(</small>Hibernate<small>)</small></span>
                    </div>
                </div>
                <div className="ex-line show_when_desktop_or_big_desktop">
                    <span><small>(</small>Hibernate<small>)</small></span>
                </div>
            </div>
            <div id="ex-dbms">
                <div className="ex-line">
                    <span>DBMS</span>
                </div>
                <div className="ex-line">
                    <span>MySQL</span>
                    <img src={img_mysql} alt="MySQL logo"/>
                    <div className="ex-line show_when_not_desktop_nor_big_desktop">
                        <span><small>(</small>+Workbench<small>)</small></span>
                    </div>
                </div>
                <div className="ex-line show_when_desktop_or_big_desktop">
                    <span><small>(</small>+Workbench<small>)</small></span>
                </div>
            </div>
            <div id="ex-front">
                <div className="ex-line">
                    <span>Frontend</span>
                </div>
                <div className="ex-line">
                    <span>HTML&nbsp;<small>(</small>5<small>)</small></span>
                    <img src={img_html} alt="HTML-5 logo"/>
                    <div className="ex-line show_when_not_tablet_nor_desktop">
                        <span><strong>,</strong></span>
                        <span>CSS&nbsp;<small>(</small>3<small>)</small></span>
                        <img src={img_css} alt="CSS-3 logo"/>
                    </div>
                </div>
                <div className="ex-line show_when_tablet_or_desktop">
                    <span>CSS&nbsp;<small>(</small>3<small>)</small></span>
                    <img src={img_css} alt="CSS-3 logo"/>
                </div>
                <div className="ex-line">
                    <span>JavaScript&nbsp;<small>(</small>JS<small>)</small></span>
                    <img src={img_javascript} alt="JavaScript logo"/>
                    <div className="ex-line show_when_big_desktop">
                        <span><strong>,</strong></span>
                        <span>TypeScript&nbsp;<small>(</small>TS<small>)</small></span>
                        <img src={img_typescript} alt="TypeScript logo"/>
                    </div>
                </div>
                <div className="ex-line show_when_not_big_desktop">
                    <span>TypeScript&nbsp;<small>(</small>TS<small>)</small></span>
                    <img src={img_typescript} alt="TypeScript logo"/>
                </div>
                <div className="ex-line">
                    <span>React&nbsp;<small>(</small>18<small>)</small></span>
                    <img src={img_react} alt="React-JS logo" className="cr"/>
                    <div className="ex-line show_when_not_tablet_nor_desktop">
                        <span><strong>,</strong></span>
                        <span>Redux</span>
                        <img src={img_redux} alt="Redux logo" className="cr"/>
                    </div>
                </div>
                <div className="ex-line show_when_tablet_or_desktop">
                    <span>Redux</span>
                    <img src={img_redux} alt="Redux logo" className="cr"/>
                </div>
            </div>
            <div id="ex-arch">
                <div className="ex-line">
                    <span>Architectural</span>
                </div>
                <div className="ex-line">
                    <span>REST</span>
                    <img src={img_rest} alt="REST logo" className="cr"/>
                    <div className="ex-line show_when_not_desktop_nor_big_desktop">
                        <span><strong>,</strong></span>
                        <span>MVC</span>
                        <img src={img_mvc} alt="MVC logo" className="cr"/>
                    </div>
                </div>
                <div className="ex-line show_when_desktop_or_big_desktop">
                    <span>MVC</span>
                    <img src={img_mvc} alt="MVC logo" className="cr"/>
                </div>
            </div>
            <div id="ex-http">
                <div className="ex-line">
                    <span>HTTP Clients</span>
                </div>
                <div className="ex-line">
                    <span>Postman</span>
                    <img src={img_postman} alt="Postman logo"/>
                </div>
                <div className="ex-line">
                    <span>Swagger</span>
                    <img src={img_swagger} alt="Swagger logo" className="cr"/>
                </div>
                <div className="ex-line">
                    <span>RestTemplate</span>
                </div>
            </div>
            <div id="ex-ides">
                <div className="ex-line">
                    <span>IDEs</span>
                </div>
                <div className="ex-line">
                    <span>IntelliJ</span>
                    <img src={img_intellij} alt="IntelliJ-IDEA logo"/>
                    <div className="ex-line show_when_phone">
                        <span><strong>,</strong></span>
                        <span>VS Code</span>
                        <img src={img_vscode} alt="Visual-Studio-Code logo"/>
                    </div>
                </div>
                <div className="ex-line show_when_not_phone">
                    <span>VS Code</span>
                    <img src={img_vscode} alt="Visual-Studio-Code logo"/>
                </div>
            </div>
            <div id="ex-package">
                <div className="ex-line">
                    <span>Package Management tools</span>
                </div>
                <div className="ex-line">
                    <span>maven</span>
                    <img src={img_maven} alt="Maven logo" className="cr"/>
                    <span><strong>,</strong></span>
                    <span>npm</span>
                    <img src={img_npm} alt="npm logo"/>
                </div>
            </div>
            <div id="ex-more">
                <div className="ex-line">
                    <span>More</span>
                </div>
                <div className="ex-line">
                    <span>GitHub</span>
                    <img src={img_github} alt="GitHub logo" className="cr"/>
                    <span><strong>,</strong></span>
                    <span>docker</span>
                    <img src={img_docker} alt="Docker logo" className="cr"/>
                    <div className="ex-line show_when_not_phone">
                        <span><strong>,</strong></span>
                        <span>GCP</span>
                        <img src={img_gcp} alt="Google-Cloud-Platform logo" className="cr pd"/>
                        <span><strong>,</strong></span>
                        <span><TfiMore size={icn_sz}/></span>
                    </div>
                </div>
                <div className="ex-line show_when_phone">
                    <span><strong>,</strong></span>
                    <span>GCP</span>
                    <img src={img_gcp} alt="Google-Cloud-Platform logo" className="cr pd"/>
                    <span><strong>,</strong></span>
                    <span><TfiMore size={icn_sz}/></span>
                </div>
            </div>

        </div>
    );
}

export default Experience;