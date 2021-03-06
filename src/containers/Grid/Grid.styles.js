import styled from 'styled-components';

const GridStyles = styled.div`
    line-height: 0;
    -webkit-column-count: 3;
    -webkit-column-gap:   0px;
    -moz-column-count:    3;
    -moz-column-gap:      0px;
    column-count:         3;
    column-gap:           8px;

    & .image-src {
        width: 100% !important;
        height: auto !important;
        margin-top: 8px;
        vertical-align: middle;
        color: transparent;
    }

    @media (max-width: 1200px) {
        -moz-column-count:    3;
        -webkit-column-count: 3;
        column-count:         3;
      }

    @media (max-width: 1000px) {
        -moz-column-count:    3;
        -webkit-column-count: 3;
        column-count:         3;
    }

    @media (max-width: 800px) {
        -moz-column-count:    2;
        -webkit-column-count: 2;
        column-count:         2;
    }

    @media (max-width: 400px) {
        -moz-column-count:    1;
        -webkit-column-count: 1;
        column-count:         1;
    }
`;

export default GridStyles;