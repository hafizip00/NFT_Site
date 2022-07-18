import React from "react";

const Topstories = () => {
  return (
    <div className="top-main">
      <div className="page-text">
        <p className="top-heading">TOP STORIES</p>
        <h2>Our Must Read</h2>
        <p className="top-text">
          Lörem ipsum kristina Danielsson primagram agnostifas rybarad
          sexslavhandel cynpatologi. Filomatisk prer att dysbel heterofaktisk
          råliga. Stupstockspolitik operaskop, Martin Abrahamsson, när, medan
          lemor.
        </p>
      </div>
      <div className="block-wrapper">
        <div className="first-block block">
          <img src="First.jpg" alt="" srcset="" />
          <div className="first-content">
            <p className="block-title">GUIDE</p>
            <h2>
              NFTs Explained: A Must-Read Guide to Everything Non-Fungible
            </h2>
            <p className="read-more">Read More </p>
          </div>
        </div>
        <div className="second-blocks-wrapper block">
          <div className="top-block">
            <img src="Image.jpg" alt="img" />
            <div className="top-content">
              <p className="block-title">COLLECTIBLES</p>
              <h2>Upcoming Drops: May 30 - June 5</h2>
              <p className="read-more">Read more</p>
            </div>
          </div>
          <div className="bottom-block">
            <img src="Second1.jpg" alt="img" />
            <div className="bottom-content">
              <p className="block-title">NEWS</p>
              <h2>How GoblinTown Broke The NFT Community</h2>
              <p className="read-more">Read more</p>
            </div>
          </div>
        </div>
        <div className="third-block block">
          <img src="Third.jpg" alt="" />
          <div className="third-content">
            <p className="block-title">GUIDES</p>
            <h2>
              Soulbound Tokens (SBTs): Meet The Tokens That May Change Your Life
            </h2>
            <p className="read-more">Read more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topstories;
