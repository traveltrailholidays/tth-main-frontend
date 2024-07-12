"use client";

import { useCallback, useState } from "react";
import Section from "../ui/feature/Section";
import Container from "../ui/feature/Container";
import Perks from "./SelectPerks";
import Category from "./SelectCategory";
import { title } from "process";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

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

  const router = useRouter();

  const initialFormData = {
    title: "",
    description: "",
    days: 1,
    nights: 0,
    imageUrls: "",
    location: "",
    regularPrice: 0,
    discount: 0,
    daysActivities: [] as { activity: string }[],
  };

  const [formData, setFormData] = useState(initialFormData);

  const [perks, setPerks] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [inputs, setInputs] = useState([{ activity: "" }]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);

  const addInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // setInputs([...inputs, {activity:""} ]);
    if (inputs.length < formData.days) {
      setInputs([...inputs, { activity: "" }]);
      setFormData({ ...formData, daysActivities: [...inputs] });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        imageUrls: URL.createObjectURL(file), // Create a URL for the file for preview
      });
    }
  };

  // const handlePerkChange = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.checked) {
  //       setPerks([...perks, e.target.value]);
  //       setFormData({ ...formData, perks: [...perks, e.target.value] });
  //     } else {
  //       setPerks(perks.filter((perk) => perk !== e.target.value));
  //       setFormData({
  //         ...formData,
  //         perks: perks.filter((perk) => perk !== e.target.value),
  //       });
  //     }
  //   },
  //   [perks, formData]
  // );

  // const handleCategoryChange = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.checked) {
  //       setCategories([...categories, e.target.value]);
  //       setFormData({
  //         ...formData,
  //         categories: [...categories, e.target.value],
  //       });
  //     } else {
  //       setCategories(
  //         categories.filter((category) => category !== e.target.value)
  //       );
  //       setFormData({
  //         ...formData,
  //         categories: categories.filter(
  //           (category) => category !== e.target.value
  //         ),
  //       });
  //     }
  //   },
  //   [categories, formData]
  // );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/create-packages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        console.log("error in uploading ");
        return;
      }
      setFormData({
        title: "",
        description: "",
        days: 1,
        nights: 0,
        imageUrls: "",
        location: "",
        regularPrice: 0,
        discount: 0,
        daysActivities: [] as { activity: "" }[],
      });
      router.push("/create-packages");
    } catch (error) {
      console.log("error in file submitting");
    }
  };

  return (
    <Section classes="mt-28 md:px-3 mb-20">
      <Container classes="flex flex-col gap-10 relative">
        <h1 className="text-gray-800 dark:text-gray-50 text-xl md:text-2xl font-semibold absolute bg-white dark:bg-neutral-950 top-0 -translate-y-1/2 left-5 px-2">
          Create a package
        </h1>
        <div className="border-2 shadow-sm dark:border-gray-700 rounded p-5">
          <form
            onSubmit={handleSubmit}
            action=""
            className="mt-5 flex flex-col gap-5"
          >
            <input
              id="title"
              type="text"
              className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
              value={formData.title}
              placeholder="Title"
              onChange={handleChange}
            />
            <textarea
              name=""
              id="description"
              className="min-h-32 bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
              placeholder="description"
              value={formData.description}
              onChange={handleChange}
            />
            <div className="flex gap-5">
              <div className="w-full flex flex-col gap-2">
                <h1>Days :</h1>
                <select
                  name=""
                  id="days"
                  value={formData.days}
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
                  value={formData.nights}
                  type="number"
                  className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
                  placeholder="Nights"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <input
                id="imageUrls"
                type="text"
                onChange={handleChange}
                className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
                value={formData.imageUrls}
                placeholder="Add Image using link"
              />
              {/* <button className="bg-gray-500 px-3 py-2 rounded font-medium text-gray-50 w-40">
                Insert
              </button> */}
            </div>
            <h1>Add Location</h1>
            <input
              type="text"
              id="location"
              onChange={handleChange}
              className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
              value={formData.location}
              placeholder="Location"
            />
            <div className="flex gap-5">
              <div className="w-full flex flex-col gap-2">
                <h1>Add Regular Price :</h1>
                <input
                  id="regularPrice"
                  onChange={handleChange}
                  type="number"
                  className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
                  value={formData.regularPrice}
                  placeholder="Regular Price"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <h1>Discount Percentage :</h1>
                <input
                  id="discount"
                  onChange={handleChange}
                  type="number"
                  className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
                  value={formData.discount}
                  placeholder="discount"
                />
              </div>
            </div>
            <br />
            <h1>Add activities of the days </h1>
            {inputs.map((input, index) => {
              return (
                <div key={index}>
                  <input
                    type="text"
                    value={input.activity}
                    onChange={(e) => {
                      const updatedInputs = [...inputs];
                      updatedInputs[index].activity = e.target.value;
                      setInputs(updatedInputs);
                      setFormData({
                        ...formData,
                        daysActivities: updatedInputs,
                      });
                    }}
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
            {/* <Perks /> */}
            {/* <div className="flex flex-col gap-2 mt-3">
              <h1>Add Perks :</h1>
              <div className="flex gap-10 flex-wrap">
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    onChange={handlePerkChange}
                  />
                  <span>24 x 7 Support</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    onChange={handlePerkChange}
                  />
                  <span>24 x 7 Support</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    onChange={handlePerkChange}
                  />
                  <span>24 x 7 Support</span>
                </label>
              </div>
            </div> */}
            {/* <Category /> */}
            {/* <div className="flex flex-col gap-2 mt-3">
              <h1>Categories :</h1>
              <div className="flex gap-10 flex-wrap">
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    onChange={handleCategoryChange}
                  />
                  <span>Romantic</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    onChange={handleCategoryChange}
                  />
                  <span>Religious</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    onChange={handleCategoryChange}
                  />
                  <span>Adventure</span>
                </label>
              </div>
            </div> */}
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
