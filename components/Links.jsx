import React from 'react';
import styled from '@emotion/styled';
import SocialCircle from './SocialCircle';
import { Row, Container } from 'reactstrap';

const SocialRow = styled(Row)((props) => {
    const { isRow } = props;
    return {
        display: 'inline-flex',
        flexDirection: isRow ? 'row' : 'column',
        flexWrap: 'unset',
        justifyContent: 'center'
    }
});

export default function Links({ isRow, circleWidth }) {
    return (
        <>
            <SocialRow isRow={isRow}>
                <SocialCircle
                    logo="/Images/githubLogo.png"
                    link="https://www.github.com/fablihahossain"
                    circleWidth={circleWidth}
                ></SocialCircle>

                <SocialCircle
                    logo="/Images/linkedinLogo.png"
                    link="https://www.linkedin.com/in/fablihahossain"
                    circleWidth={circleWidth}
                ></SocialCircle>

                <SocialCircle
                    logo="/Images/instagramLogo.jpeg"
                    link="https://www.instagram.com/fabliha27"
                    circleWidth={circleWidth}
                ></SocialCircle>

                <SocialCircle
                    logo="/Images/twitterLogo.png"
                    link="https://www.twitter.com/fabliha27"
                    circleWidth={circleWidth}
                ></SocialCircle>
            </SocialRow>
        </>
    )
}