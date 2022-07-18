import React from "react";

const Learn = () => {
  return (
    <div className="learn-container">
      <p>LEARN</p>
      <h2>Guides & Explainers</h2>
      <div className="learn-blocks">
        <div className="l1">
          <img src="l1.jpg" alt="img" />
          <div className="info">
            <h3>The Complete Guide to CryptoPunks NFTs</h3>
            <p>May 26 2022</p>
          </div>
        </div>
        <div className="l1">
          <img src="l2.jpg" alt="" />
          <div className="info">
            <h3>Yuga Labs: The NFT Company Taking Over the Metaverse </h3>
            <p>May 26 2022</p>
          </div>
        </div>
        <div className="l1">
          <img src="l3.jpg" alt="" />
          <div className="info">
            <h3>A Guide to Moonbirds: What Are These PFP Owl NFTs?</h3>
            <p>May 26 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
