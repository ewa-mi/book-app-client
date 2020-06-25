import React from "react";
import "./index.css";

export default function AboutPage() {
  return (
    <>
      <h1 className="header">About</h1>

      <p className="aboutText">
        The Book App is dedicated to book lovers, who want to have an overview
        of books they already read. As a user of The Book App you can create
        your books collections, rate books, write reviews and share your
        opinions with the world. Moreover, you can follow literary news and book
        recommendations.
      </p>
      <div className="pictureframe">
        <div className="bird">
          <div className="body2"></div>
          <div className="body1"></div>
          <div className="wing-l"></div>
          <div className="wing-r"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </>
  );
}
