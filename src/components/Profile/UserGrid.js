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
`;

const Photo = styled.div`
    grid-area: photo;
`;

const Name = styled.div`
    grid-area: name;
    font-size: 35px;
`;

const Label = styled.div`
    grid-area: label;
`;

const Description = styled.div`
    grid-area: description;
    max-width: 400px;
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
                gastropub swag marfa tofu poutine skateboard ennui woke salvia
                8-bit everyday carry iceland. Flannel retro viral fanny pack
                kogi tbh chartreuse VHS shaman prism locavore cred twee jianbing
                lomo. Pickled brooklyn selvage banjo.
            </Description>
        </UserGridStyled>
    );
};

export default UserGrid;
