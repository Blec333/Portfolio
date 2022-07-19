import React, { useState } from 'react';
import { send } from 'emailjs-com';


import profilePic from "../../img/Profile-Picture.png";
import { useEffect } from 'react';



export default function Contact() {



  const [lastEventTarget, setLastEventTarget] = useState({
    name: '',
    value: '',
  });

  const [emailContent, setEmailContent] = useState({
    attentionTitle: 'ATTENTION FROM PORTFOLIO',
    fromName: '',
    fromAddress: '',
    subject: '',
    message: '',
  });

  const [showWarning, setShowWarning] = useState({
    fromName: '',
    fromAddress: '',
    subject: '',
    message: '',
    sendAttempt: '',
  });

  useEffect(() => {
    if ((lastEventTarget.name === "fromName" || lastEventTarget.name === "subject" || lastEventTarget.name === "message") && lastEventTarget.value === '') {
      setShowWarning({ ...showWarning, [lastEventTarget.name]: "This field cannot be empty" });
    } else if ((lastEventTarget.name === "fromAddress") && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(lastEventTarget.value) && !(lastEventTarget.value === '')) {
      setShowWarning({ ...showWarning, [lastEventTarget.name]: "Your entry must be a valid email address (ie: email.address@provider.com)" });
    } else {
      setShowWarning({ ...showWarning, [lastEventTarget.name]: '' });
    }
  }, [lastEventTarget])

  const handleChange = (e) => {
    console.log('handlechange')
    setEmailContent({ ...emailContent, [e.target.name]: e.target.value });
    setLastEventTarget({ name: e.target.name, value: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (showWarning.fromName === '' && showWarning.fromAddress === '' && showWarning.subject === '' && showWarning.message === '') {
      send("service_telqqfg",
        "portfolio-template",
        emailContent,
        'aMIrhQsGU5Esazolk'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setEmailContent({
            fromName: '',
            fromAddress: '',
            subject: '',
            message: '',
          });
          setShowWarning({
            fromName: '',
            fromAddress: '',
            subject: '',
            message: '',
            sendAttempt: '',
          });
          setShowWarning({ ...showWarning, sendAttempt: 'Thank you for your interest' });
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    } else {
      setShowWarning({ ...showWarning, sendAttempt: 'Please be sure to include all requested information above and correct any identified errors' });
    }
  };





  return (
    <>
    <div className='flex justify-center'>
      <div className="bg-transparent w-2/3 justify-center text-center p-12">
        <figure>
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-[33px] overflow-hidden">
              <img alt="Headshot" src={profilePic} />
            </div>
          </div>
        </figure>
        <br />
        <br />
        <h1 className="font-semibold text-xl text-neutral-content mt-4 text-center">Contact Me</h1>
        <div className="flex justify-center w-full">
          <div className="flex items-center grid grid-cols-3 w-2/3">

            <div className="text-neutral-content text-right w-full h-auto mt-4 pr-4 mr-4">Name:</div>
            <input id="contact-name" className="input input-bordered col-span-2 text-neutral-content w-full mt-4" type="text" name="fromName" placeholder="Please enter your name" value={emailContent.fromName} onChange={handleChange} />
            <p id="name-notification" className='col-span-3 text-error text-left h-[1rem] pl-[33%] mb-4'>{showWarning.fromName}</p>

            <div className="text-neutral-content text-right w-full h-auto mt-4 pr-4 mr-4">Email:</div>
            <input id="email-address" className="input input-bordered col-span-2 text-neutral-content w-full mt-4" type="email" name="fromAddress" placeholder="Please enter your return email address" value={emailContent.fromAddress} onChange={handleChange} />
            <p id="email-notification" className='col-span-3 text-error text-left h-[1rem] pl-[33%] mb-4'>{showWarning.fromAddress}</p>

            <div className="text-neutral-content text-right w-full h-auto mt-4 pr-4 mr-4">Subject:</div>
            <input id="email-subject" className="input input-bordered col-span-2 text-neutral-content w-full mt-4" type="text" name="subject" placeholder="Your email's subject/header" value={emailContent.subject} onChange={handleChange} />
            <p id="subject-notification" className='col-span-3 text-error text-left h-[1rem] pl-[33%] mb-4'>{showWarning.subject}</p>

            <div className="text-neutral-content text-right w-full h-auto mt-4 pr-4 mr-4">Message:</div>
            <textarea id="email-body" className="input input-bordered col-span-2 align-text-start text-neutral-content w-full h-48 mt-4" type="text" name="message" placeholder="Enter your message for me" value={emailContent.message} onChange={handleChange} />
            <p id="message-notification" className='col-span-3 text-error text-left h-[1rem] pl-[33%] mb-4'>{showWarning.message}</p>

          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p id="send-notification" className={`${showWarning.sendAttempt === 'Thank you for your interest' ? 'text-neutral-content' : 'text-error'} h-[1rem] mb-4 ml-4`}>{showWarning.sendAttempt}</p>
          <button id="send-email" className="btn btn-secondary w-24 text-neutral-content mt-4 text-center" onClick={sendEmail}>Send</button>
        </div>
      </div>
    </div>
    </>
  );
}
