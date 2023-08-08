import React from 'react';
import Badge from 'react-bootstrap/Badge';

export interface JobProps {
    timeframe: string;
    title: string;
    company: string;
    summary: string;
    current?: boolean;
}

const createMarkup = (content: string) => {
    return { __html: content };
};

export const Job: React.FC<JobProps> = (props) => {
    const variant = props.current ? 'success' : 'dark';
    const badgeStyle = props.current ? 'bg-success' : 'bg-medium';
    return (
        <React.Fragment>
            <Badge bg={variant} className={`${badgeStyle} badge float-right`}>
                {props.timeframe}
            </Badge>
            <h5>
                {props.title} -{' '}
                <span className="font-weight-normal">{props.company}</span>
            </h5>
            <p
                className="font-weight-light"
                dangerouslySetInnerHTML={createMarkup(props.summary)}
            />
        </React.Fragment>
    );
};

export default Job;
