import React, { useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard.js";

export default function PhotoList() {
      const [photos, setPhotos] = useState([]);

      useEffect(() => {
            axios
               .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
               .then(result =>{
                     setPhotos(result.data);
               })
               .catch( err => {
                     console.log(err);
               });
      }, []);




      return(
            <div className = 'photos'>
                  <PhotoCard
                        title={photos.title}
                        description ={photos.explanation}
                        date={photos.date}
                        source={photos.hdurl}
                        id={photos.id}
                  />
            </div>
      );
}