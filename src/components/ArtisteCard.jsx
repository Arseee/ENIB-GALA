import React from "react";
import "../styles/ProfilCard.css";
const ArtisteCard = ({ nom }) => {
  return (
    <div className="flatArtist text-blue-900 flex  items-center justify-center">
      <p className="flex items-center justify-center text-2xl font-bold m-0">
        {nom}
      </p>
    </div>
  );
};

ArtisteCard.propTypes = {};

export default ArtisteCard;
