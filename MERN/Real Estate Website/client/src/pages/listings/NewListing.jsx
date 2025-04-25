import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";


export default function NewListing() {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    type: "sell",
    isParkingSpot: false,
    isFurnished: false,
    beds: 0,
    baths: 0,
    regularPrice: 0,
    images: []
  });

  async function submitHandler(e) {
    
    e.preventDefault();
    console.log(formData);
    const fd = new FormData();
    fd.append("title", formData.title);
    fd.append("description", formData.description);
    fd.append("address", formData.address);
    fd.append("type", formData.type);
    fd.append("isParkingSpot", formData.isParkingSpot);
    fd.append("isFurnished", formData.isFurnished);
    fd.append("beds", formData.beds);
    fd.append("baths", formData.baths);
    fd.append("regularPrice", formData.regularPrice);

    if (formData.images.length > 5) {
      toast.error("max of 5 images can be selected");
      return;
    }

    formData.images.forEach((image, index) => {
      fd.append("images", image);
    });

    for (const [key, value] of fd.entries()) {
      console.log(key, " ", value);
    }

    try {
      console.log(`${import.meta.env.VITE_BACKEND_URL}/listings/new`);

      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/listings/new`, fd, {
        withCredentials: true,
        "Content-Type": "multipart/form-data"
      })
      
      if (res.data?.message) {
        toast.success(res.data?.message)
      }
      navigate("/");

      console.log(res);
    
    } catch (err) {
      toast.error(err.response?.data?.message|| "Something went wrong");
      return;
    }
  }

  function inputHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function checkboxHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked,
    }));
  }

  function deletePreviewHandler(indexDel) {
    console.log(formData.images)
    const remainingImages = formData.images.filter((_, index) => index !== indexDel);

    setFormData(prevData => ({
      ...prevData,
      images: remainingImages
    }));
  }

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-5">
      <h1 className="text-center text-2xl sm:text-4xl font-semibold my-5 sm:my-8">
        Create a new Listing
      </h1>
      <form
        className="flex flex-col gap-5 sm:gap-7 items-cente"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="title"
          name="title"
          id="title"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl p-3 bg-white"
          value={formData.title}
          onChange={inputHandler}
          required
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          id="description"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl  p-3 bg-white"
          value={formData.description}
          onChange={inputHandler}
          required
        />
        <input
          type="text"
          placeholder="address"
          name="address"
          id="address"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl p-3 bg-white"
          value={formData.address}
          onChange={inputHandler}
          required
        />

        <fieldset>
          <legend htmlFor="sell" className="mb-3">
            Type
          </legend>

          <div className="flex gap-10">
            <label htmlFor="sell">
              <input
                type="radio"
                name="type"
                id="sell"
                value="sell"
                checked={formData.type === "sell"}
                onChange={inputHandler}
              />
              &nbsp;Sell
            </label>

            <label htmlFor="rent">
              <input
                type="radio"
                name="type"
                id="rent"
                value="rent"
                checked={formData.type === "rent"}
                onChange={inputHandler}
              />
              &nbsp;Rent
            </label>
          </div>
        </fieldset>

        <div className="flex gap-10">
          <label htmlFor="isParkingSpot">
            <input
              type="checkbox"
              name="isParkingSpot"
              id="isParkingSpot"
              checked={formData.isParkingSpot}
              onChange={checkboxHandler}
            />
            &nbsp;Parking Spot
          </label>

          <label htmlFor="isFurnished">
            <input
              type="checkbox"
              name="isFurnished"
              id="isFurnished"
              checked={formData.isFurnished}
              onChange={checkboxHandler}
            />
            &nbsp;Furnished
          </label>
        </div>

        <div className="flex gap-10">
          <label htmlFor="beds">
            <input
              type="number"
              name="beds"
              id="beds"
              placeholder="e.g. 4"
              className="border rounded-sm w-20"
              value={formData.beds}
              onChange={inputHandler}
              required
              min={1}
            />
            &nbsp;Beds
          </label>

          <label htmlFor="baths">
            <input
              type="number"
              name="baths"
              id="baths"
              placeholder="e.g. 2"
              className="border rounded-sm w-20"
              value={formData.baths}
              onChange={inputHandler}
              required
              min={1}
            />
            &nbsp;Baths
          </label>
        </div>

        <div>
          {" "}
          <label htmlFor="regularPrice">
            <input
              type="number"
              name="regularPrice"
              id="regularPrice"
              placeholder="50"
              className="border rounded-sm p-2"
              value={formData.regularPrice}
              onChange={inputHandler}
              required
              min={1}
            />
            &nbsp;Regular Price ($ / month)
          </label>
        </div>

        <div>
          {" "}
          <label htmlFor="images">
            &nbsp;Images (max of 5)
            <br />
            <input
              type="file"
              multiple
              name="images"
              id="images"
              accept="image/*"
              className="border rounded-sm p-2"
              onChange={(e) => {
                const images = Array.from(e.target.files);
                setFormData((prevData) => ({ ...prevData, images }));
              }}
            />
          </label>
        </div>
        <h2>{formData?.images?.length || 0}/5 images selected</h2>

        {formData.images && (
          <div className="flex flex-wrap gap-5 max-w-sm">
            {formData.images.map((image, index) => (
              <div className="w-24 relative">
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`preview ${index + 1}`}
                  className="w-full "
                />
                <button className="bg-red-600 flex justify-center items-center h-5 w-5 rounded-full text-white absolute top-1 right-1"
                onClick={() => deletePreviewHandler(index)} type="button">
                  x
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="bg-slate-700 text-white rounded-md  w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl tracking-wide shadow-md cursor-pointer"
        >
          Create a new Listing
        </button>
      </form>
    </div>
  );
}
