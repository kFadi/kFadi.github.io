
import './App.css';

import { useEffect, useState } from 'react';

import './locale/config';
import { useTranslation} from 'react-i18next';

import Theme from './Components/Theme/Theme';
import Share from './Components/Share/Share';

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




function App() {

  const date = "01.11.2022";
  const [isDark,setIsDark] = useState<boolean>(false);
  const [openMenu,setOpenMenu] = useState<boolean>(false);
  const [openNav,setOpenNav] = useState<boolean>(false);
  const [t, i18n ] = useTranslation();

  const handleChangeTheme = (chkd: boolean) => { setIsDark(chkd) }

  useEffect (() => {
    document.title =t("app.title");
  },[i18n.language])


  useEffect(()=>{
    // console.log("openMenu: " + {openMenu} + "   ///   openNav: " + {openNav});
    {console.log("openMenu: " + openMenu + "   ///   openNav: " + openNav);}

  },[openMenu, openNav])

  return (
    <div className={"App theme-" + ((isDark)?"dark":"light")}>

      <header>

        <menu className={openMenu? "show":""}>
          <Theme handleChange={handleChangeTheme}/>
          <Lang/>
          <RiFileInfoFill className={"menu-icn" + (i18n.language!=="en"? " rtl":"")}  title={t("header.info.title",{date})}/>
          <BsPrinterFill className="menu-icn" title={t("header.print.title")}/>
          <Share/>
        </menu>
        <div className="mid-menu" onClick={()=>setOpenMenu(!openMenu)} title="">
          <GrFormPrevious className="mid-menu-icn1"/>
          <VscSettings className="mid-menu-icn2"/>
        </div>
        
        <div className="mid-nav" onClick={()=>setOpenNav(!openNav)} title="">
          <GrMenu className="mid-nav-icn1"/>
          <GrFormNext className="mid-nav-icn2"/>
        </div>        
        <nav className={  (openNav? "show":"") + ((i18n.language==="he")? "rtl":((i18n.language==="ar")? "rtl ar":""))}>
          <a href="#profile">{t("header.nav.profile")}</a>
          <a href="#education">{t("header.nav.education")}</a>
          <a href="#experience">{t("header.nav.experience")}</a>
          <a href="projects">{t("header.nav.projects")}</a>
        </nav>

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
