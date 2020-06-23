import React from "react";
import Button from "react-bootstrap/Button";
import "./index.css";
import img1 from "../../assets/img1.jpg";
import img4 from "../../assets/img4.jpg";

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
      <hr></hr>
      <img className="leftSidebarImg" src={img4} />
      <h4 className="sidebarLeftTitle">
        Carlos Ruiz Zafón - The Shadow of the Wind
      </h4>
      <p>
        Barcelona, 1945: A city slowly heals from its war wounds, and Daniel, an
        antiquarian book dealer's son who mourns the loss of his mother, finds
        solace in a mysterious book entitled The Shadow of the Wind, by one
        Julian Carax.
      </p>
      <Button
        variant="outline-dark"
        className="sidebarButton"
        href="https://www.bookdepository.com/Shadow-Wind-Carlos-Ruiz-Zafon/9781920885854?ref=grid-view&qid=1592923419574&sr=1-3"
        target="blank"
      >
        <h6 className="goToBookstore">Go to bookstore</h6>
      </Button>
    </div>
  );
}
