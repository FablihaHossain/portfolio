import React from 'react';
import styled from '@emotion/styled';

// Note: In order to reduce redundancy, some styles will be used from the animate.min.css and animate-hover.css 
// classes from the npm animate-hover installation. I will only be used emotion components to modify a select few
// elements

const OuterDiv = styled.div((props) => {
    const { circleWidth } = props;
    return {
        marginBottom: '1rem !important',
        position: 'relative',
        paddingRight: '15px',
        paddingLeft: '15px',
        display: 'inline-block',
        '@media (min-width: 1200px)': {
            width: circleWidth
        },
        '@media (max-width: 1199px)': {
            width: '20% !important'
        }
    }
});

const TestDiv = styled.div({
    borderColor: 'blue !important',
    borderRightColor: 'pink !important',
    borderBottomColor: 'black !important',
    borderWidth: '5px !important'
});

export default function SocialCircle({ logo, link, circleWidth }) {
    return (
        <OuterDiv circleWidth={circleWidth}>
            <a href={link}>
                <div className="ahvr-circle animated-box effect-rotate ">
                    <TestDiv className="spinner"></TestDiv>
                    <img className="img-fluid image" src={logo} alt="Avatar" />
                </div>
            </a>
        </OuterDiv>
    )
}