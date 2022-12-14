import React from "react";
import { useLocation } from "react-router-dom";

export default function DetailPhoto() {
  const location = useLocation();

  const detail = location.state.e;

  return (
    <>
      <div className="main-picture">
        <div className="grid1">
          <img
            className="main-img"
            aria-hidden="true"
            alt=""
            elementtiming="LCP-target"
            fetchpriority="high"
            id="FMP-target"
            src={detail.src}
            data-original-uri="https://a0.muscache.com/pictures/miso/Hosting-749996089802009824/original/8fefceb0-da83-461c-9441-1dc5ce1c0174.jpeg"
          />
        </div>
        <div className="grid2">
          <img
            className="main-img"
            aria-hidden="true"
            alt=""
            elementtiming="LCP-target"
            src={detail.src}
            data-original-uri="https://a0.muscache.com/pictures/miso/Hosting-749996089802009824/original/e17c9704-68e8-478b-90ce-86e822ef921b.jpeg"
          />
        </div>
        <div className="grid3">
          <img
            className="main-img"
            aria-hidden="true"
            alt=""
            elementtiming="LCP-target"
            src={detail.src}
            data-original-uri="https://a0.muscache.com/pictures/miso/Hosting-749996089802009824/original/375f3bdf-59b7-49c2-a9b5-c486465a08c7.jpeg"
          />
        </div>
        <div className="grid4">
          <img
            className="main-img"
            aria-hidden="true"
            alt=""
            elementtiming="LCP-target"
            src={detail.src}
            data-original-uri="https://a0.muscache.com/pictures/miso/Hosting-749996089802009824/original/48e1dd35-a977-46f1-a426-31ee9be52e6f.jpeg"
          />
        </div>
        <div className="grid5">
          <img
            className="main-img"
            aria-hidden="true"
            alt=""
            elementtiming="LCP-target"
            src={detail.src}
            data-original-uri="https://a0.muscache.com/pictures/miso/Hosting-749996089802009824/original/46e15925-53a4-4a4d-a25f-00c9f1a87bee.jpeg"
          />
        </div>
      </div>
    </>
  );
}
