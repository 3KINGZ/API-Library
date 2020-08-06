import React from "react";
import "./Card.css";
function Card({ title, category, description, cors, https, auth, link }) {
  return (
    <div className="card">
      <div>
        <h4> {title}</h4>
        <h5 className="category">{category}</h5>
        <hr />
      </div>
      <p className="card-text">{description}</p>
      <div className="features-container">
        <div>
          {https ? <div className="https features">HTTPS</div> : null}
          {cors ? <div className="cors features">CORS</div> : null}
          {auth ? <div className="auth features">OAuth</div> : null}
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-a"
      >
        <button className="card-btn">Try It!</button>
      </a>
    </div>
  );
}

export default Card;
