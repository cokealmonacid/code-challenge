import { useEffect, useCallback, useRef, useState } from 'react';
import axios from 'axios';

export const useFetch = (data, dispatch, query) => {
    useEffect(() => {
        let url = !query.length ? 'https://api.unsplash.com/photos' : 'https://api.unsplash.com/search/photos';
        dispatch({type: 'FETCHING_IMAGES', fetching: true});
        axios.get(`${url}?page=${data.page}&per_page=10`, {
            headers: {
                Authorization: 'Client-ID OeiemucHc2MzlhUCC7ECik76nvJzSDIsIftKDDTP5so'
            },
            params: { query },
        })
        .then((response) => response.data)
        .then(images => query ? images.results : images)
        .then(images => {
            dispatch({type: 'STACK_IMAGES', images});
            dispatch({type: 'FETCHING_IMAGES', fetching: false});
        }).catch(e => {
            dispatch({ type: 'FETCHING_IMAGES', fetching: false })
            return e
        });
    }, [dispatch, data.page, query]);
}

export const useInfiniteScroll = (scrollRef, dispatch) => {
    const scrollObs = useCallback(
        node => {
            new IntersectionObserver(entries => {
                entries.forEach(en => {
                    if (en.intersectionRatio > 0) {
                        dispatch({type: 'ADVANCE_PAGE'});
                    }
                });
            }).observe(node);
        },
        [dispatch]
    );

    useEffect(() => {
        if (scrollRef.current) {
            scrollObs(scrollRef.current);
        }
    }, [scrollObs, scrollRef]);
}

export const useLazyLoading = (imgSelector, items) => {
    const imgObserver = useCallback(node => {
        const intObs = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (en.intersectionRatio > 0) {
                    const currentImg = en.target;
                    const newImg = currentImg.dataset.url;
                    if (newImg) {
                        currentImg.src = newImg;
                    }

                    intObs.unobserve(node);
                }
            });
        });
        intObs.observe(node);
    }, []);

    const imagesRef = useRef(null);

    useEffect(() => {
        imagesRef.current = document.querySelectorAll(imgSelector);
        if (imagesRef.current) {
            imagesRef.current.forEach(img => imgObserver(img));
        }
    }, [imagesRef, imgObserver, imgSelector, items]);
}

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [mountedComponent, setMountedComponent] = useState(false)
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
        setMountedComponent(true);
    }, []);
    return [theme, themeToggler, mountedComponent];
};