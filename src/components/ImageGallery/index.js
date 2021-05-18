import React from 'react';
import './index.css';
export default function ImageGallery({ images, loader }) {
    return (
        <>
            <div className="image-gallery">
                {images && images.length ? images.map((item, index) => {
                    return (<img key={index} className="images" tabIndex={0} src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt={'img' + index} />);
                })
                    : null}
            </div>
            <div className="loading" ref={loader}>
                <h2>Load More</h2>
            </div>
        </>
    )
}
