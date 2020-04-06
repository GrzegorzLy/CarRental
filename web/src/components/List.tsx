import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    height: 100%;
    min-width: 20rem;
`;

const List: React.FC = (): ReactElement => {
    return <Wrapper>Hello</Wrapper>;
};

export default List;
