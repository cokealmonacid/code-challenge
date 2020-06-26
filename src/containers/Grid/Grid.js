import React, {lazy, Suspense} from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import {Loading} from '../../components';

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
            <Suspense fallback={<Loading />}>
                <GridStyles>
                    {
                        images.map((image, index) => (
                            <div className="image-item" key={index}>
                                    <SRLWrapper options={options}>
                                        <img data-url={image.urls.small} alt={image.alt_description} className="image-src"/>
                                    </SRLWrapper>
                            </div>
                        ))
                    }
                </GridStyles>
            </Suspense>
    )
};

export default Grid;