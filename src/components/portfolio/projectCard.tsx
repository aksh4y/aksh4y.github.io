import React from 'react'
import Card from 'react-bootstrap/Card'
import sampleImage from '../../img/sample.png'
import Project from '../../types/project'

export const ProjectCard: React.FC<Project> = props => {
    const imagePath: string = props.image ? props.image : sampleImage

    return (
        <Card className="shadow-sm no-border full-height">
            <Card.Img variant="top" src={imagePath} alt={props.title} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.summary}</Card.Text>
                {props.links &&
                    props.links.map((link, i) => (
                        <Card.Link
                            key={i}
                            href={link.url}
                            target="_blank"
                            style={{
                                textDecoration: 'underline',
                                color: '#17a2b8',
                                position: 'absolute',
                                bottom: '20px',
                            }}
                        >
                            {link.label}
                        </Card.Link>
                    ))}
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
