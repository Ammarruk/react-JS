import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  validation?: string;
  fileUrl?: string; // Optional file field
}

const API_URL = "https://683b576a28a0b0f2fdc46ffc.mockapi.io/products";

const EditCourse = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error instanceof Error ? error.message : "Failed to fetch course");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleSave = async () => {
    if (!course) return;

    const updatedCourse = {
      ...course,
      fileUrl: file ? URL.createObjectURL(file) : course.fileUrl, // Temporary preview URL (for production, upload the file)
    };

    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCourse),
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      navigate("/"); // Go back to course list
    } catch (error) {
      console.error("Save error:", error);
      setError(error instanceof Error ? error.message : "Failed to save course");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container py-5">
      <h1 className="text-success">Edit Course</h1>
      {course && (
        <div>
          <input
            type="text"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
            placeholder="Title"
            className="form-control mb-2"
          />
          <textarea
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            placeholder="Description"
            className="form-control mb-2"
          />
          <input
            type="number"
            value={course.price}
            onChange={(e) => setCourse({ ...course, price: parseFloat(e.target.value) })}
            placeholder="Price"
            className="form-control mb-2"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="form-control mb-3"
          />
          {file && <p>Selected file: {file.name}</p>}
          <button onClick={handleSave} className="btn btn-success">Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default EditCourse;
