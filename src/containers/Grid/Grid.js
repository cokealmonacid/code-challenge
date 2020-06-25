import React, {lazy, Suspense} from 'react';
import {Loading} from '../../components';

const GridStyles = lazy(() => import ('./Grid.styles'));
const Grid = props => {
    const {images} = props;
    return (
        <Suspense fallback={<Loading type="Oval" />}>
            <GridStyles>
                {
                    images.map((image, index) => (
                        <div className="image-item" key={index}>
                            <img data-url={image.urls.regular } alt="" className="image-src"/>
                        </div>
                    ))
                }
            </GridStyles>
        </Suspense>
    )
};

export default Grid;