import React, { useEffect, useRef, useState } from 'react';
import ImageGallery from './components/ImageGallery';
import SearchBar from './components/SearchBar';
import './index.css';

function App() {
    const [searchImage, setSearchImage] = useState("");
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(0);
    const loader = useRef(null);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    };

    useEffect(() => {

        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };

        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }

    }, []);


    useEffect(() => {
        const link = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&text=${searchImage}&media=photos&per_page=12&page=${page}&format=json&nojsoncallback=1`;
        fetch(link)
            .then(res => res.json())
            .then(
                (result) => {
                    const newPhotos = images.concat(result.photos.photo);
                    setImages(newPhotos);
                },
                (error) => {
                    alert(error);
                }
            )
    }, [page, setImages]);

    useEffect(() => {
        const link = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&text=${searchImage}&media=photos&per_page=12&page=${page}&format=json&nojsoncallback=1`;
        fetch(link)
            .then(res => res.json())
            .then(
                (result) => {
                    setImages(result.photos.photo);
                },
                (error) => {
                    alert(error);
                }
            )
    }, [searchImage, setImages]);

    return (
        <div>
            <h1 className="app-name">Image Grid</h1>
            <SearchBar setSearchImage={setSearchImage} />
            <ImageGallery images={images} loader={loader} />
        </div>
    )
}

export default App;