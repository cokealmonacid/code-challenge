import React from 'react';
import GridStyles from './Grid.styles';

const Grid = props => {
    const {images} = props;
    return (
        <GridStyles>
            {
                images.map((image, index) => (
                    <div className="image-item" key={index}>
                        <img src={image.urls.regular} alt={image.alt_description} />
                    </div>
                ))
            }
        </GridStyles>
    )
};

export default Grid;