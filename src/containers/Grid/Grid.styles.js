import styled from 'styled-components';

const GridStyles = styled.div`
    display:grid;
    grid-gap:10px;
    grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
    grid-auto-rows:minmax(50px,auto);

    .item:nth-child(5n){
        grid-column-end:span 2;
    }
`;

export default GridStyles;