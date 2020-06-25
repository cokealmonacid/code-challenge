import React, {lazy, Suspense} from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import {Spin} from '../../components';

const GridStyles = lazy(() => import ('./Grid.styles'));

const options = {
    buttons: {
        showAutoplayButton: false,
        showDownloadButton: false,
        showFullscreenButton: false,
    },
    settings: {
        disablePanzoom: true,
        slideAnimationType: 'slide'
    },
    thumbnails: {
        showThumbnails: false,
    }
}

const Grid = props => {
    const {images} = props;
    return (
        <SRLWrapper options={options} images={images}>
            <Suspense fallback={<Spin />}>
                <GridStyles>
                    {
                        images.map((image, index) => (
                            <div className="image-item" key={index}>
                                    <img data-url={image.urls.small} alt={image.alt_description} className="image-src"/>
                            </div>
                        ))
                    }
                </GridStyles>
            </Suspense>
        </SRLWrapper>
    )
};

export default Grid;