
import './App.css';

import { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';
import './locale/config';

import Lang from './Components/Lang/Lang';
import Modal from './Components/Modal/Modal';
import Share from './Components/Share/Share';
import Theme from './Components/Theme/Theme';

import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';

import { TbPdf } from 'react-icons/tb';
import { TiInfoLarge } from "react-icons/ti";


function App() {

  //////////////////////////////////////
  //////////////////////////////////////
  
  const date = "21.08.2023";
  
  //////////////////////////////////////
  //////////////////////////////////////

  const [isDark,setIsDark] = useState<boolean>(false);
  const [openList,setOpenList] = useState<boolean>(false);
  const [openModal,setOpenModal] = useState<boolean>(false);
  const [t, i18n ] = useTranslation();

  const handleChangeTheme = (chkd: boolean) => { setIsDark(chkd) }

  const triggerRef = useRef<any>(null);

  useEffect (() => {
    document.title = t("app.title");
  },[i18n.language])

  return (
    <div className={"App theme-" + ((isDark)?"dark":"light")}>

      <header>

          <div className={"hdr-trigger " + i18n.language}
                title={openList? t("header.trigger.title.opened"):t("header.trigger.title.not_opened")}
                onClick={()=>setOpenList(!openList)}
                ref={triggerRef}
                >
            <div className={"hdr-trigger__icn" + (openList? " opened":"")}></div>
          </div>

          <div className={"hdr-content" + (openList? " show":"")}>

            <menu>
              <div className="menu__grp">
                <Theme handleChange={handleChangeTheme}/>
                <Lang />
              </div>
              <div className={"menu__grp menu__grp-icns " + i18n.language}>
                <div className="menu__icn-wrp">
                  <TiInfoLarge className="menu__icn menu__icn-inf" title={t("header.info.title")}
                    onClick={() => {
                        setOpenModal(true);
                      }}
                  />
                  <Modal open={openModal} onClose={() => setOpenModal(false)} date={date} isDark={isDark}/>
                </div>
                <a href={require("./assets/docs/Kashan_Fadi_823.pdf")} target="_blank" className="menu__icn-wrp" >
                  <TbPdf className="menu__icn" title={t("header.print.title")}/>
                </a>
              </div>
              <Share/>
            </menu>
            
            <nav className={i18n.language}>
              <div onClick={()=>{if (openList) setOpenList(false)}}><a href="#profile">{t("header.nav.profile")}</a></div>
              <div onClick={()=>{if (openList) setOpenList(false)}}><a href="#education">{t("header.nav.education")}</a></div>
              <div onClick={()=>{if (openList) setOpenList(false)}}><a href="#experience">{t("header.nav.experience")}</a></div>
              <div onClick={()=>{if (openList) setOpenList(false)}}><a href="#projects">{t("header.nav.projects")}</a></div>
            </nav>

          </div>

      </header>

      <main>

        <section id='profile'>
          <Profile/>
        </section>

        <section id='education'>
          <Education/>
        </section>
        
        <section id='experience'>
          <Experience/>
        </section>

        <section id='projects'>
          <Projects/>
        </section>
      </main>

    </div>
  );
}

export default App;
