import React, { useState } from "react";

function CardReveal({ title, type, children }) {
  const [showContent, setShowContent] = useState(false);

  const getStyles = () => {
    const styles = {
      height: type !== "vertical" ? "150px" : "323.5px",
    };

    if (showContent) {
      styles.backgroundImage =
        "linear-gradient(to right top, #5b3473, #3d508b, #1a6693, #217891, #47888c)";
    } else {
      styles.backgroundColor = "rgb(22,22,22)";
    }

    return styles;
  };

  return (
    <>
      <div
        bordered={false}
        style={getStyles()}
        onMouseEnter={() => setShowContent(true)}
        onMouseLeave={() => setShowContent(false)}
        className="card-reveal"
      >
        <label style={{ display: showContent ? "none" : "" }}>{title}</label>
        <label style={{ color: showContent ? "white" : "transparent" }}>
          {children}
        </label>
      </div>
      <br />
    </>
  );
}

export default CardReveal;
