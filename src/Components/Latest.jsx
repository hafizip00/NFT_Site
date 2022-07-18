import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Latest = () => {
  return (
    <div>
      <div className="head">
        <div className="left">
          <p>THE LATEST</p>
          <h2>Recent Articles</h2>
        </div>
        <div className="right">
          <li className="subs">VIEW ALL</li>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="img-and-info">
            <div className="card-img">
              <img src="C1.jpg" alt="img" />
            </div>
            <div className="card-info">
              <div className="card-keys">
                <p className="category">ART</p>
                <p>by BlocTAK</p>
                <p>May 26 2022</p>
              </div>
              <div className="card-heading">
                <h2>
                  Artists Are Flooding to The Solana Blockchain to Sell NFTs.
                  But There's a Problem.
                </h2>
              </div>
            </div>
          </div>
          <div>
            <BsFillArrowRightCircleFill className="card-arrow" />
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="card">
          <div className="img-and-info">
            <div className="card-img">
              <img src="C2.jpg" alt="img" />
            </div>
            <div className="card-info">
              <div className="card-keys">
                <p className="category">GUIDE</p>
                <p>by BlocTAK</p>
                <p>May 26 2022</p>
              </div>
              <div className="card-heading">
                <h2>
                  Artists Are Flooding to The Solana Blockchain to Sell NFTs.
                  But There's a Problem.
                </h2>
              </div>
            </div>
          </div>
          <div>
            <BsFillArrowRightCircleFill className="card-arrow" />
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="card">
          <div className="img-and-info">
            <div className="card-img">
              <img src="C3.jpg" alt="img" />
            </div>
            <div className="card-info">
              <div className="card-keys">
                <p className="category">FEATURES</p>
                <p>by BlocTAK</p>
                <p>May 26 2022</p>
              </div>
              <div className="card-heading">
                <h2>
                  Artists Are Flooding to The Solana Blockchain to Sell NFTs.
                  But There's a Problem.
                </h2>
              </div>
            </div>
          </div>
          <div>
            <BsFillArrowRightCircleFill className="card-arrow" />
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="load-more-wrapper">
          <p className="subs">LOAD MORE</p>
        </div>
      </div>
    </div>
  );
};

export default Latest;
