import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Grid, Wrapper} from './containers';

function App() {
    const [images, setImages] = useState([]);
    const fetchImages = async() => {
        const response = await axios.get('https://api.unsplash.com/photos', {
            headers: {
                Authorization: 'Client-ID OeiemucHc2MzlhUCC7ECik76nvJzSDIsIftKDDTP5so'
            }
        });
        setImages(response.data);
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <Wrapper>
            <h1>Unsplash Grid Gallery</h1>
            <Grid images={images} />
        </Wrapper>
    );
}

export default App;