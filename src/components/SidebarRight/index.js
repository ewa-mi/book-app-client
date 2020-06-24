import React from "react";
import Button from "react-bootstrap/Button";
import "./index.css";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

export default function SidebarRight() {
  return (
    <div className="rightSidebarFrame">
      <img className="rightSidebarImg" src={img2} alt="J.K.Rowling" />
      <h4 className="sidebarRightTitle">J.K. Rowling's controversy</h4>
      <p>
        Authors at J.K. Rowling's literary agency quit over company's refusal to
        speak out on transgender rights.
      </p>
      <Button
        variant="outline-dark"
        className="sidebarButton"
        href="https://edition.cnn.com/2020/06/22/uk/jk-rowling-transgender-agency-gbr-intl/index.html"
        target="blank"
      >
        <h6 className="goToNews">Read more</h6>
      </Button>
      <hr></hr>
      <img className="rightSidebarImg" src={img3} alt="book cover" />
      <h4 className="sidebarRightTitle">
        One man and his dog win prestigious Dutch literature prize
      </h4>
      <p>
        Sander Kollaard has won the prestigious Libris prize for literature
        2020, the Libris organisation for independent book sellers has
        announced.
      </p>
      <Button
        variant="outline-dark"
        className="sidebarButton"
        href="https://www.libris.nl/fictie/libris-literatuur-prijs/winnaar-libris-literatuurprijs/"
        target="blank"
      >
        <h6 className="goToNews">Read more</h6>
      </Button>
    </div>
  );
}
