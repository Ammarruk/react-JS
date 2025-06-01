import { useState } from "react";
import { useNavigate } from "react-router-dom";

// API endpoint for courses resource on MockAPI
const API_URL = "https://683b576a28a0b0f2fdc46ffc.mockapi.io/products";

const CourseAdd = () => {
  // State to store the course inputs
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const navigate = useNavigate();

  // Function to add a new course
  const addCourse = async () => {
    const course = { title, description, price };

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    });

    navigate("/courses");
  };

  return (
    <div className="container my-5">
      <h2 className="text-primary text-center my-4">Add New Course</h2>
      <div className="card shadow-lg p-4">
        <div className="mb-3">
          <label htmlFor="titleTextBox" className="form-label fw-bold">
            Course Title
          </label>
          <input
            type="text"
            id="titleTextBox"
            className="form-control"
            placeholder="Enter Course Title like Java, Python, React, etc"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionTextBox" className="form-label fw-bold">
            Course Description
          </label>
          <input
            type="text"
            id="descriptionTextBox"
            className="form-control"
            placeholder="Enter Course Description such as topics"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priceTextBox" className="form-label fw-bold">
            Course Price ($)
          </label>
          <input
            type="number"
            id="priceTextBox"
            className="form-control"
            placeholder="Enter Course Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className="btn btn-success w-100 fw-bold" onClick={addCourse}>
          Add Course
        </button>
      </div>
    </div>
  );
};

export default CourseAdd;
