import React from 'react';
import { IMAGES } from '../Posts/ImagesDB';
import { Image } from '../ImageComp/Image';
import styled, { createGlobalStyle } from 'styled-components';
import { PostGrid, InfoGrid } from './PostGrid';
import { MiniUserGrid } from './MiniUserGrid';
import { ProfileImage } from '../Profile/ProfileImage';

const OverFlowHidden = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const ModalStyled = styled.div`
    position: absolute;
    background: #fff;
    top: ${props => props.top}px;
    left: 25%;
    right: 25%;
    border: 2px solid #444;
    width: 600px;
    @media (max-width: 990px) {
        left: 0;
        right: 0;
        width: auto;
    }
`;

function Modal({ match, history }) {
    let image = IMAGES[parseInt(match.params.id, 10) - 1];

    if (!image) return null;

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div
            onClick={back}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                height: '5000px',
                background: 'rgba(0, 0, 0, 0.8)'
            }}
        >
            <ModalStyled top={window.scrollY + window.innerHeight / 2 - 250}>
                <OverFlowHidden />
                <PostGrid>
                    <Image index={image.id} inModal />
                    <InfoGrid>
                        <MiniUserGrid>
                            <ProfileImage mini />
                            <h2>Lulu luuululu</h2>
                        </MiniUserGrid>
                        <div>
                            <h1> {image.title} </h1>
                        </div>
                        <div> 45 Likes </div>
                    </InfoGrid>
                </PostGrid>
            </ModalStyled>
        </div>
    );
}

export default Modal;
