import React from "react";
import img1 from "../img/machines/logo.PNG";

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        margin: "20px",
      }}
    >
      <h1 style={{ color: "red" }}>404 - Not Found</h1>
      <p style={{ color: "blue", textAlign: "left" }}>
        Sorry, the page you were looking for could not be found on Greystone
        Investments Limited website
      </p>
      <img
        src={img1}
        alt="page-not-found"
        style={{ height: "auto", width: "90%", objectFit: "cover" }}
      />
    </div>
  );
};

export default NotFoundPage;
