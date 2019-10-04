import styled, { css } from 'styled-components';

export const Image = styled.div`
    width: 305px;
    height: 305px;
    background: no-repeat center/150% url(/img/${({ index }) => index}.jpeg);
    @media (max-width: 990px) {
        width: 100%;
        background: no-repeat center/80% url(/img/${({ index }) => index}.jpeg);
        background-size: cover;
    }
    ${props =>
        !props.inModal &&
        css`
            :hover {
                opacity: 0.7;
            }
        `}
`;
