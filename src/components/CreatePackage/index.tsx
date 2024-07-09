"use client";

import { useState } from "react";
import Section from "../ui/feature/Section";
import Container from "../ui/feature/Container";
import Perks from "./SelectPerks";
import Category from "./SelectCategory";
import { title } from "process";

const CreatePackages = () => {
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [days, setDays] = useState();
  // const [location, setLocation] = useState('');
  // const [addedPhotos, setAddedPhotos] = useState([]);
  // const [photoLink, setPhotoLink] = useState('');
  // const [perks, setPerks] = useState([]);
  // const [price, setPrice] = useState();
  // const [category, SetCategory] = useState([]);
  // const [itinary, setItinary] = useState([]);

  // function addPhotoByLink() {

  // }
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    days: 1,
    nights: 0,
    imageUrls: "",
    location: "",
  });

  const [inputs, setInputs] = useState([
    {
      activity: "",
    },
  ]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);

  const addInput = () => {
    if (inputs.length < formData.days) {
      setInputs([...inputs]);
    }
  };

  return (
    <Section classes="mt-28 md:px-3 mb-20">
      <Container classes="flex flex-col gap-10 relative">
        <h1 className="text-gray-800 dark:text-gray-50 text-xl md:text-2xl font-semibold absolute bg-white dark:bg-neutral-950 top-0 -translate-y-1/2 left-5 px-2">
          Create a package
        </h1>
        <div className="border-2 shadow-sm dark:border-gray-700 rounded p-5">
          <form action="" className="mt-5 flex flex-col gap-5">
            <input
              id="title"
              type="text"
              className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
              placeholder="Title"
              onChange={handleChange}
            />
            <textarea
              name=""
              id="description"
              className="min-h-32 bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
              placeholder="description"
              onChange={handleChange}
            />
            <div className="flex gap-5">
              <div className="w-full flex flex-col gap-2">
                <h1>Days :</h1>
                <select
                  name=""
                  id="days"
                  onChange={handleChange}
                  className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
                >
                  <option className="bg-white dark:bg-neutral-950" value="1">
                    1
                  </option>
                  <option className="bg-white dark:bg-neutral-950" value="2">
                    2
                  </option>
                  <option className="bg-white dark:bg-neutral-950" value="3">
                    3
                  </option>
                  <option className="bg-white dark:bg-neutral-950" value="4">
                    4
                  </option>
                  <option className="bg-white dark:bg-neutral-950" value="5">
                    5
                  </option>
                  <option className="bg-white dark:bg-neutral-950" value="6">
                    6
                  </option>
                  <option className="bg-white dark:bg-neutral-950" value="7">
                    7
                  </option>
                </select>
              </div>
              <div className="w-full flex flex-col gap-2">
                <h1>Nights :</h1>
                <input
                  id="nights"
                  onChange={handleChange}
                  type="number"
                  className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
                  placeholder="Nights"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <input
                type="text"
                onChange={handleChange}
                className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
                placeholder="Add Image using link"
              />
              <button className="bg-gray-500 px-3 py-2 rounded font-medium text-gray-50 w-40">
                Insert
              </button>
            </div>
            <input
              type="text"
              id="location"
              onChange={handleChange}
              className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
              placeholder="Location"
            />
            <br />

            {inputs.map((inputs, index) => {
              return (
                <div key={index}>
                  <input
                    type="text"
                    className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
                    placeholder={`Day ${index + 1} plan`}
                  />
                </div>
              );
            })}
            <button
              onClick={addInput}
              className=" p-3 rounded-lg hover:bg-blue-600 bg-blue-800 text-white"
            >
              Add Days activities
            </button>
            <Perks />
            <Category />
            <div className="w-full flex flex-row-reverse">
              <button className="bg-[#FF5956] px-3 py-2 rounded font-medium text-gray-50">
                Create Package
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default CreatePackages;
