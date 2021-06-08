import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

export default function Experience() {
    return (
        <>
            <ExperienceCard job={'the first job'} details={'blah'}></ExperienceCard>
            <ExperienceCard job={'the second job'} details={'blah blah'}></ExperienceCard>
            <ExperienceCard job={'the third job'} details={'blah blah blah'}></ExperienceCard>
        </>
    )
}