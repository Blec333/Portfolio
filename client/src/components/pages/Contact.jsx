import React, { useState } from 'react';
import profilePic from "../../img/Profile-Picture.png";

export default function Contact() {

  const [nameNotification, nameNotify] = useState('');
  const [emailNotification, emailNotify] = useState('');
  const [subjectNotification, subjectNotify] = useState('');
  const [bodyNotification, bodyNotify] = useState('');
  const [sentEmail, sendEmail] = useState('');



  const constructEmail = () => {
    let emailAddress = document.getElementById('email-address').value;
    let contactName = document.getElementById('contact-name').value;
    let emailSubject = document.getElementById('email-subject').value;
    let emailBody = document.getElementById('email-body').value;
    if (emailAddress && contactName && emailSubject && emailBody) {
      let email = "mailto:brennanl.dev@gmail.com?subject=" + emailSubject + "&body=" + emailBody + " from: " + contactName + " at " + emailAddress;
      document.getElementById('send-notification').innerHTML = "";
      return document.location = email;
    } else {
      document.getElementById('send-notification').innerHTML = "Please be sure to include all information above";
    }
  }

  const displayNameNotification = () => {
    let contactName = document.getElementById('contact-name').value;
    if (contactName === "") {
      document.getElementById('name-notification').innerHTML = "Please enter your name";
    } else {
      document.getElementById('name-notification').innerHTML = "";
    }
  }

  const displayEmailNotification = () => {
    let emailAddress = document.getElementById('email-address').value;
    if (emailAddress === "") {
      document.getElementById('email-notification').innerHTML = "Please enter your email";
    } else if ((/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(emailAddress)) {
        document.getElementById('email-notification').innerHTML = "";
      } else {
      document.getElementById('email-notification').innerHTML = "Please enter a valid email";
    }
  }

  const displaySubjectNotification = () => {
    let emailSubject = document.getElementById('email-subject').value;
    if (emailSubject === "") {
      document.getElementById('subject-notification').innerHTML = "Please include a subject header";
    } else {
      document.getElementById('subject-notification').innerHTML = "";
    }
  }

  const displayBodyNotification = () => {
    let emailBody = document.getElementById('email-body').value;
    if (emailBody === "") {
      document.getElementById('message-notification').innerHTML = "Please enter a message";
    } else {
      document.getElementById('message-notification').innerHTML = "";
    }
  }


  return (
    <>
    <br />
      <div className="bg-transparent w-full justify-center text-center">
        <figure>
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img alt="Headshot" src={profilePic} />
            </div>
          </div>
        </figure>
        <br />
        <br />
        <h1 className="font-semibold text-xl text-primary-content mt-4 text-center">Contact Me</h1>
        <div className="flex text-center justify-center">
          <div className="table-auto">
            <div className="">
              <div className="table-row hover">
                <div className="table-cell text-primary-content mt-4 mr-4 text-right">Name: </div>
                <input id="contact-name" type="text" placeholder="Name" className="input input-bordered table-cell text-primary-content mt-4" onBlur={() => nameNotify(displayNameNotification())} onChange={() => nameNotify(displayNameNotification())} />
                <p id="name-notification" className='h-[1rem] mb-4 ml-4 text-primary-content text-left'>{nameNotification}</p>
              </div>
              <div className="table-row hover">
                <div className="table-cell text-primary-content mt-4 mr-4 text-right">Return Email: </div>
                <input id="email-address" type="text" placeholder="info@site.com" className="input input-bordered table-cell text-primary-content mt-4" onBlur={() => emailNotify(displayEmailNotification())} onChange={() => emailNotify(displayEmailNotification())} />
                <p id="email-notification" className='h-[1rem] mb-4 ml-4 text-primary-content text-left'>{emailNotification}</p>
              </div>
              <div className="table-row hover">
                <div className="table-cell text-primary-content mt-4 mr-4 text-right">Subject: </div>
                <input id="email-subject" type="text" placeholder="Subject" className="input input-bordered table-cell text-primary-content mt-4" onBlur={() => subjectNotify(displaySubjectNotification())} onChange={() => subjectNotify(displaySubjectNotification())} />
                <p id="subject-notification" className='h-[1rem] mb-4 ml-4 text-primary-content text-left'>{subjectNotification}</p>
              </div>
              <div className="table-row hover">
                <div className="table-cell text-primary-content mt-4 mr-4 text-right">Message: </div>
                <input id="email-body" type="text" placeholder="Message" className="input input-bordered table-cell text-primary-content mt-4" onBlur={() => bodyNotify(displayBodyNotification())} onChange={() => bodyNotify(displayBodyNotification())} />
                <p id="message-notification" className='h-[1rem] mb-4 ml-4 text-primary-content text-left'>{bodyNotification}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p id="send-notification" className='h-[1rem] mb-4 ml-4'></p>
        <button id="send-email" className="btn btn-secondary w-24 text-primary-content mt-4 text-center" onClick={() => sendEmail(constructEmail())}>Send</button>
      </div>
    </>
  );
}
