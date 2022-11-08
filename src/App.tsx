
import './App.css';

import { useState } from 'react';

import './locale/config';
import { useTranslation} from 'react-i18next';

import Toggle, { ToggleType } from './Components/Toggle/Toggle';
import Share from './Components/Share/Share';

import { RiArrowDropDownLine, RiFileInfoFill } from 'react-icons/ri';
import { BsPrinterFill } from 'react-icons/bs';
import { GrLanguage } from "react-icons/gr";
import { spawn } from 'child_process';
import Experience from './Components/Experience/Experience';
import Lang from './Components/Lang/Lang';




function App() {

  const date = "01.11.2022";
  const [isDark,setIsDark] = useState<boolean>(false);
  const [t, i18n ] = useTranslation();

  const handleChangeTheme = (chkd: boolean) => { setIsDark(chkd) }
  // const handleChangeLang = (chkd: boolean) => { (chkd? i18n.changeLanguage("he"):i18n.changeLanguage("en"))}
  const handleChangeLang = (lng: string) => {( (lng==="en")? i18n.changeLanguage("en"):( (lng==="he")? i18n.changeLanguage("he"):i18n.changeLanguage("ar") ) )}


  


  // const exp_keys = ["java", "front", "orm", "dbms", "package", "ides", "arch", "http", "more"];
  // const exp_map = new Map<string, string[]>([ 
  //   ["java", ["Java 11", "Spring 5 (Core/Boot/Data/Web)", "Spring Cloud Microservices"]],
  //   ["front", ["Frontend", "HTML (5)", "CSS(3)", "Javascript (JS)", "Typescript (TS)", "REACT.js (18)", "Redux"]],
  //   ["orm", ["ORM", "JPA (Hibernate)"]],
  //   ["dbms", ["DBMS", "MySQL (+Workbench)"]],
  //   ["package", ["Package Management tools", "maven", "npm"]],
  //   ["ides", ["IDEs", "IntelliJ", "VS Code"]],
  //   ["arch", ["Architectural", "REST", "MVC"]],
  //   ["http", ["HTTP Clients", "Postman", "Swagger", "RestTemplate"]],
  //   ["more", ["More", "GitHub", "Docker", "GCP", ".."]]
  // ]);

  // const xp = {"Java 11", "Spring 5 (Core/Boot/Data/Web)", "Spring Cloud Microservices" };


          // <CardSk title="Architectural" line1="REST" line2="MVC"/>
          // <CardSk title="HTTP Clients" line1="Postman, Swagger" line2="RestTemplate"/>
          // <CardSk title="More" line1="GitHub, Docker" line2="GCP.."/>



  return (
    <div className={"App flex flx-col flx-start theme-" + ((isDark)?"dark":"light")}>

      <header /*className="flex flx-row flx-center"*/>

        <menu className="flex flx-row flx-center">
          <Toggle type={ToggleType.THEME} handleChange={handleChangeTheme}/>
          {/* <Toggle type={ToggleType.LANG} handleChange={handleChangeLang}/> */}
          
          <Lang handleChange={handleChangeLang}/>

          <RiFileInfoFill className={"icn" + (i18n.language!=="en"? " rtl":"")}  title={t("header.info.title",{date})}/>
          <BsPrinterFill className="icn" title={t("header.print.title")}/>
          <Share/>
        </menu>
        
        <nav className={"flex flx-row flx-center" + (i18n.language!=="en"? " rtl":"")}>
          <a href="#profile">{t("header.nav.profile")}</a>
          <a href="#education">{t("header.nav.education")}</a>
          <a href="#experience">{t("header.nav.experience")}</a>
          <a href="projects">{t("header.nav.projects")}</a>
        </nav>

      </header>

      <main>

        <section id='profile'>

        </section>

        <section id='education'>

        </section>
        
        <section id='experience'>
          <Experience/>
          {/* {(
            exp_keys.map(k =>
                              <div id={k}>
                                  {
                                    exp_map.get(k)?.map(s => <span>{s}</span>)
                                  }
                              </div>
                        )
          )} */}

        </section>
        <section id='projects'>

        </section>


      </main>

    </div>
  );
}

export default App;
