import React from 'react'
import './style.scss'

export interface TitleBoxProps {
    box?: string
    titleType?: string
    headline?: string
    subhead?: string
    innerHtml?: string
    previewLink?: string
    sources?: string
    description?: string
}

const createHtml = (str: string) => {
    return { __html: str }
}

export const TitleBox: React.FC<TitleBoxProps> = props => (
    <div className={props.box || 'title-box'}>
        <h3 className={props.titleType || 'title-a'}>{props.headline}</h3>
        <p className="subtitle-a">{props.subhead}</p>
        {props.innerHtml && (
            <p
                className="subtitle-b"
                dangerouslySetInnerHTML={createHtml(props.innerHtml)}
            />
        )}
        {props.previewLink && (
            <iframe
                title="akshay sadarangani"
                src={props.previewLink}
                height="175px"
                frameBorder={'0'}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *;"
                style={{
                    width: '100%',
                    maxWidth: '1024px',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    background: 'transparent',
                }}
            ></iframe>
        )}
        {props.sources && (
            <p
                className="sources"
                dangerouslySetInnerHTML={createHtml(props.sources)}
            />
        )}
        {props.description && (
            <blockquote
                className="subtitle-b"
                dangerouslySetInnerHTML={createHtml(props.description)}
            />
        )}
        <div className="line-mf"></div>
    </div>
)

export default TitleBox
