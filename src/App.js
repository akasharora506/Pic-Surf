import React, { useEffect, useState } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
    const [searchImage, setSearchImage] = useState("");
    const [images, setImages] = useState({});

    useEffect(() => {
        const link = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&text=${searchImage}&media=photos&per_page=12&page=1&format=json&nojsoncallback=1`;
        fetch(link)
            .then(res => res.json())
            .then(
                (result) => {
                    setImages(result.photos);
                },
                (error) => {
                    alert(error);
                }
            )
    }, [searchImage])


    return (
        <div>
            <SearchBar setSearchImage={setSearchImage} />
            <ImageGallery images={images} />
        </div>
    )
}

export default App;