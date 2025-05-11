import React, { useState, useEffect } from "react";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]); // State to store movie data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY");
          
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        setMovies(data.results); // Update state with movie list
      } catch (error) {
        setError(error.message); // Store error message
      } finally {
        setLoading(false); // Hide loading indicator after fetch
      }
    };

    fetchMovies(); // Call the async function
  }, []); // Runs only once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
