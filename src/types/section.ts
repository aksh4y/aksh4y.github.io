import Project from './project'

export default interface Section {
    id: string
    menu: string
    headline: string
    subhead?: string
    innerHtlm?: string
    previewLink?: string
    sources?: string
    description?: string
    projects?: Project[]
}
