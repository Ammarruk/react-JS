// Assigment 6
// Movie List App using Component Hierarchy
// import "./ProductList.css"
import type { MovieStructure } from './Movie-Structure';
import "./Movie-card.css"
import MovieCard from "./Movie-cards";

function MovieList() {
  let movieList: MovieStructure[] = [
    {
      title: "Dhoom",
      poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTpJl99idsneOHgUWkhsxcgaaOPa8Crkwtiuvn14c0PeKvoYSxd&psig=AOvVaw3Ar29KSTFxnRez9DfEYQHC&ust=1747398091372000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDvoqe7pY0DFQAAAAAdAAAAABAE",
      rating: 5.2,
      overview: "A fearless cop and a daring thief clash in a high-speed chase of bikes, brains, and betrayal across the city streets.",
    },
    {
      title: "Dangal",
      poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQMCj20Dhxm40PDsgiS1lMZaNj8lepMfMv9zn3LsbwLWu2ovzUk&psig=AOvVaw0sEJU0qwNNwAekOabq8794&ust=1747400038440000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOj01MfCpY0DFQAAAAAdAAAAABAE",
      rating: 9.5,
      overview: "A determined father trains his daughters against all odds to rise from a small village to wrestling glory on the world stage.",
    },
    {
      title: "3 Idiots",
      poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQV7sONOx4fl1xq9CbdWUmcTamWwzrPMzqKhZOGHh-V0zHpn0Ly&psig=AOvVaw3kTU2dPZTA8Ef_uJ01nCPB&ust=1747400175749000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLCeoInDpY0DFQAAAAAdAAAAABAV",
      rating: 8.5,
      overview: "Three friends navigate pressure, passion, and purpose as they challenge the norms of the education system in pursuit of true success.",
    }
    ,
    {
      title: "PK",
      poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11290399_p_v8_ad.jpg",
      rating: 8.1,
      overview: "An innocent alien questions human beliefs and traditions as he searches for his lost remote on Earth.",
    },
  ];


  return (
    <section className='my-4 py-2'>
      <h2 className='text-dark text-center bg-primary border border-dark'>Movies</h2>
      <div className="container">
        <div className="row g-4">
          {
            movieList.map((movieCard) => (
              <MovieCard title={movieCard.title} poster={movieCard.poster} rating={movieCard.rating} overview={movieCard.overview} />
            ))}
        </div>

      </div>
    </section>
  );
}

export default MovieList;