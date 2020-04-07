import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { CarPosition } from '../types/CarPosition';

interface Props {
    coords: Array<CarPosition>;
    onFilter: (value: string) => void;
}

const Wrapper = styled.section`
    height: 100%;
    min-width: 20rem;
    background-color: ${({ theme }): string => theme.colors.superLightGrey};
`;

const Ul = styled.ul`
    padding-left: 1rem;
`;

const Li = styled.li`
    list-style: none;
    padding: 1rem;
`;

const Header = styled.header`
    padding: 1rem;
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
