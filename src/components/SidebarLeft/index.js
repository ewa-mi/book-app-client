import React from "react";
import Button from "react-bootstrap/Button";
import "./index.css";
import img1 from "../../assets/img1.jpg";

export default function SidebarLeft() {
  return (
    <div className="leftSidebarFrame">
      <img className="leftSidebarImg" src={img1} />
      <h4 className="sidebarLeftTitle">Zadie Smith - On Beauty</h4>
      <p>
        The story follows the lives of a mixed-race British/American family
        living in the United States, addresses ethnic and cultural differences
        in both the USA and the UK, as well as the nature of beauty.
      </p>
      <Button
        variant="outline-dark"
        className="sidebarButton"
        href="https://www.bookdepository.com/On-Beauty/9780141026664"
        target="blank"
      >
        <h6 className="goToBookstore">Go to bookstore</h6>
      </Button>
    </div>
  );
}
