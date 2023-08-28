import React from "react";

export function Info(){
  return (
    <div className="info-box">
      <h1>Joseph Rana</h1>
      <p className="job-tittle">FullStack Developer</p>
      <p>github.com/josephrana11/</p>
      <div className="buttons">
      <button className="email-button" onClick={email_clicked}>Email</button>
      <button className="linkedin-button" onClick={linkedin_clicked}>Linkedin</button>
      </div>
      <div className="about-div">
        <h2 className="about">About</h2>
        <p className="about-info">I am a fullstack developer and I am 19 years old. I followed the non tradiditonal path to purse programming by myself. Someday I would like to work at Google and Space x.</p>
        <h2 className="interests">Interests</h2>
        <p className="about-info">I like to build new things through projects. I also like to read books and play Basketball.</p>
      </div>
    </div>
  )
}

function email_clicked(){
  console.log('Email button clicked')
  window.open('https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRfBnszZTVjHZDQFGVQCPsxSBWBPWDjPVgwXpFxkqZnNvBZrZFwFjgSMHLxMLXTPLDtvzg' , '_blank')
}

export function linkedin_clicked(){
  console.log('linkedin button clicked')
  window.open('https://www.linkedin.com/in/joseph-rana-009319288/' , '_blank')
}