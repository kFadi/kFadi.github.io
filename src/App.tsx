
import './App.css';

import { useState } from 'react';

import './locale/config';
import { useTranslation} from 'react-i18next';

import Toggle, { ToggleType } from './Components/Toggle/Toggle';
import Share from './Components/Share/Share';

import { RiFileInfoFill } from 'react-icons/ri';
import { BsPrinterFill } from 'react-icons/bs';




function App() {

  const date = "01.11.2022";
  const [isDark,setIsDark] = useState<boolean>(false);
  const [t, i18n ] = useTranslation();

  const handleChangeTheme = (chkd: boolean) => { setIsDark(chkd) }
  const handleChangeLang = (chkd: boolean) => { (chkd? i18n.changeLanguage("he"):i18n.changeLanguage("en"))}



  return (
    <div className={"App flex flx-col flx-start theme-" + ((isDark)?"dark":"light")}>

      <header className="flex flx-row flx-center">

        <menu className="flex flx-row flx-even">
          <Toggle type={ToggleType.THEME} handleChange={handleChangeTheme}/>
          <Toggle type={ToggleType.LANG} handleChange={handleChangeLang}/>
          <RiFileInfoFill className={"icn" + (i18n.language==="he"? " rtl":"")}  title={t("header.info.title",{date})}/>
          <BsPrinterFill className="icn" title={t("header.print.title")}/>
          <Share/>
        </menu>
        
        <nav className={"flex flx-row flx-even" + (i18n.language==="he"? " rtl":"")}>
          <a href="#profile">Profile</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="projects">Projects</a>
        </nav>

      </header>

      <main>

        <section id='profile'>

        </section>

        <section id='education'>

        </section>
        
        <section id='skills'>

        </section>
        <section id='projects'>

        </section>


      </main>

    </div>
  );
}

export default App;
