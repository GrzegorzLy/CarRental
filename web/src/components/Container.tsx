import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export default Container;
