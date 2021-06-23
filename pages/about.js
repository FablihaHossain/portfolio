import React from 'react';
import styled from '@emotion/styled';
import { Row } from 'reactstrap';
import Links from '../components/Links';

export default function About() {
    return (
        <>
            <p>about me</p>
            <Links
                isRow={true}
                circleWidth="10%"
            ></Links>
        </>
    )
}