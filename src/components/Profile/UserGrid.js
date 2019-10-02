import React from 'react';
import styled from 'styled-components';

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
`;

const UserGrid = props => {
    return <UserGridStyled>User Grid</UserGridStyled>;
};

export default UserGrid;
