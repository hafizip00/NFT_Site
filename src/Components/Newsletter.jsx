import React from "react";

const Newsletter = () => {
  return (
    <div className="cover">
      <div className="news-wrapper">
        <p>subscribe to our newsletter</p>
        <h2>We simplify the market into actionable insights every week</h2>
      </div>
      <div className="search-wrapper">
        <input type="search" />
        <li>Subscribe</li>
      </div>
    </div>
  );
};

export default Newsletter;
