import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import img1 from "../img/machines/1.JPG";
import img2 from "../img/machines/2.JPG";
import img3 from "../img/machines/3.JPG";
import img4 from "../img/machines/4.JPG";
import img5 from "../img/machines/5.JPG";
import img6 from "../img/machines/6.JPG";
import img7 from "../img/machines/7.JPG";
import img8 from "../img/machines/8.JPG";
import img9 from "../img/machines/9.JPG";
import img10 from "../img/machines/10.JPG";
import img12 from "../img/machines/12.JPG";
import img13 from "../img/machines/exc.jpg";
import img14 from "../img/machines/exc2.jpg";
import img15 from "../img/machines/roller1.jpg";
import img16 from "../img/machines/dozer.jpeg";
import img17 from "../img/fwdemergencyrepairskabalekisororoad/IMG_20240817_174851.jpg";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img12,
    img1,
    img13,
    img14,
    img15,
    img16,
    img17,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div>
      <h2
        style={{ textAlign: "center", paddingBottom: "15px", color: "#0083ca" }}
      >
        These are some of our company Machines
      </h2>
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: "2px", objectFit: "cover", height: "600" }}
          alt="gallery-photos"
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default Gallery;
