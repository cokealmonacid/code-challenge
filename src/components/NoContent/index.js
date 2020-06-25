import React from 'react';
import { Empty } from 'antd';
import NoContentStyles from './NoContent.styles';

const NoContent = () => (
    <NoContentStyles>
        <Empty description={'No se encontraron imágenes'}/>
    </NoContentStyles>
);

export default NoContent;