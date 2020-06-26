import React, {useReducer, useRef, useState} from 'react';
import { useFetch, useInfiniteScroll, useLazyLoading } from './customHooks';
import {ThemeProvider} from "styled-components";
import { light, dark } from "./Themes"
import GlobalStyles from './GlobalStyles';
import {Grid, Wrapper} from './containers';
import {NoContent, Search, Title, Toggle} from './components';

function App() {

    const imageReducer = (state, action) => {
        switch (action.type) {
            case 'STACK_IMAGES':
                return {...state, images: state.images.concat(action.images), success: true}
            case 'FETCHING_IMAGES':
                return {...state, fetching:action.fetching}
            case 'CLEAN_IMAGES':
                return { ...state, images:[], fetching: true};
            default:
                return state;
        }
    }

    const pageReducer = (state, action) => {
        switch(action.type) {
            case 'ADVANCE_PAGE':
                return {...state, page: state.page + 1};
            case 'CLEAN_PAGE':
                return {...state, page: 1};
            default:
                    return state;
        }
    }

    const [query, setQuery] = useState('');
    const [theme, setTheme] = useState('light');
    const [imgData, imgDispatch] = useReducer(imageReducer,{ images:[], fetching: true});
    const [pager, pagerDispatch] = useReducer(pageReducer, { page: 1 });

    let bottomRef = useRef(null);
    useFetch(pager, imgDispatch, query);
    useLazyLoading('.image-src', imgData.images);
    useInfiniteScroll(bottomRef, pagerDispatch);

    function _handleClick(query) {
        imgDispatch({type: 'CLEAN_IMAGES'});
        pagerDispatch({type: 'CLEAN_PAGE'});
        setQuery(query);
    }

    function _handleThemeToggler() {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    let content = <><Grid images={imgData.images} /><div style={{ border: '1px solid transparent' }} ref={bottomRef}></div></>;
    if (!imgData.images.length && imgData.success) {
        content = <NoContent />;
    }

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <>
            <GlobalStyles />
            <Wrapper>
                <Toggle onChange={() => _handleThemeToggler()}/>
                <Title>Unsplash Grid Gallery</Title>
                <Search onSearch={value => _handleClick(value)} allowClear/>
                {content}
            </Wrapper>
            </>
        </ThemeProvider>
    );
}

export default App;