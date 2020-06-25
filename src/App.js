import React, {useReducer, useRef} from 'react';
import { useFetch, useInfiniteScroll, useLazyLoading } from './customHooks'
import {Grid, Wrapper} from './containers';

function App() {

    const imageReducer = (state, action) => {
        switch (action.type) {
            case 'STACK_IMAGES':
                return {...state, images: state.images.concat(action.images)}
            case 'FETCHING_IMAGES':
                return {...state, fetching:action.fetching}
            default:
                return state;
        }
    }

    const pageReducer = (state, action) => {
        switch(action.type) {
            case 'ADVANCE_PAGE':
                return {...state, page: state.page + 1}
            default:
                    return state;
        }
    }

    const [imgData, imgDispatch] = useReducer(imageReducer,{ images:[], fetching: true});
    const [pager, pagerDispatch] = useReducer(pageReducer, { page: 1 });

    let bottomRef = useRef(null);
    useFetch(pager, imgDispatch);
    useLazyLoading('.image-src', imgData.images);
    useInfiniteScroll(bottomRef, pagerDispatch);

    return (
        <Wrapper>
            <h1>Unsplash Grid Gallery</h1>
            <Grid images={imgData.images} />
            <div id='page-bottom-boundary' style={{ border: '1px solid transparent' }} ref={bottomRef}></div>
        </Wrapper>
    );
}

export default App;