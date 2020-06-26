import React from 'react';
import { Spin } from 'antd';
import LoadingStyles from './Loading.Styles';

const Loading = () => (
    <LoadingStyles>
        <Spin />
    </LoadingStyles>
);

export default Loading;