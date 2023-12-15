import React, { useState } from "react";
import AdImg from "../assets/ads_with_img.png";
import AdText from "../assets/ads_with_text.png";
import { Link } from "react-router-dom";

const CreateAds = () => {
  const [ad, setAd] = useState();
  const [textAd, setTextAd] = useState(true);
  const [mediaAd, setMediaAd] = useState(true);

  const handleChange = (type) => {
    switch (type) {
      case "textAd":
        setAd(textAd ? "/create" + type : "");
        setTextAd(!textAd);
        break;
      case "mediaAd":
        setAd(mediaAd ? "/create" + type : "");
        setMediaAd(!mediaAd);
        break;
      default:
        break;
    }
  };

  return (
    <div className="border m-7 flex flex-col">
      <h2 className="text-md font-semibold p-3">Create Ads</h2>
      <div className="flex flex-col items-center md:flex-row gap-10 relative justify-center mt-12">
        <label htmlFor="textAd">
          <input
            type="checkbox"
            id="textAd"
            className="w-5 h-5 text-blue-500 rounded-sm left-2 relative top-7 border-gray-300 focus:ring-transparent"
            value={textAd}
            onChange={() => handleChange("textAd")}
          />
          <div className="border-0 p-10 relative rounded-lg adCard">
            <img src={AdText} alt="Ads with img" width={250} />
            <div className="flex flex-col justify-center items-center  bg-gray-100 absolute h-16 bottom-0 right-0 left-0">
              <p className="text-gray-400 font-light text-sm">Create</p>
              <h1 className="font-bold">Text Ad</h1>
            </div>
          </div>
        </label>
        <label htmlFor="mediaAd">
          <input
            type="checkbox"
            id="mediaAd"
            className="relative left-2 top-7 w-5 h-5 text-blue-500 rounded-sm focus:ring-transparent border-gray-300"
            value={mediaAd}
            onChange={() => handleChange("mediaAd")}
          />
          <div className="border-0 rounded-lg relative shadow-lg p-10 adCard">
            <img src={AdImg} alt="Ads with img" width={250} />
            <div className="flex flex-col justify-center items-center  bg-gray-100 absolute h-16 bottom-0 right-0 left-0">
              <p className="text-gray-400 font-light text-sm">Create</p>
              <h1 className="font-bold">Media Ad</h1>
            </div>
          </div>
        </label>
      </div>
      <div className="flex justify-end">
        <Link to={ad}>
          <button className="bg-blue-500 text-white px-11 py-1 m-4 rounded-sm">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateAds;
