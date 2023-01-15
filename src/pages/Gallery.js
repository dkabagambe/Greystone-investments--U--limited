import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import img1 from "../images/teslab.jpg";
import img2 from "../images/teslac.jpg";
import img3 from "../images/teslah.jpg";
import img4 from "../images/transformer.jpg";
import img5 from "../images/teslaz.jpg";
import img6 from "../images/tesla1.jpg";
import img7 from "../images/teslad.jpg";
import img8 from "../images/teslamv.jpg";
import img9 from "../images/tesla.jpg";
import img10 from "../images/tesla10.jpg";
import img11 from "../images/teslak.jpg";
import img12 from "../images/tesla6.jpg";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    img1,
    img7,
    img3,
    img8,
    img11,
    img4,
    img2,
    img6,
    img9,
    img5,
    img10,
    img12,
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
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
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
