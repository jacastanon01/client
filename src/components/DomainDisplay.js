import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export const DomainDisplay = ({ created, expires, domainName }) => {
    return (
        
        <ListGroup variant='flush'>
            <ListGroup.Item>Domain: {domainName} </ListGroup.Item>
            <ListGroup.Item>Created: {created}</ListGroup.Item>
            <ListGroup.Item>Expires: {expires}</ListGroup.Item>
        </ListGroup>
    )
}