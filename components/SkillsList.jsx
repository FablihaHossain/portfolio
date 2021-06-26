import React from 'react';
import styled from '@emotion/styled';
import { ListGroup, ListGroupItem } from 'reactstrap';

const TheList = styled(ListGroup)({
    marginBottom: '8px !important',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'unset'
});

const CategoryBlock = styled(ListGroupItem)({
    backgroundColor: '#ffccff',
    borderColor: 'black',
    width: '150px',
    padding: '0.75rem 0.50rem',
    fontFamily: 'Newsreader, serif',
});

const SkillBlock = styled(ListGroupItem)({
    backgroundColor: 'transparent',
    borderColor: 'black',
    width: '130px',
    padding: '0.75rem 0.50rem',
    textAlign: 'center',
    fontFamily: 'Newsreader, serif',
});

export default function SkillsList({ category, list }) {
    return (
        <TheList horizontal>
            <CategoryBlock> {category}: </CategoryBlock>
            {list.map(element => (
                <SkillBlock> {element}</SkillBlock>
            ))}
        </TheList>
    )
};