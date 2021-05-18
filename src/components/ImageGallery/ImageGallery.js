import React from 'react';

export default function ImageGallery({ images }) {
    const { photo } = images;
    return (
        <div>
            {photo && photo.length ? photo.map((item, index) => {
                console.log(item);
                return (<img tabIndex={0} src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt={'img' + index} />);
            })
                : null}
        </div>
    )
}
