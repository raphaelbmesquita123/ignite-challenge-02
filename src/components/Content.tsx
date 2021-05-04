import { useSideBar } from '../context/SideBarContext'
import { MovieCard } from './MovieCard'

export function Content() {
  const { movies } = useSideBar()

  return(
    <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
      </div>
  )
}