
import './App.css';

import { useEffect, useRef, useState } from 'react';

import './locale/config';
import { useTranslation} from 'react-i18next';

import Theme from './Components/Theme/Theme';
import Share from './Components/Share/Share';

import { ImMenu3, ImMenu4 } from "react-icons/im";
import { RiArrowDropDownLine, RiFileInfoFill, RiMenu4Fill, RiMenuFill } from 'react-icons/ri';
import { BsChevronCompactDown, BsPrinterFill } from 'react-icons/bs';
import { GrFormNext, GrFormPrevious, GrLanguage, GrMenu, GrNavigate } from "react-icons/gr";
import { FiChevronLeft, FiChevronRight, FiSettings } from "react-icons/fi";
import { VscSettingsGear, VscSettings } from "react-icons/vsc";
import { SlOptionsVertical } from "react-icons/sl";
import { spawn } from 'child_process';
import { GoSettings } from "react-icons/go";
import Experience from './Components/Experience/Experience';
import Lang from './Components/Lang/Lang';
import Dropdown from './Components/Dropdown/Dropdown';
import { FaGlobe } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import useClickOutside from './custom/useClickOutside';
import Profile from './Components/Profile/Profile';
import Education from './Components/Education/Education';
import Modal from './Components/Modal/Modal';


function App() {

  const date = "01.12.2022";
  const url = "kfadi.github.io"

  const [isDark,setIsDark] = useState<boolean>(false);
  // const [isShowTrigger,setIsShowTrigger] = useState<boolean>(false);
  const [openList,setOpenList] = useState<boolean>(false);
  const [openModal,setOpenModal] = useState<boolean>(false);
  const [t, i18n ] = useTranslation();

  const handleChangeTheme = (chkd: boolean) => { setIsDark(chkd) }

  const triggerRef = useRef<any>(null);
  // useClickOutside(triggerRef,()=>{ if (openList) setOpenList(false) });

  useEffect (() => {
    document.title = t("app.title");
  },[i18n.language])


  // // //
  
  // export const getLangClass = ()=>{
  //   return (i18n.language!=="en"? " rtl":"")
  // }

  // // //


  // useEffect(()=>{
    // console.log("openMenu: " + {openMenu} + "   ///   openNav: " + {openNav});
    // {console.log("openMenu: " + openMenu + "   ///   openNav: " + openNav);}

  // },[openMenu, openNav])

  return (
    <div className={"App theme-" + ((isDark)?"dark":"light")}>

      <header>

        <div className={"header-print prt " + i18n.language}><span>{t("header.printable.text")}</span><span>{url}</span></div>
        
        <div className="header-display dsp">

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
                {/* <Theme handleChange={(chkd: boolean) => setIsDark(chkd)}/> */}
                <Lang />
              </div>
              <div className={"menu__grp " + i18n.language}>
                <RiFileInfoFill className="menu__icn" title={t("header.info.title",{date})}
                  onClick={() => {
                      console.log("----------");
                      console.log("openModal >> "+openModal);
                      setOpenModal(true);
                    }}
                />
                <Modal open={openModal} onClose={() => setOpenModal(false)}>
                  {t("header.info.txt")}
                </Modal>
                {/* <a href={require("./assets/docs/KFadi_CV_" + i18n.language + ".pdf")} download> */}
                <a href={require("./assets/docs/KFadi_CV_" + i18n.language + ".pdf")} target="_blank">
                  <BsPrinterFill className="menu__icn" title={t("header.print.title")}/>
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

        </div>

      </header>

      <main>

        <section id='profile'>
          {/* <h1>Profile</h1> */}
          <Profile/>
        </section>

        <section id='education'>
          {/* <h1>Education</h1> */}
          <Education/>
        </section>
        
        <section id='experience'>
          {/* <h1>Experience</h1> */}
          <Experience/>
        </section>

        <section id='projects'>
          {/* <h1>Projects</h1> */}
        </section>
      </main>

    </div>
  );
}

export default App;
