import React from 'react';
import stackOverflow from "../img/stackoverflow.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

function Footer() {
  return (
    <>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Thank you for stopping by - Brennan LeClair ©2022</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/Blec333"><img width="24" height="24" alt="github" src={github}></img>
          </a>
          <a href="https://www.linkedin.com/in/brennanleclair"><img width="24" height="24" alt="linkedin" src={linkedin}></img>
          </a>
          <a href="https://stackoverflow.com/users/19237165/blec"><img width="24" height="24" alt="stackoverflow" src={stackOverflow}></img>
          </a>
        </div>
      </footer>
    </>
  );

}

export default Footer;