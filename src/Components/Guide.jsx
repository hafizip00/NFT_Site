import React from "react";
import {
  RiSearchEyeFill,
  RiMailSendLine,
  RiInboxArchiveLine,
} from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";

const Guide = () => {
  return (
    <div className="guide-container">
      <div className="guide-content">
        <p className="guide-title">YOUR GO-TO NFT GUIDE</p>
        <h2>BLocTAK is here to help you navigate the NFT landscape</h2>
        <p className="guide-desc">
          Lörem ipsum kristina Danielsson primagram agnostifas rybarad
          sexslavhandel cynpatologi. Filomatisk prer att dysbel heterofaktisk
          råliga. Stupstockspolitik operaskop, Martin Abrahamsson, när, medan
          lemor.
        </p>
        <div className="boxes">
          <div className="two-box">
            <div className="box b-box">
              <IoNewspaperOutline className="feature-icon" />
              <p>News</p>
            </div>
            <div className="box">
              <RiMailSendLine className="feature-icon" />
              <p>Newsletter</p>
            </div>
          </div>
          <div className="two-box">
            <div className="box b-box">
              <RiSearchEyeFill className="feature-icon" />
              <p>Feature</p>
            </div>
            <div className="box">
              <RiInboxArchiveLine className="feature-icon" />
              <p>Guide</p>
            </div>
          </div>
        </div>
      </div>
      <div className="guide-img">
        <img src="Goto.png" alt="" />
      </div>
    </div>
  );
};

export default Guide;
