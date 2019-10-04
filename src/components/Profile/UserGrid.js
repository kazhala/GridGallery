import React from 'react';
import styled from 'styled-components';
import { ProfileImage } from './ProfileImage';

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    grid-template-areas:
        'photo name'
        'photo label'
        'photo description';
    @media (max-width: 990px) {
        grid-template-areas:
            'photo name'
            'label .'
            'description description';
        grid-gap: 15px;
    }
`;

const Photo = styled.div`
    grid-area: photo;
`;

const Name = styled.div`
    grid-area: name;
    font-size: 35px;
    align-self: center;
`;

const Label = styled.div`
    grid-area: label;
    @media (max-width: 990px) {
        padding-left: 25px;
    }
`;

const Description = styled.div`
    grid-area: description;
    max-width: 400px;
    @media (max-width: 990px) {
        padding-left: 25px;
    }
`;

const UserGrid = props => {
    return (
        <UserGridStyled>
            <Photo>
                <ProfileImage />
            </Photo>
            <Name>Luuuu Lululu</Name>
            <Label>
                <strong>400 </strong>
                followers
            </Label>
            <Description>
                VHS four dollar toast small batch viral biodiesel celiac. Yr
                knausgaard roof party vegan, literally tbh crucifix taxidermy
                wolf four loko air plant cliche fingerstache. Shaman locavore
                vexillologist taiyaki lomo chambray. Church-key organic tbh,
                gastropub swag marfa tofu poutine skateboard ennui woke salvia.
            </Description>
        </UserGridStyled>
    );
};

export default UserGrid;
