import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SubmittedModal from "../components/SubmittedModal";

//! Todo: Redirecting

const CreateTextAd = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const navigate = useNavigate();
    // navigate('/createAds')

    // Your form submission logic here

    // Open the modal
    setModalOpen(true);
    // Optionally, you can wait for 0.6s before closing the modal
    setTimeout(() => {
      setModalOpen(false);
      window.location.href = "/createAds";
    }, 600);
  };

  return (
    <div className="border m-7">
      <h2 className="text-md font-semibold p-3">Create Text & Media</h2>
      <form className="p-3" onSubmit={handleSubmit}>
        <div className="flex flex-col md:grid md:grid-flow-col gap-7">
          <div className="flex flex-col gap-[16.8px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="heading01">Heading 01</label>
              <input
                className="text-gray-400 border-gray-400 h-8"
                id="heading01"
                type="text"
                placeholder="Add a heading that would make users interested"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="heading02">Heading 02</label>
              <input
                className="text-gray-400 border-gray-400 h-8"
                id="heading02"
                type="text"
                placeholder="Add a heading that would make users interested"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="bussinessName">Bussiness Name</label>
              <input
                className="text-gray-400 border-gray-400 h-8"
                type="text"
                placeholder="Add a business name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Description 01</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="4"
                placeholder="Add primary text to help users understand more about your products, services or offers"
                className="resize-none border-gray-400"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="buttonLabel">Button Label</label>
              <select
                name="buttonLabel"
                id="buttonLabel"
                className="h-8 pl-2 p-0 border-gray-400 text-gray-400"
              >
                <option selected disabled hidden>
                  Select a label that best suits your ad
                </option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="websiteUrl">Website URL</label>
          <input
            className="text-gray-400 border-gray-400 h-8"
            type="url"
            name="websiteUrl"
            id="websiteUrl"
            placeholder="Add the URL to the landing page you want to redirect users to"
          />
        </div>
        <div className="flex justify-end mt-52 gap-3">
          <Link to={"/createAds"}>
            <button className="bg-gray-100 border border-gray-300 px-11 py-1 m-4 mx-0 rounded-sm">
              Back
            </button>
          </Link>
          <button
            className="bg-blue-500 text-white px-11 py-1 m-4 mx-0 rounded-sm"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        {/* Modal content goes here */}
        <SubmittedModal
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default CreateTextAd;
