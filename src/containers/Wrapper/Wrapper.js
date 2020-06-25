import React from 'react';
import WrapperStyles from './Wrapper.styles';
import SimpleReactLightbox from 'simple-react-lightbox';

const Wrapper = props => (
    <SimpleReactLightbox>
        <WrapperStyles>{props.children}</WrapperStyles>
    </SimpleReactLightbox>
)

export default Wrapper;