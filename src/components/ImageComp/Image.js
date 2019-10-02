import styled, { css } from 'styled-components';

export const Image = styled.div`
    width: 305px;
    height: 305px;
    background: no-repeat center/150% url(/img/${({ index }) => index}.jpeg);
    ${props =>
        !props.inModal &&
        css`
            :hover {
                opacity: 0.7;
            }
        `}
`;
