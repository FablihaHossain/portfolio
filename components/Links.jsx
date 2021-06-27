import React from 'react';
import styled from '@emotion/styled';
import SocialCircle from './SocialCircle';
import { Row } from 'reactstrap';

const SocialRow = styled(Row)((props) => {
    const { isrow } = props;
    return {
        display: 'inline-flex',
        flexDirection: isrow ? 'row' : 'column',
        flexWrap: 'unset',
        justifyContent: 'center'
    }
});

const Links = ({ isRow, circleWidth }) => {
    return (
        <>
            <SocialRow isrow={isRow}>
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

export default Links;