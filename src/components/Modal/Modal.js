import React from 'react';
import { IMAGES } from '../Posts/index';
import { Image } from '../ImageComp/Image';
import styled, { createGlobalStyle } from 'styled-components';

const OverFlowHidden = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const ModalStyled = styled.div`
    position: absolute;
    background: #fff;
    top: ${props => props.top}px;
    left: 10%;
    right: 10%;
    padding: 15px;
    border: 2px solid #444;
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
            <OverFlowHidden />
            <ModalStyled top={window.scrollY + window.innerHeight / 2 - 250}>
                <h1>{image.title}</h1>
                <Image index={image.id} inModal />
                <button type="button" onClick={back}>
                    Close
                </button>
            </ModalStyled>
        </div>
    );
}

export default Modal;
