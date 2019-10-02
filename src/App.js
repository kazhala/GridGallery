import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import UserGrid from './components/Profile/UserGrid';

// This example shows how to render two different screens
// (or the same screen in a different context) at the same URL,
// depending on how you got there.
//
// Click the colors and see them full screen, then "visit the
// gallery" and click on the colors. Note the URL and the component
// are the same as before but now we see them inside a modal
// on top of the old screen.

export default function ModalGalleryExample() {
    return (
        <Router>
            <Route component={ModalSwitch} />
        </Router>
    );
}

class ModalSwitch extends Component {
    // We can pass a location to <Switch/> that will tell it to
    // ignore the router's current location and use the location
    // prop instead.
    //
    // We can also use "location state" to tell the app the user
    // wants to go to `/img/2` in a modal, rather than as the
    // main page, keeping the gallery visible behind it.
    //
    // Normally, `/img/2` wouldn't match the gallery at `/`.
    // So, to get both screens to render, we can save the old
    // location and pass it to Switch, so it will think the location
    // is still `/` even though its `/img/2`.
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        let { location } = this.props;

        // set previousLocation if props.location is not modal
        if (
            nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location;
        }
    }

    render() {
        let { location } = this.props;

        let isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        ); // not initial render

        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/img/:id" component={ImageView} />
                </Switch>
                {isModal ? <Route path="/img/:id" component={Modal} /> : null}
            </div>
        );
    }
}

const Image = styled.div`
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

const IMAGES = [
    { id: 1, title: 'trash Tree' },
    { id: 2, title: 'blue sky' },
    { id: 3, title: 'girl in water' },
    { id: 4, title: 'white city' },
    { id: 5, title: 'blur water' },
    { id: 6, title: 'cool girl' },
    { id: 7, title: 'beach view' },
    { id: 8, title: 'bird view' },
    { id: 9, title: 'small town' },
    { id: 10, title: 'water dropping' },
    { id: 11, title: 'water fall' },
    { id: 12, title: 'cool door' }
];

function Home() {
    return (
        <div>
            <Link to="/gallery">Visit the Gallery</Link>
            <h2>Featured Images</h2>
            <ul>
                <li>
                    <Link to="/img/2">Tomato</Link>
                </li>
                <li>
                    <Link to="/img/4">Crimson</Link>
                </li>
            </ul>
        </div>
    );
}

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 305px);
    grid-gap: 20px;
    justify-content: center;
`;

function Gallery() {
    return (
        <div>
            <UserGrid />
            <PhotoGrid>
                {IMAGES.map(i => (
                    <Link
                        key={i.id}
                        to={{
                            pathname: `/img/${i.id}`,
                            // this is the trick!
                            state: { modal: true }
                        }}
                    >
                        <Image index={i.id} />
                    </Link>
                ))}
            </PhotoGrid>
        </div>
    );
}

function ImageView({ match }) {
    let image = IMAGES[parseInt(match.params.id, 10) - 1];

    if (!image) return <div>Image not found</div>;

    return (
        <div>
            <h1>{image.title}</h1>
            <Image index={image.id} />
        </div>
    );
}

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
                background: 'rgba(0, 0, 0, 0.15)'
            }}
        >
            <div
                className="modal"
                style={{
                    position: 'absolute',
                    background: '#fff',
                    top: 25,
                    left: '10%',
                    right: '10%',
                    padding: 15,
                    border: '2px solid #444'
                }}
            >
                <h1>{image.title}</h1>
                <Image index={image.id} inModal />
                <button type="button" onClick={back}>
                    Close
                </button>
            </div>
        </div>
    );
}
