import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Featured.scss'
function Featured({ type }) {
  const [content, setcontent] = useState({})
 
 useEffect(() => {
  
   const getRandomeMoive = async () => {
     try {
       const res = await axios.get(`/movie/random?type=${type}`, {
                 headers: {
                     token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWY0MWU2MTQ4ZTFkNGUzNzMxMzc2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTcwNzQzOSwiZXhwIjoxNjMwMTM5NDM5fQ.huPVkkwEQ2UteM9VAV7Lif4q2mLcM3UNbVOSqcNrr_A"
                 }
       })
       setcontent(res.data[0])
       console.log(res.data)
     } catch (error) {
       console.log(error)
     }
   }
   getRandomeMoive();
 }, [type])

  console.log(content?._id)
    return (

        <div className="featured">
          {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
            <img src={content?.image} alt="" />
            <div className="info">
                <img src={content?.imageTitle} alt="" />
                <span className="desc">
                   {content?.desc}
                </span>
                <div className="buttons">
          <button className="paly"><PlayArrow/> <span>Play</span></button>
          <button className="more"><InfoOutlined/> <span>Info</span></button>
                </div>
            </div>
        </div>
    )
}

export default Featured
