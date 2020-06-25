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
        <Suspense fallback={<Spin />}>
            <SRLWrapper options={options}>
                <GridStyles>
                    {
                        images.map((image, index) => (
                            <div className="image-item" key={index}>
                                    <img data-url={image.urls.regular } alt={image.alt_description} className="image-src"/>
                            </div>
                        ))
                    }
                </GridStyles>
            </SRLWrapper>
        </Suspense>
    )
};

export default Grid;