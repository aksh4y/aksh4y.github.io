import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TitleBox from '../titleBox';
import email from './../../asset/email.json';
import Lottie from 'lottie-react';
import { Widget } from '@typeform/embed-react';

export const ContactSection: React.FC = () => {
    return (
        <Container>
            <Row id="contact" className="text-center">
                <Col lg>
                    <Widget
                        id="ysaTlC"
                        style={{ width: '100%', height: '500px' }}
                    />
                </Col>
                <Col lg>
                    <Lottie animationData={email} />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactSection;
