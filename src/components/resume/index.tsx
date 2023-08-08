import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RootState } from '../../store/myTypes';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import List from './list';
import Intro from './intro';
import Tool from '../../types/tool';
import Job from '../../types/job';
import styled from '@emotion/styled';
import Lottie from 'lottie-react';
import engineer from './../../asset/engineer.json';
import resumeGlimpse from './../../asset/resume_glimpse.json';
export interface ResumeProps {
    toolsHeadline: string;
    tools: Tool[];
    jobsHeadline: string;
    jobs: Job[];
}

const Technologies = styled.div`
    padding-top: 75px;
    display: flex;
    flex-wrap: wrap;
`;

const ResumeBadge = (
    <Badge
        pill
        bg="#dccd14"
        style={{
            background: '#dccd14',
            margin: '15px auto',
            padding: '10px',
            cursor: 'pointer',
            display: 'block',
            width: '200px',
        }}
        onClick={() =>
            window.open('https://akshaysadarangani.com/Resume.pdf', '_blank')
        }
    >
        <span style={{ color: 'white' }}>Download My Resume</span>
    </Badge>
);

export const Resume: React.FC<ResumeProps> = (props: any) => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);
    const isMobile = width <= 768;

    return (
        <Container className="section-wrapper">
            <Row id="about">
                <Col className="shadow-sm p-5 resume-bg">
                    <Row>
                        <Col md={6}>
                            <Lottie animationData={engineer} />
                            <Intro {...props} />
                            {!!!isMobile && <div>{ResumeBadge}</div>}
                            <Lottie animationData={resumeGlimpse} />
                        </Col>
                        <Col md={6}>
                            <List
                                headline={props.jobsHeadline}
                                list={props.jobs}
                                tag="job"
                            />
                            {!!isMobile && ResumeBadge}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <List
                                headline={props.toolsHeadline}
                                list={props.tools}
                                tag="tool"
                            />
                        </Col>
                        <Col md={6}>
                            <Technologies>
                                <div className="progressbar">
                                    <svg className="progressbar__svg">
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="45"
                                            className="progressbar__svg-circle circle-java shadow-java"
                                        >
                                            {' '}
                                        </circle>
                                    </svg>
                                    <span className="progressbar__text shadow-java">
                                        JAVA
                                    </span>
                                </div>

                                <div className="progressbar">
                                    <svg className="progressbar__svg">
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="45"
                                            className="progressbar__svg-circle circle-ts shadow-ts"
                                        >
                                            {' '}
                                        </circle>
                                    </svg>
                                    <span className="progressbar__text shadow-ts">
                                        TypeScript
                                    </span>
                                </div>

                                <div className="progressbar">
                                    <svg className="progressbar__svg">
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="45"
                                            className="progressbar__svg-circle circle-css shadow-css"
                                        >
                                            {' '}
                                        </circle>
                                    </svg>
                                    <span className="progressbar__text shadow-css">
                                        CSS
                                    </span>
                                </div>

                                <div className="progressbar">
                                    <svg className="progressbar__svg">
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="45"
                                            className="progressbar__svg-circle circle-node shadow-node"
                                        >
                                            {' '}
                                        </circle>
                                    </svg>
                                    <span className="progressbar__text shadow-node">
                                        Node.js
                                    </span>
                                </div>

                                <div className="progressbar">
                                    <svg className="progressbar__svg">
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="45"
                                            className="progressbar__svg-circle circle-react shadow-react"
                                        >
                                            {' '}
                                        </circle>
                                    </svg>
                                    <span className="progressbar__text shadow-react">
                                        React.js
                                    </span>
                                </div>
                                <div className="progressbar">
                                    <svg className="progressbar__svg">
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="45"
                                            className="progressbar__svg-circle circle-angular shadow-angular"
                                        >
                                            {' '}
                                        </circle>
                                    </svg>
                                    <span className="progressbar__text shadow-angular">
                                        Angular.js
                                    </span>
                                </div>
                            </Technologies>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state: RootState) => {
    return state.portfolio.resume;
};

export default compose(connect(mapStateToProps))(Resume);
