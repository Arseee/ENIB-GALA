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
        <p className="text-4xl font-bold underline underline-offset-8">
          {" "}
          Organisation
        </p>
      </div>
      <div className="grid-container">
        <ProfilCard photo={img1} nom="Arthur Presse" role="Président" />
        <ProfilCard photo={img2} nom="Alexis Maurice" role="Vis président" />
        <ProfilCard photo={img3} nom="Léo Oreveillon" role="Secrétaire" />
        <ProfilCard photo={img4} nom="Joseph Lastenet" role="Secrétaire" />
        <ProfilCard photo={img5} nom="Claire Peron" role="Secrétaire" />
        <ProfilCard photo={img6} nom="Noé moreau" role="Trésorier" />
      </div>
    </div>
  );
};
