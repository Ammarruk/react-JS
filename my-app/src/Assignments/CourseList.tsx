import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  validation: string; // Added validation field
}

const CourseList = () => {
  const API_URL = "https://683b576a28a0b0f2fdc46ffc.mockapi.io/products";
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error("Expected array but received different data structure");
      }
      setCourses(data);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error instanceof Error ? error.message : "Failed to fetch courses");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCourse = async (id: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error(`Failed to delete course: ${response.status}`);
      }
      await fetchCourses();
    } catch (error) {
      console.error("Delete error:", error);
      setError(error instanceof Error ? error.message : "Failed to delete course");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-4">📚 Course List</h1>

      <div className="d-flex justify-content-center mb-4">
        <Link to="/Add-Course" className="btn btn-success btn-lg shadow">
          <i className="bi-plus-circle me-2"></i>Add New Course
        </Link>
      </div>

      {error && (
        <div className="alert alert-danger d-flex align-items-center">
          <i className="bi-exclamation-triangle-fill me-2"></i>
          <div>
            <strong>Error:</strong> {error}
          </div>
          <button 
            onClick={fetchCourses} 
            className="btn btn-sm btn-outline-light ms-auto"
          >
            Retry
          </button>
        </div>
      )}

      {isLoading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2 text-muted">Loading courses...</p>
        </div>
      ) : courses.length === 0 ? (
        <div className="card border-warning text-center shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-warning">No Courses Available</h5>
            <p className="card-text">Click the button below to refresh or add new courses.</p>
            <button onClick={fetchCourses} className="btn btn-outline-warning">
              <i className="bi-arrow-clockwise me-1"></i>Refresh
            </button>
          </div>
        </div>
      ) : (
        <div className="table-responsive shadow rounded">
          <table className="table table-hover table-bordered">
            <thead className="table-primary">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Duration</th> {/* New Column */}
                <th scope="col" className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td><span className="badge bg-secondary">{course.id}</span></td>
                  <td><strong>{course.title}</strong></td>
                  <td>{course.description}</td>
                  <td><span className="text-success">${course.price}</span></td>
                  <td>{course.validation ?? "N/A"}</td> 
                 <td className="text-center">
  <div className="d-flex justify-content-center">
    <Link to={`/edit-course/${course.id}`} className="btn btn-warning btn-sm me-2">
      <i className="bi bi-pencil-fill me-1"></i>Edit
    </Link>
    <button
      onClick={() => deleteCourse(course.id)}
      className="btn btn-danger btn-sm"
      disabled={isLoading}
    >
      <i className="bi bi-trash-fill me-1"></i>Delete
    </button>
  </div>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CourseList;
