import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = ({type}) => (
    <Loader
        type={type}
        color="#FFF"
        height={50}
        wdith={50}
    />
);

export default Loading;