import React from "react";
import "../styles/ProfilCard.css";
const ProfilCard = ({ photo, nom, role }) => {
  return (
    <div className="flat">
      <div className=" flex flex-col items-center">
        <img src={photo} alt={nom} className="profil-photo rounded-t-lg " />
        <div className=" flex flex-col items-center ">
          <h3 className="text-2xl font-bold">{nom}</h3>
          <p className="text-xl">{role}</p>
        </div>
      </div>
    </div>
  );
};

ProfilCard.propTypes = {};

export default ProfilCard;
