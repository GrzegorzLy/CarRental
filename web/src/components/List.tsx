import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { CarPosition } from '../types/CarPosition';

interface Props {
    coords: Array<CarPosition>;
    onFilter: (value: string) => void;
}

const Wrapper = styled.section`
    height: 100%;
    position: relative;
    min-width: 20rem;
    background-color: ${({ theme }): string => theme.colors.superLightGrey};
    @media (max-width: 480px) {
        height: 50%;
        overflow-y: scroll;
        min-width: 100%;
    }
`;

const Ul = styled.ul`
    padding-left: 0;
    @media (max-width: 480px) {
        padding-top: 0;
        margin-top: 0;
    }
`;

const Li = styled.li`
    list-style: none;
    padding: 1rem 0 1rem 1.5rem;
    &:hover {
        background-color: ${({ theme }): string => theme.colors.lightGrey};
    }
`;

const Header = styled.header`
    padding: 1rem;
    background-color: ${({ theme }): string => theme.colors.superLightGrey};

    @media (max-width: 480px) {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1;
    }
`;

const Input = styled.input`
    border: 0.0625rem solid ${({ theme }): string => theme.colors.lightGrey};
    border-radius: 0.25rem;
    padding: 0.8rem 1.2rem;
    width: 100%;
    outline: 0;
`;

const List: React.SFC<Props> = ({ coords, onFilter }): ReactElement => {
    return (
        <Wrapper>
            <Header>
                <Input placeholder="Filter by name" type="text" onChange={(e): void => onFilter(e.target.value)} />
            </Header>
            <Ul>
                {coords.map((c) => (
                    <Li key={c.id}>{c.brand}</Li>
                ))}
            </Ul>
        </Wrapper>
    );
};

export default List;
