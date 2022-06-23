import React from 'react';
import { Link } from "react-router-dom";
import resumeDownload from "../img/LeClair-Resume.docx";
import save from "../img/floppy.png";

function Header() {
  return (
    <>
      <nav>
        <div className="navbar z-20 bg-neutral text-primary-content">
          <div className="flex-1">
            <Link className="btn normal-case text-xl" to="/">Brennan LeClair</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li tabIndex="0">
                <a href="#aboutme">Pages<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></a>
                <ul className="p-2 bg-neutral text-primary-content">
                  <li className="text-lg text-color-primary px-2 mx-2">
                    <Link to="/aboutme" className={window.location.pathname === '/aboutme' ? 'nav-link active' : 'nav-link'}>About Me</Link>
                  </li>
                  <li className="text-lg text-color-primary px-2 mx-2">
                    <Link to="/resume" className={window.location.pathname === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
                  </li>
                  <li className="text-lg text-color-primary px-2 mx-2">
                    <Link to="/portfolio" className={window.location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
                  </li>
                  <li className="text-lg text-color-primary px-2 mx-2">
                    <Link to="/contact" className={window.location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                  </li>
                </ul>
              </li>
              <li tabIndex="0">
                <a href={resumeDownload} download="">Resume <img width="24" height="24" alt="floppy" src={save}></img></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );

}

export default Header;
