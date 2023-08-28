import React from "react";
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import { linkedin_clicked } from "./info-section";

export function Contact(){
  return (
    <div className="contact-div">
      <button onClick={instagram_clicked}><img src={instagram} width="40px"></img></button>
      <button onClick={linkedin_clicked}><img src={linkedin} width="40px"></img></button>
      <button onClick={github_clicked}><img src={github} width="40px"></img></button>
    </div>
  )
}

function instagram_clicked(){
  console.log('Instagram buton clicked')
  window.open('https://www.instagram.com/jmag.ar/' , '_blank')
}

function github_clicked(){
  console.log('GitHub Button Clicked')
  window.open('https://github.com/JosephRana11' , '_blank')
}