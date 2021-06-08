import React from 'react';
import styled from '@emotion/styled';

const TopSection = styled.div({
    transition: 'top 400ms, box-shadow 200ms, transform 300ms',
    transitionTimingFunction: 'ease-in-out',
    backgroundColor: 'red',
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    zIndex: '2',
    height: '50%',

    '&:before': {
        position: 'absolute',
        marginLeft: '-20px',
        fontSize: '35px',
        display: 'block',
        color: '#4099FF',
        content: '""',
        width: '0px',
        height: '20px',
        left: '52%',
        top: '5px'
    },
    top: '0%',
    left: '0px'
});

const BottomSection = styled.div({
    transition: 'top 400ms, box-shadow 200ms, transform 300ms',
    transitionTimingFunction: 'ease-in-out',
    backgroundColor: 'green',
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    zIndex: '2',
    height: '50%',

    '&:before': {
        position: 'absolute',
        marginLeft: '-20px',
        fontSize: '35px',
        display: 'block',
        color: '#4099FF',
        content: '""',
        width: '0px',
        height: '20px',
        left: '52%',
        top: '-20px'
    },
    top: '50%',
    left: '0px'
});

const OuterBox = styled.div({
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-100px',
    marginTop: '-25px',
    width: '200px',
    height: '50px',
    boxShadow: 'inset -7px 0px 12px -8px rgba(0,0,0,0.3), inset 7px 0px 12px -8px rgba(0,0,0,0.3)',
    background: 'rgba(0,0,0,0.3)',
    transition: 'background 400ms ease-in-out',
    '&:hover': {
        background: '#fff',
        transform: 'scale(1.08)',
        boxShadow: '0px 0px 10px -2px rgba(0,0,0,0.4)'
    },
    '&:hover::${TopSection}':
    {
        color: 'black'
    },
    '&:hover::${BottomSection}': {
        color: 'pink'
    }
});

export default function Links() {
    return (
        <>
            <OuterBox>
                <TopSection></TopSection>
                <BottomSection></BottomSection>
                <p>
                    peek a boo
                </p>
            </OuterBox>
        </>
    )
}

// Credit to https://codepen.io/anon/embed/BLeJs?height=500&theme-id=1&slug-hash=BLeJs&default-tab=result#html-box