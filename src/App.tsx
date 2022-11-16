
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




function App() {

  const date = "01.11.2022";
  const [isDark,setIsDark] = useState<boolean>(false);
  // const [isShowTrigger,setIsShowTrigger] = useState<boolean>(false);
  const [openList,setOpenList] = useState<boolean>(false);
  const [t, i18n ] = useTranslation();

  const handleChangeTheme = (chkd: boolean) => { setIsDark(chkd) }

  const triggerRef = useRef<any>(null);
  // useClickOutside(triggerRef,()=>{ if (openList) setOpenList(false) });

  useEffect (() => {
    document.title =t("app.title");
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
        
        <div className={"hdr-trigger " + i18n.language}
              title={openList? t("header.trigger.title.opened"):t("header.trigger.title.not_opened")}
              onClick={()=>setOpenList(!openList)} ref={triggerRef}
              >
          <div className={"hdr-trigger__icn" + (openList? " opened":"")}></div>
        </div>

        <div className={"hdr-content" + (openList? " show":"")}>

          <menu>
            <div className="menu__grp">
              <Theme handleChange={handleChangeTheme}/>
              <Lang />
            </div>
            <div className={"menu__grp " + i18n.language}>
              <RiFileInfoFill className="menu__icn" title={t("header.info.title",{date})}/>
              <BsPrinterFill className="menu__icn" title={t("header.print.title")}/>
            </div>
            <Share/>
          </menu>
          
          <nav className={i18n.language}>
            <a href="#profile">{t("header.nav.profile")}</a>
            <a href="#education">{t("header.nav.education")}</a>
            <a href="#experience">{t("header.nav.experience")}</a>
            <a href="projects">{t("header.nav.projects")}</a>
          </nav>

        </div>

      </header>

      <main>

        <section id='profile'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita ea dolorem placeat quam, obcaecati nemo nesciunt. Possimus odit cupiditate tenetur, dicta alias consequatur autem blanditiis perferendis amet impedit sit!
        </section>

        <section id='education'>

        </section>
        
        <section id='experience'>
          <Experience/>
        </section>

        <section id='projects'>

        </section>
      </main>

    </div>
  );
}

export default App;
