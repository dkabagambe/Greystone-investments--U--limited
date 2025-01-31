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
import imgs1 from "../img/machines2/1.jpg";
import imgs2 from "../img/machines2/2.jpg";
import imgs3 from "../img/machines2/3.jpg";
import imgs4 from "../img/machines2/4.jpg";
import imgs5 from "../img/machines2/5.jpg";
import imgs6 from "../img/machines2/6.jpg";
import imgs7 from "../img/machines2/7.jpg";
import imgs8 from "../img/machines2/8.jpg";
import imggs1 from "../img/machines2/15.jpg";
import imggs2 from "../img/machines2/16.jpg";
import imggs3 from "../img/machines2/17.jpg";
import imggs4 from "../img/machines2/18.jpg";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    imgs1,
    imgs2,
    imgs3,
    imgs4,
    imgs5,
    imgs6,
    imgs7,
    imgs8,
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
    imggs1,
    imggs2,
    imggs3,
    imggs4,
    img1,
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
