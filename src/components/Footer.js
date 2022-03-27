import React from "react";

function Footer() {
  const words = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "Api",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Hashtags",
    "Instagram Lite",
    "Dance",
    "Food & Drink",
    "Home & Garden",
    "Music",
    "Visual Arts",
  ];
  return (
    <>
      <div className="d-flex justify-content-center">
        {words.map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <p>English</p>
        <p>© 2022 Clonaagraam "Clone of Instagram"</p>
      </div>
    </>
  );
}

export default Footer;
