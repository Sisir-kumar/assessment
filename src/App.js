import React, { useState} from 'react';
import './App.css';
import axios from 'axios'
import Favarite from './Favarite';
//import Movie from './Movie';
function App (){
 const [all, setAll] = useState([]);
 const [movies, setMovies] = useState([]);
//  const [series, setSeries] = useState({});
//  const [episodes, setEpisodes] = useState({});
 const [search, setSearch] = useState('')
 const [select, setSelect] = useState('')
 const [like, setLike] = useState(false)

 const submitValue =(e)=>{
   e.preventDefault()
    async function fetchData (){
        const request =await axios.get(`http://www.omdbapi.com/?apikey=62634223&type=${select}&s=${search}&y=${search}&i=${search}`)
        setMovies(request.data.Search)
        return request
    }
    fetchData();
 
 }
 const addWishlist =(s)=>{
   console.log(s)
 }

    return(
        <div className="App">
           <div className="nav__bar">
             <h4 className="nav__home">Home</h4>
             
           </div>
           <form className="search__item" onSubmit={submitValue}>
                <select defaultValue={select} onChange={(e)=>setSelect(e.target.value)}>
                 <option selected value="" selected>All</option>
                 <option value="movie">Movie</option>
                 <option value="series">Series</option>                 
                 <option value="episodes">Episodes</option>                 
               </select>
               <input type="text" value={search}  onChange={(e)=>setSearch(e.target.value)}/>
               <button type="submit">Search</button>
           </form>
         <div className="Cards">
              {!movies? "" :movies.map(movie=>{
               return (
                  <div className="card">
                    <img className="card__img" src={movie.Poster} alt={movie.Title} />
                    <div className="container">
                      <h4><b>{movie.Title} </b></h4> 
                      <p>{movie.Year} </p>
                     
                    </div>
                  </div>
              )
            })}
           </div>  
          
        </div>
      )
 
}
export default App;
