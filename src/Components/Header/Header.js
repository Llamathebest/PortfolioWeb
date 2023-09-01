import React from "react";
import { Model } from "../../Data/Paths/Paths";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = ({ titre, paragraphe, img }) => {

  const pos = {x:-10, y:-10, z:-10}
  return (
    <div className="header">
      <div className="titre">
        <span>
          <h1>{titre}</h1>
          <p>{paragraphe}</p>
        </span>
        <Model scale={1.5}/>
      </div>
      <span className="reseau-social">
          <Link>
          <img src="icons/Linkedln.png" alt="In" />
          </Link>
          <Link>
          <img src="icons/Instagram.png" alt="Ln" />
          </Link>
          <Link>
          <img src="icons/Gmail.png" alt="Gm" />
          </Link>
      </span>
    </div>
  );
};

export default Header;
