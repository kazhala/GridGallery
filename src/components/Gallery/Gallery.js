import React from 'react';
import UserGrid from '../Profile/UserGrid';
import { Link } from 'react-router-dom';
import { IMAGES } from '../Posts/ImagesDB';
import styled, { css } from 'styled-components';

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 305px);
    grid-gap: 20px;
    justify-content: center;
    grid-auto-rows: 305px;
    ${props =>
        props.cascade &&
        css`
            grid-auto-rows: 200px;
            grid-gap: 5px;
        `}
`;

const ImageLink = styled(Link)`
    background: no-repeat center/150% url(/img/${({ index }) => index}.jpeg);
    background-size: cover;
    :hover {
        opacity: 0.7;
    }
    ${props =>
        props.cascade &&
        css`
            &:nth-child(2n) {
                grid-row-start: span 2;
            }
        `}
`;

const LinkGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    grid-gap: 20px;
    margin-bottom: 20px;
`;

const TabLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #ccc;
    ${props => props.selected && 'color: black;'}
`;

function Gallery(props) {
    const cascade = props.location.search === '?type=cascade';
    return (
        <div>
            <UserGrid />
            <LinkGrid>
                <TabLink selected={!cascade} to={`${props.match.url}`}>
                    Square
                </TabLink>
                <TabLink
                    selected={cascade}
                    to={{
                        pathname: `${props.match.url}`,
                        search: 'type=cascade'
                    }}
                >
                    cascade
                </TabLink>
            </LinkGrid>
            <PhotoGrid cascade={cascade}>
                {IMAGES.map(i => (
                    <ImageLink
                        key={i.id}
                        cascade={cascade}
                        index={i.id}
                        to={{
                            pathname: `/img/${i.id}`,
                            // this is the trick!
                            state: { modal: true }
                        }}
                    ></ImageLink>
                ))}
            </PhotoGrid>
        </div>
    );
}

export default Gallery;
