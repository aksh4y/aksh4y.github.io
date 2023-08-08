import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RootState } from '../../store/myTypes';
import Portfolio from '../../types/portfolio';
import Socials from './socials';
import './style.scss';
import footer from '../../asset/images/footer.jpg';

const defaultFooterBg = footer;
export const Footer: React.FC<Portfolio> = (props) => {
    const footer = props.footer;
    const imagePath = footer.background
        ? 'img/' + footer.background
        : defaultFooterBg;
    const bgStyle = { backgroundImage: 'url(' + imagePath + ')' };

    return (
        <Container
            className="paralax-mf footer-paralax bg-image section-wrapper"
            style={bgStyle}
            fluid={true}
        >
            <div className="overlay-mf"></div>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <Socials list={[...footer.social]} />
                            <div className="copyright-box">
                                <p className="copyright">
                                    {footer.footerMessage}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Container>
    );
};

const mapStateToProps = (state: RootState) => {
    return state.portfolio;
};

export default compose(connect(mapStateToProps))(Footer);
