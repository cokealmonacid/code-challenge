import { useEffect, useCallback, useRef } from 'react';
import axios from 'axios';

export const useFetch = (data, dispatch) => {
    useEffect(() => {
        dispatch({type: 'FETCHING_IMAGES', fetching: true});
        axios.get(`https://api.unsplash.com/photos?page=${data.page}&per_page=10`, {
            headers: {
                Authorization: 'Client-ID OeiemucHc2MzlhUCC7ECik76nvJzSDIsIftKDDTP5so'
            }
        })
        .then((response) => response.data)
        .then(images => {
            dispatch({type: 'STACK_IMAGES', images});
            dispatch({type: 'FETCHING_IMAGES', fetching: false});
        }).catch(e => {
            dispatch({ type: 'FETCHING_IMAGES', fetching: false })
            return e
        });
    }, [dispatch, data.page]);
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