import { Contact } from "./components/contact-section";
import { Image } from "./components/image-section";
import { Info} from "./components/info-section";
import React from "react";

export function Content(){
  return (
    <div className="card-container">
    <div className="card">
      <Image/>
      <Info/>
      <Contact/>
    </div>
    </div>
  )
}