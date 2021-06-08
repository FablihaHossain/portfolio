import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Collapse, Card, CardBody } from 'reactstrap';

export default function ExperienceCard({ job, details }) {
    const [open, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!open);
    return (
        <>
            <Button onClick={toggle}> {job} </Button>
            <Collapse isOpen={open} >
                <Card>
                    <CardBody>{details}</CardBody>
                </Card>
            </Collapse>
        </>
    )
}