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

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

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
          objectFit="cover"
          key={index}
          style={{ margin: "2px" }}
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
