import React from 'react';
import ContactMenu from '../../components/ContactMenu';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
    return (
        <Container fluid="md">
            <Row className='mt-5 about-row'>
                <Col xs={12} lg={6}>
                    <ContactMenu />
                </Col>
                <Col xs={12} lg={6}>
                    {/* <AboutIntro /> */}
                </Col>
            </Row>
        </Container>

    )
}