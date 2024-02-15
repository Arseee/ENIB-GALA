import React from "react";
import ProfilCard from "../components/ProfilCard";
import img4 from "../img/wetransfer_img_1354-jpeg_2023-11-08_1341/IMG_1355.jpeg";
import img6 from "../img/wetransfer_img_1354-jpeg_2023-11-08_1341/IMG_1356.jpeg";
import img5 from "../img/wetransfer_img_1354-jpeg_2023-11-08_1341/IMG_1361.jpeg";
import img2 from "../img/wetransfer_img_1354-jpeg_2023-11-08_1341/IMG_1363.jpeg";
import img3 from "../img/wetransfer_img_1354-jpeg_2023-11-08_1341/IMG_1368.jpeg";
import img1 from "../img/wetransfer_img_1354-jpeg_2023-11-08_1341/IMG_1369.jpeg";

import "../styles/ProfilCard.css";

export const SlideStaff = () => {
  return (
    <div className="flex items-center flex-col font">
      <div className="mb-8">
        <p className="text-4xl text-blue-100 font-bold underline underline-offset-8">
          {" "}
          Staff
        </p>
      </div>
      <div className="grid-container ">
        <ProfilCard photo={img1} nom="Arthur PRESSE" role="Président" />
        <ProfilCard photo={img2} nom="Alexis MAURICE" role="Vice-président" />
        <ProfilCard photo={img3} nom="Léo OREVEILLON" role="Secrétaire" />
        <ProfilCard photo={img4} nom="Joseph LASTENET" role="Secrétaire" />
        <ProfilCard photo={img5} nom="Claire PERON" role="Secrétaire" />
        <ProfilCard photo={img6} nom="Noé MOREAU" role="Trésorier" />
      </div>
    </div>
  );
};
