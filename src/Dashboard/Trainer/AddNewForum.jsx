import { useState } from "react";
import { imageUpload } from "../../Api/Utils/Utils";
import toast from "react-hot-toast";
import { fitnessForums } from "../../Api/Featured/Featured";


const AddNewForum = () => {

    const [loading, setLoading] = useState(false);
    const [upload, setUpload] = useState("Upload Image");

  const handleCreateClass = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const instructorName = form.instructorName.value;
    const trainingTime = form.trainingTime.value;
    const coursePrice = form.coursePrice.value;
    const trainerSkills = form.trainerSkills.value;
    const images = form.image.files[0];
    const image_url = await imageUpload(images);
    const classData = {
      title,
      description,
      instructorName,
      trainingTime,
      coursePrice,
      trainerSkills,
      images,
      imag: image_url?.data?.display_url,
    };

    /* 
    title
    author: user
    content
    likes
    user
    text
    */

    try {
      const data = await fitnessForums(classData);
      console.log(data);
      toast.success("Classes Data Added!");
      setUpload("Uploaded!");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }

    console.table(classData);
  };

  const handleImage = (image) => {
    setUpload(image.name);
  };

  if(loading){
    return <span className="loading loading-ring loading-lg flex h-screen"></span>
  }

    return (
        <div className="w-10/12 mx-auto">
        <form onSubmit={handleCreateClass} className="w-10/12 mx-auto mt-8">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white"> Add New Fitness Class</h1>
            <p className="text-gray-500">
              Fill out the form below to create a new fitness class card.
            </p>
          </div>
          <div className="flex flex-col mt-8">
            <label className="mb-2">Class Name:</label>
            <input
              type="text"
              name="title"
              className="px-4 py-2 border rounded-md"
              placeholder="Enter class name"
            />
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col mt-4">
              <label className="mb-2">Class Description:</label>
              <textarea
                className="px-2 py-2 pb-8 border rounded-md"
                placeholder="Enter class description"
                name="description"
              ></textarea>
            </div>
            <div className="flex flex-col mt-4">
              <label className="mb-2">Instructor:</label>
              <input
                type="text"
                name="instructorName"
                className="px-4 py-2 border rounded-md"
                placeholder="Enter instructor name"
              />
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className=" grid grid-cols-1 space-y-8">
              <div className="flex flex-col">
                <label className="mb-2">Training time(Hour)</label>
                <input
                  type="number"
                  name="trainingTime"
                  className="px-4 py-2 border rounded-md"
                  placeholder="Enter time"
                />
              </div>
  
              <div className="flex flex-col mt-4">
                <label className="mb-2">Price:</label>
                <input
                  type="number"
                  name="coursePrice"
                  className="px-4 py-2 border rounded-md"
                  placeholder="Enter price"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="mb-2">Skill*</label>
                <input
                  type="text"
                  name="trainerSkills"
                  className="px-4 py-2 border rounded-md"
                  placeholder="Enter your skill"
                />
              </div>
            </div>
          </div>
  
          <div className="mt-5 p-4 bg-white w-full  m-auto rounded-lg">
            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    onChange={(e) => handleImage(e.target.files[0])}
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                  />
                  <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                    {upload}
                  </div>
                </label>
              </div>
            </div>
          </div>
  
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
            Create Class Card
          </button>
        </form>
      </div>
    );
};

export default AddNewForum;