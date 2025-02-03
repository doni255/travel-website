import { Link } from "react-router-dom";
import React from "react";

function Carditem({ src, text, label, path, bodyText, disabled, onClick }) {
  return (
    <>
      <li className="cards__item" onClick={disabled ? onClick : null}>
        {disabled ? (
          <div className="cards__item__link disabled">
            <figure className="cards__item__pic-wrap" data-category={label}>
              <img src={src} alt="Travel Image" className="cards__item__img" />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{text}</h5>
              <p className="cards__item__bodyText">{bodyText}</p>
            </div>
          </div>
        ) : (
          <Link className="cards__item__link" to={path}>
            <figure className="cards__item__pic-wrap" data-category={label}>
              <img src={src} alt="Travel Image" className="cards__item__img" />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{text}</h5>
              <p className="cards__item__bodyText">{bodyText}</p>
            </div>
          </Link>
        )}
      </li>
    </>
  );
}

export default Carditem;
