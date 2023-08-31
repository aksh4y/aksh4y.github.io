import Portfolio from '../../types/portfolio';
import news from './../../asset/images/news.jpg';

// this year - first job date - years spent in school and gap since
const yearsOfXp = new Date().getFullYear() - 2014 - 3;

export const initState: Portfolio = {
    meta: {
        title: 'Akshay Sadarangani - Software Engineer',
        description: `Hey there! I'm a software engineer with a passion for crafting top-notch code. With ${yearsOfXp}+ years of experience and an MS in Computer Science under my belt, I've tackled some pretty challenging projects and delivered results that have not only resulted in measurable improvement but have also directly led to millions of dollars in cost savings.`,
        showRepoLink: true,
    },
    menu: {
        home: 'Hello',
        about: 'Resume',
    },
    intro: {
        headline: 'Hi! My Name Is Akshay',
        typed: [
            'Engineer',
            'Disruptor',
            'Pioneer',
            'Gamer',
            'Mixologist',
            'Hiker',
            'Swimmer',
            'Festival Goer',
            'Cocktail Enthusiast',
            'Your Next Hire',
        ],
    },
    resume: {
        headline: `Hey there! I'm a software engineer with a passion for crafting top-notch code. With ${yearsOfXp}+ years of experience and an MS in Computer Science under my belt, I've tackled some pretty challenging projects and delivered results that have not only resulted in measurable improvement but have also directly led to millions of dollars in cost savings.`,
        summary: [
            'My skills in full-stack development and experience in Cloud, Database and Fintech allow me to come up with creative solutions that solve real-world problems.',
            "I'm always looking for new and innovative ways to improve my skillset, and I love staying up-to-date with the latest technologies.",
        ],
        jobsHeadline: 'Employment',
        jobs: [
            // {
            //     title: 'Senior Software Engineer',
            //     company: 'MongoDB',
            //     timeframe: 'Current',
            //     current: true,
            //     summary:
            //         'Created a NoAuth marketplace app for MongoDB integrations from scratch in React with TypeScript and Java hosting 20+ configurable, filterable and searchable integrations at launch increasing discoverability by 100%. Added a new connectivity option to the MongoDB Atlas integration for Vercel to support data transfer over HTTPS using RESTful Data API to add to the value proposition of DBaaS',
            // },
            {
                title: 'Software Engineer III',
                company: 'MongoDB',
                timeframe: 'Current',
                current: true,
                summary:
                    '<li>Created a NoAuth integrations marketplace app for MongoDB from scratch in React with TypeScript and Java hosting 20+ configurable, filterable and searchable integrations at launch increasing discoverability by 100%</li><li>Pioneered the development of a feature-rich NoAuth marketplace application for MongoDB integrations, utilizing React, TypeScript, and Java from the ground up. Hosting over 20 configurable, filterable, and searchable integrations, this visionary creation witnessed an awe-inspiring 100% increase in discoverability upon launch, revolutionizing the way users interacted with the platform</li><li>Forged a powerful collaboration with the Charts product and analytics teams to orchestrate a high-stakes A/B test experiment. The result? A real-time, interactive, and captivating Atlas Chart component that played a pivotal role in driving product awareness to unprecedented heights, boasting an extraordinary 138% increase in activation</li><li>Worked closely with product, marketing, and analytics to engineer and launch multiple complex A/A, A/B and MAB test experiments in React/Java to make improvements to the Atlas funnel and integrate Atlas front-end with back-end analytics systems</li><li>Elevate the core Atlas product by building new features and improving existing processes and driving them through the SDLC to completion, precisely and accurately, by making data-driven decisions</li>',
            },
            {
                title: 'Software Engineer II',
                company: 'Goldman Sachs',
                timeframe: '2020 - 2021',
                summary:
                    '<li>Conceptualized, proposed and led the development of a full stack web app using Node.js, React.js, Java and other in-house tools to automate fact card generation thereby saving the firm an estimated ~$1.5 million / year</li><li>Made design decisions and supervised the development work of 2 direct reportees for this React.js based app where the sales team can onboard business proposals to check for conflicts of interest</li><li>Was a buddy to 2 interns and Acclimation Mentor to a full-time analyst supporting their way into the firm</li>',
            },
            {
                title: 'Software Engineer I',
                company: 'Goldman Sachs',
                timeframe: '2019 - 2020',
                summary:
                    '<li>Interacted with users to design complex server-side code in Java to automate report generation saving 400+ days of work annually by onboarding 20+ reports over 6 months</li><li>Led the dev work and managed 4 support staff worldwide for handling daily / monthly posting of 1000+ ETFs and MFs to GSAM.com by retrieving, aggregating and implementing biz logic to financial data.</li><li>Successfully switched report rendering for 1000+ onshore funds from a 3rd party vendor to an in-house tool with 100% result match saving the firm ~$700,000 / year</li>',
            },
            {
                title: 'Analyst and Web Developer',
                company: 'VMware',
                timeframe: '2014 - 2016',
                summary:
                    '<li>Developed and supported MS SharePoint applications used company-wide by 20,000+ employees</li><li>Led the infrastructure upgrade of MS SharePoint from version 2013 to 2016 for 5 global teams</li>',
            },
        ],
        toolsHeadline: 'Skills',
        tools: [
            {
                name: 'Languages',
                list: 'Java, TypeScript / JavaScript ES6, Slang, SQL',
            },
            {
                name: 'Technologies',
                list: 'Spring MVC, Node.js, React.js, AngularJS, Express.js, jQuery, Git, npm',
            },
            {
                name: 'Cloud Platforms',
                list: 'AWS, Heroku, Google Cloud Platform',
            },
            {
                name: 'Databases',
                list: 'MongoDB, MySQL, Oracle, SQLite, Elasticsearch, AWS RDS',
            },
        ],
    },
    sections: [
        {
            id: 'portfolio',
            menu: 'Portfolio',
            headline: 'Portfolio',
            subhead: 'Projects that mattered',
            projects: [
                {
                    id: 'vercel',
                    title: 'Vercel MongoDB Integration',
                    summary:
                        'Using MongoDB Atlas with Vercel enables building new frontend applications faster with an intuitive and flexible data model and grow user apps with confidence.',
                    image: 'data:image/png;base64,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',
                    links: [
                        {
                            label: 'Check It Out',
                            url: 'https://vercel.com/integrations/mongodbatlas',
                        },
                    ],
                },
                {
                    id: 'ecosystem',
                    title: 'MongoDB Ecosystem',
                    summary:
                        'Build the best stack, make the most impact. We integrate with your favorite tools so you can spend more time building.',
                    image: 'https://raw.githubusercontent.com/aksh4y/aksh4y.github.io/27a3b9d8302864ffb5d2e72a1c952b6e95b8b950/src/asset/images/ecosystem.svg',
                    links: [
                        {
                            label: 'Check It Out',
                            url: 'https://cloud.mongodb.com/ecosystem',
                        },
                    ],
                },
                {
                    id: 'atlas',
                    title: 'MongoDB Atlas',
                    summary:
                        'MongoDB Atlas is a multi-cloud developer data platform. At its core is a fully managed cloud database for modern applications. Atlas is the best way to run MongoDB.',
                    image: 'https://raw.githubusercontent.com/aksh4y/aksh4y.github.io/27a3b9d8302864ffb5d2e72a1c952b6e95b8b950/src/asset/images/mongodb-atlas.png',
                    links: [
                        {
                            label: 'Check It Out',
                            url: 'https://cloud.mongodb.com/',
                        },
                    ],
                },
            ],
        },
        {
            id: 'podcast',
            menu: 'Podcast',
            headline: 'Podcast',
            innerHtlm: `I recently had an incredible opportunity of
            being featured on the
            <a
                href="https://www.mongodb.com/developer/podcasts/ep-99-exploring-growth-engineering-at-mongodb/"
                target="_blank"
                rel="noreferrer"
            >
                <strong>MongoDB</strong> Podcast
            </a>
            where I spoke about growth engineering and a
            little bit about my life in general. Follow
            along to learn more.`,
            previewLink:
                'https://embed.podcasts.apple.com/us/podcast/ep-99-exploring-growth-engineering-at-mongodb/id1500452446?i=1000551262281&itsct=podcast_box_player&itscg=30200&ls=1&theme=dark',
            sources: `<a
            href="https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLmxpYnN5bi5jb20vMjQ2ODE4L3Jzcw/episode/MDQ5Yjc2YzEtMDhhNS00ZDcyLWJkNjItYjc1MzIyNTU2MmMw"
            target="_blank"
            rel="noreferrer"
        >
            <svg width="148" height="30" fill="none">
                <title>Google podcasts</title>
                <path
                    fill="#B8C4C2"
                    d="M2.87 11.94c-.92 0-1.66.74-1.66 1.66v1.81a1.66 1.66 0 103.33 0V13.6c0-.92-.75-1.66-1.67-1.66zM26.17 11.94c-.92 0-1.67.74-1.67 1.66v1.81a1.66 1.66 0 103.33 0V13.6c0-.92-.74-1.66-1.66-1.66zM8.62 17.38c-.92 0-1.66.74-1.66 1.66v1.81a1.66 1.66 0 103.33 0v-1.81c0-.92-.75-1.66-1.67-1.66zM8.62 6.5c-.92 0-1.66.74-1.66 1.66v5.93a1.66 1.66 0 003.32 0V8.16c0-.92-.74-1.66-1.66-1.66zM20.42 6.5c-.92 0-1.67.74-1.67 1.66v1.81a1.66 1.66 0 103.33 0V8.16c0-.92-.74-1.66-1.66-1.66zM14.52 1.2c-.92 0-1.66.75-1.66 1.67v1.81a1.66 1.66 0 103.32 0v-1.8c0-.93-.74-1.67-1.66-1.67zM14.52 22.67c-.92 0-1.66.74-1.66 1.66v1.81a1.66 1.66 0 103.32 0v-1.81c0-.92-.74-1.66-1.66-1.66zM20.42 13.3c-.92 0-1.67.74-1.67 1.66v5.9a1.66 1.66 0 103.33 0v-5.9c0-.92-.74-1.66-1.66-1.66zM16.18 9.67a1.66 1.66 0 10-3.32 0V19.34a1.66 1.66 0 103.32 0V9.67zM89.64 24.78v-4.4H92c.6 0 1.16-.13 1.68-.4.5-.27.92-.65 1.22-1.14.31-.48.46-1.03.46-1.64 0-.62-.15-1.16-.46-1.65-.3-.49-.71-.87-1.22-1.14a3.52 3.52 0 00-1.68-.4h-3.62v10.77h1.26zm2.4-5.61h-2.4v-3.94h2.4a1.97 1.97 0 011.77 1.02 1.9 1.9 0 010 1.9 1.97 1.97 0 01-1.78 1.02zm7.55 5.85a3.88 3.88 0 003.95-4.08c0-.75-.17-1.44-.5-2.06a3.8 3.8 0 00-3.45-2.02 3.88 3.88 0 00-3.94 4.08c0 .75.17 1.44.5 2.06a3.79 3.79 0 003.44 2.02zm0-1.16a2.62 2.62 0 01-2.3-1.37 3.13 3.13 0 01-.38-1.55c0-.59.13-1.1.37-1.55a2.6 2.6 0 012.31-1.37 2.58 2.58 0 012.3 1.37c.25.44.37.96.37 1.55 0 .6-.12 1.11-.37 1.55a2.61 2.61 0 01-2.3 1.37zm8.48 1.16a3.1 3.1 0 002.64-1.37h.06v1.13h1.22V14h-1.28v3.17l.06 1.07h-.06a3.1 3.1 0 00-2.64-1.38c-.68 0-1.3.17-1.86.52-.55.35-1 .84-1.32 1.46a4.49 4.49 0 00-.48 2.1c0 .77.16 1.47.48 2.09.33.62.77 1.1 1.32 1.45.56.35 1.18.53 1.86.53zm.15-1.16c-.44 0-.86-.12-1.25-.36s-.7-.59-.94-1.03a3.22 3.22 0 01-.35-1.53c0-.57.11-1.08.35-1.53.24-.44.55-.79.94-1.03a2.35 2.35 0 012.5 0c.4.25.7.59.94 1.03.24.44.36.95.36 1.53 0 .58-.12 1.1-.36 1.54-.23.44-.54.78-.93 1.02s-.8.36-1.26.36zm8.86 1.16c.82 0 1.52-.2 2.1-.59.57-.39 1-.9 1.25-1.53l-1.14-.48c-.2.46-.48.81-.87 1.06a2.54 2.54 0 01-3.61-1.02 3.17 3.17 0 01-.35-1.52c0-.57.11-1.08.35-1.52.24-.44.55-.78.94-1.03.4-.24.81-.37 1.27-.37.53 0 .98.13 1.36.37.38.25.66.6.85 1.08l1.16-.48a3.17 3.17 0 00-1.21-1.55 3.64 3.64 0 00-2.1-.58c-.75 0-1.41.18-2 .53-.6.35-1.06.84-1.4 1.46-.32.62-.49 1.32-.49 2.1 0 .76.17 1.46.5 2.08a3.73 3.73 0 003.39 1.99zm6.9 0a2.88 2.88 0 002.5-1.34h.05v1.1h1.22v-4.86c0-.94-.3-1.69-.9-2.24a3.5 3.5 0 00-2.46-.82 3.9 3.9 0 00-1.75.4c-.53.26-.94.62-1.24 1.08l.96.72c.21-.33.5-.59.86-.77.36-.19.76-.28 1.19-.28.61 0 1.12.17 1.52.52.4.34.6.8.6 1.37v.47a3.33 3.33 0 00-.9-.35c-.4-.1-.83-.15-1.3-.15-.93 0-1.7.23-2.31.69-.62.45-.92 1.09-.92 1.9a2.43 2.43 0 001.38 2.23c.44.22.94.33 1.5.33zm.13-1.13c-.5 0-.9-.13-1.22-.4-.32-.25-.48-.6-.48-1.01 0-.47.17-.84.53-1.13.36-.3.89-.44 1.59-.44.4 0 .76.05 1.11.15.36.1.65.23.9.4a2.5 2.5 0 01-1.22 2.1c-.38.22-.78.33-1.21.33zm7.81 1.13a4 4 0 001.54-.29c.46-.19.83-.46 1.1-.82a2 2 0 00.4-1.24c0-.54-.19-1-.57-1.37a3.66 3.66 0 00-1.7-.85l-1.11-.3a2.63 2.63 0 01-1-.42.83.83 0 01-.33-.68c0-.3.16-.55.48-.75.31-.2.68-.3 1.1-.3.88 0 1.48.35 1.82 1.03l1.12-.51c-.22-.52-.6-.93-1.12-1.22a3.66 3.66 0 00-1.8-.44c-.51 0-1 .1-1.43.28-.44.18-.8.43-1.06.77-.27.34-.4.73-.4 1.17 0 .57.2 1.03.58 1.4.4.36.9.61 1.5.76l.94.24c.59.14 1.01.31 1.28.5.27.2.4.46.4.78 0 .36-.16.64-.5.84-.34.2-.75.29-1.24.29a2.2 2.2 0 01-1.24-.38 2.3 2.3 0 01-.85-1.06l-1.15.5c.24.6.63 1.1 1.18 1.49.55.39 1.24.58 2.06.58zm7.11-.12c.24 0 .44-.02.6-.05.15-.03.3-.08.45-.15v-1.25c-.27.17-.55.26-.84.26-.36 0-.64-.11-.83-.33-.16-.2-.24-.51-.24-.93v-4.19h1.87v-1.15h-1.87v-2.17h-1.28v2.17h-1.34v1.15h1.34v4.5c0 .36.05.67.15.92a1.86 1.86 0 001.12 1.07c.27.1.56.15.87.15zm5.18.12a4 4 0 001.54-.29c.46-.19.82-.46 1.1-.82a2 2 0 00.4-1.24c0-.54-.19-1-.57-1.37a3.66 3.66 0 00-1.7-.85l-1.12-.3a2.64 2.64 0 01-.99-.42.83.83 0 01-.33-.68c0-.3.16-.55.47-.75.32-.2.69-.3 1.1-.3.88 0 1.49.35 1.83 1.03l1.12-.51c-.22-.52-.6-.93-1.13-1.22a3.66 3.66 0 00-1.8-.44c-.5 0-.98.1-1.43.28-.44.18-.8.43-1.06.77s-.4.73-.4 1.17c0 .57.2 1.03.6 1.4.38.36.88.61 1.5.76l.93.24c.58.14 1 .31 1.28.5.27.2.4.46.4.78 0 .36-.16.64-.5.84-.35.2-.76.29-1.24.29a2.2 2.2 0 01-1.24-.38 2.3 2.3 0 01-.85-1.06l-1.15.5c.23.6.63 1.1 1.18 1.49.55.39 1.24.58 2.06.58zM69.5 17c.95 0 1.7.41 2.09.88h.06v-.64h1.66v7.1c0 2.92-1.72 4.12-3.76 4.12a3.77 3.77 0 01-3.51-2.34l1.5-.63c.28.64.93 1.4 2 1.4 1.3 0 2.1-.8 2.1-2.32V24h-.05c-.39.48-1.14.9-2.09.9a3.93 3.93 0 01-3.8-3.94 3.93 3.93 0 013.8-3.97zm-17.15.1a3.9 3.9 0 013.97 3.96 3.9 3.9 0 01-3.97 3.96 3.9 3.9 0 01-3.97-3.96 3.9 3.9 0 013.97-3.95zm8.66 0a3.9 3.9 0 013.97 3.96 3.9 3.9 0 01-3.97 3.96 3.9 3.9 0 01-3.97-3.96 3.9 3.9 0 013.97-3.95zm19.8 0c2.04 0 3.05 1.63 3.38 2.52l.18.45-5.3 2.19c.41.78 1.03 1.19 1.92 1.19.9 0 1.5-.43 1.96-1.09l1.35.9a3.96 3.96 0 01-3.3 1.76 3.87 3.87 0 01-3.93-3.96c0-2.35 1.7-3.95 3.74-3.95zm-38.72-4.44c1.87 0 3.2.74 4.21 1.7l-1.2 1.18a4.4 4.4 0 00-7.43 3.25 4.4 4.4 0 004.42 4.46c1.6 0 2.51-.64 3.1-1.23.48-.48.8-1.17.91-2.1H42.1v-1.68h5.65c.06.3.1.66.1 1.06a5.5 5.5 0 01-1.45 3.92 5.66 5.66 0 01-4.3 1.72 6.22 6.22 0 01-6.25-6.14c0-3.39 2.85-6.14 6.25-6.14zm34.14.47v11.62h-1.74V13.13h1.74zm-23.88 5.52c-1.21 0-2.24.97-2.24 2.4 0 1.42 1.04 2.4 2.24 2.4 1.2 0 2.23-.98 2.23-2.4 0-1.43-1.04-2.4-2.23-2.4zm8.66 0c-1.2 0-2.23.97-2.23 2.4 0 1.42 1.04 2.4 2.23 2.4 1.2 0 2.24-.98 2.24-2.4 0-1.43-1.03-2.4-2.24-2.4zm8.65-.1c-1.2 0-2.2 1.02-2.2 2.4 0 1.39 1 2.4 2.2 2.4 1.18 0 2.12-1 2.1-2.4 0-1.38-.92-2.4-2.1-2.4zm11.2.08c-.89 0-2.12.78-2.07 2.3l3.54-1.46c-.19-.5-.78-.84-1.47-.84zM41.06 8.81v-.83h-3.65V1.11h-1.02v7.7h4.67zm1.86-6.68c.2 0 .34-.06.44-.16.1-.1.14-.24.14-.4 0-.16-.05-.3-.14-.4-.1-.11-.25-.17-.44-.17s-.33.06-.43.17c-.1.1-.15.24-.15.4 0 .16.05.3.15.4.1.1.24.16.43.16zm.48 6.68V3.1h-.98V8.8h.98zm3.95.1c.65 0 1.18-.15 1.6-.46.4-.3.6-.71.6-1.23 0-.3-.07-.56-.21-.78-.15-.2-.38-.4-.68-.54-.3-.15-.7-.29-1.19-.4-.49-.1-.82-.22-1.01-.34a.6.6 0 01-.28-.53c0-.25.1-.46.3-.61.2-.16.48-.23.84-.23.34 0 .63.1.86.29.22.2.34.42.34.69h.98c0-.52-.2-.95-.6-1.28a2.4 2.4 0 00-1.58-.5c-.62 0-1.13.15-1.53.48-.4.32-.6.72-.6 1.19 0 .28.08.52.22.73.14.2.35.38.64.53.3.15.69.27 1.18.38.5.1.85.23 1.05.38.2.14.3.35.3.61 0 .25-.12.45-.34.6-.22.15-.52.23-.9.23-.4 0-.72-.1-.96-.29-.25-.2-.38-.45-.4-.78H45c0 .34.1.65.3.94.2.3.48.52.83.68.35.17.76.25 1.22.25zm5.42 0c.25 0 .5-.03.76-.1v-.8c-.2.05-.36.07-.47.07-.23 0-.4-.06-.49-.17-.1-.12-.14-.29-.14-.52V3.84h1.07V3.1h-1.07V1.7h-.98V3.1h-1.04v.75h1.04V7.4c0 .49.11.87.33 1.13.23.26.56.4 1 .4zm4.52 0a2.4 2.4 0 002.16-1.1l-.6-.46a2.2 2.2 0 01-.63.56 1.7 1.7 0 01-.88.2c-.48 0-.88-.17-1.2-.51-.32-.35-.48-.8-.5-1.37h3.89v-.4c0-.92-.21-1.62-.62-2.11-.42-.5-1-.74-1.74-.74-.46 0-.88.13-1.27.38s-.7.6-.9 1.05c-.23.44-.33.95-.33 1.52v.18c0 .85.24 1.53.73 2.04.48.51 1.12.77 1.9.77zm1.26-3.48h-2.87c.06-.52.23-.92.5-1.21.26-.29.6-.43.99-.43.4 0 .73.13.97.4.24.28.38.66.4 1.16v.08zM61.9 8.8V4.73c.13-.27.32-.5.56-.66.24-.17.52-.26.84-.26.39 0 .68.1.86.3.19.2.28.5.28.91v3.8h.98v-3.8c0-1.35-.62-2.04-1.83-2.04-.7 0-1.27.28-1.71.83l-.03-.72h-.93V8.8h.98zm10.58.1c.51 0 .97-.12 1.37-.36.4-.25.7-.6.91-1.04.22-.44.32-.94.32-1.5v-.07c0-.9-.24-1.6-.72-2.15a2.42 2.42 0 00-1.9-.8c-.5 0-.95.11-1.34.36-.4.24-.7.59-.92 1.03-.22.45-.33.96-.33 1.52v.07c0 .88.24 1.6.72 2.14s1.11.8 1.89.8zm0-.8c-.5 0-.9-.18-1.19-.57-.29-.38-.44-.9-.44-1.53 0-.71.15-1.26.45-1.65.3-.38.68-.57 1.17-.57.5 0 .89.2 1.19.58.3.4.44.9.44 1.53 0 .7-.14 1.24-.44 1.63-.29.4-.68.59-1.18.59zm5.08.7V4.73c.13-.27.32-.5.56-.66.24-.17.52-.26.84-.26.39 0 .68.1.86.3.19.2.28.5.29.91v3.8h.98v-3.8c-.01-1.35-.62-2.04-1.84-2.04-.7 0-1.27.28-1.71.83l-.03-.72h-.93V8.8h.98z"
                ></path>
            </svg>
        </a>
        <a
            href="https://open.spotify.com/episode/2OBw9f4DJCowp5lMp8roPz?si=W8Dtw13rQ7aO09LA84_aMA"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="spotify-podcasts"
            className="e1yciuf90 e1lzeyoj2 css-1qi9uau eygprlc0"
        >
            <svg width="88px" height="34px" fill="none">
                <title>Spotify podcasts</title>
                <path
                    fill="#B8C4C2"
                    d="M35.94 9v-.84h-3.42V1.94h-.94V9h4.36zM37.58 2.86v-.92h-.77v.92h.77zm0 6.14V4.29h-.77V9h.77zM38.5 7.48c.15.92.68 1.67 2.2 1.67 1.12 0 1.97-.59 1.97-1.49 0-.86-.7-1.16-1.57-1.37l-.46-.11c-.72-.17-1.14-.33-1.14-.74 0-.3.28-.69.93-.69.68 0 1.07.34 1.19.6.05.11.06.21.07.44l.86-.1c-.02-.14-.06-.43-.25-.72-.23-.34-.77-.83-1.76-.83-.85 0-1.83.37-1.83 1.4 0 .66.39 1.12 1.68 1.37l.46.09c.43.08.98.18.98.75 0 .67-.7.79-1.1.79-.38 0-.77-.05-1.05-.36-.23-.25-.26-.52-.26-.83l-.91.13zM44.72 4.95h.85v-.66h-.85V2.8h-.82v1.49h-.76v.66h.76v3.28c0 .54.13.85.91.85.31 0 .7-.07.76-.08v-.66c-.22.08-.4.11-.5.11-.25 0-.35-.13-.35-.47V4.95zM47.15 6.79h3.58v-.13c0-1.83-1.13-2.52-2.16-2.52-.98 0-2.28.67-2.28 2.46 0 1.86 1.15 2.55 2.31 2.55a2.15 2.15 0 002.13-1.59l-.8-.11c-.1.43-.42 1.1-1.25 1.1-1.13 0-1.53-.97-1.53-1.7v-.06zm.02-.58c.07-.75.5-1.45 1.34-1.45.8 0 1.35.67 1.35 1.45h-2.69zM55.67 9V6.02c0-.44-.02-.85-.3-1.23a1.69 1.69 0 00-1.33-.65c-.81 0-1.28.49-1.48.84v-.69h-.8V9h.8V6.21c0-.84.59-1.32 1.25-1.32.55 0 1.07.29 1.07 1.02V9h.79zM59.45 6.65c0 1.62.99 2.5 2.3 2.5 1.27 0 2.32-.86 2.32-2.55s-1.14-2.46-2.24-2.46c-2.04 0-2.38 1.75-2.38 2.51zm.87.04c0-.3 0-1.91 1.5-1.91 1.07 0 1.39.95 1.39 1.76 0 1.22-.5 1.97-1.46 1.97-1.26 0-1.43-1.26-1.43-1.82zM69.02 9V6.02c0-.44-.02-.85-.3-1.23a1.69 1.69 0 00-1.33-.65c-.81 0-1.28.49-1.48.84v-.69h-.8V9h.8V6.21c0-.84.59-1.32 1.25-1.32.55 0 1.07.29 1.07 1.02V9h.79z"
                ></path>
                <path
                    fill="#B8C4C2"
                    fill-rule="evenodd"
                    d="M21.04 19.46c-4.21-2.5-11.16-2.73-15.18-1.51a1.22 1.22 0 11-.7-2.34c4.6-1.4 12.28-1.13 17.13 1.75a1.22 1.22 0 01-1.25 2.1zm-.14 3.7c-.3.48-.92.63-1.4.34C16 21.34 10.64 20.7 6.5 21.97a1.02 1.02 0 01-.6-1.95c4.75-1.43 10.64-.74 14.68 1.74.47.3.63.92.33 1.4zm-1.6 3.56a.81.81 0 01-1.12.27c-3.06-1.88-6.92-2.3-11.47-1.26a.81.81 0 11-.36-1.59c4.97-1.14 9.24-.65 12.68 1.46.39.23.5.73.27 1.12zM13.31 7.88a13.06 13.06 0 100 26.12 13.06 13.06 0 000-26.12zM35.79 19.94c-2.26-.54-2.66-.92-2.66-1.71 0-.75.7-1.26 1.76-1.26 1.01 0 2.02.39 3.08 1.18a.15.15 0 00.2-.04l1.1-1.55a.15.15 0 00-.02-.2 6.66 6.66 0 00-4.33-1.5c-2.44 0-4.14 1.46-4.14 3.55 0 2.24 1.47 3.04 4 3.65 2.16.5 2.53.91 2.53 1.66 0 .82-.74 1.34-1.92 1.34a5.18 5.18 0 01-3.6-1.49.16.16 0 00-.1-.03.15.15 0 00-.1.05l-1.24 1.47a.15.15 0 00.01.2 7.36 7.36 0 004.98 1.9c2.62 0 4.32-1.42 4.32-3.64 0-1.88-1.12-2.92-3.87-3.58zM47.5 22.45c0 1.58-.98 2.69-2.38 2.69-1.38 0-2.42-1.16-2.42-2.7 0-1.52 1.04-2.68 2.42-2.68s2.38 1.13 2.38 2.69zm-1.9-4.74c-1.15 0-2.08.45-2.85 1.37v-1.04a.15.15 0 00-.15-.14H40.6a.15.15 0 00-.15.14v11.48c0 .09.06.15.15.15h2.01c.09 0 .15-.06.15-.15V25.9c.77.86 1.7 1.29 2.84 1.29 2.12 0 4.25-1.63 4.25-4.74 0-3.11-2.13-4.74-4.25-4.74zM55.33 25.15c-1.45 0-2.54-1.16-2.54-2.7 0-1.55 1.05-2.67 2.5-2.67 1.46 0 2.56 1.16 2.56 2.7 0 1.55-1.06 2.67-2.52 2.67zm0-7.44a4.76 4.76 0 00-4.86 4.77 4.72 4.72 0 004.83 4.72 4.74 4.74 0 10.03-9.5zM65.98 17.9h-2.23v-2.28a.15.15 0 00-.14-.14h-2.02a.15.15 0 00-.15.14v2.28h-.97a.15.15 0 00-.15.14v1.74c0 .08.07.15.15.15h.97v4.49c0 1.81.9 2.73 2.68 2.73.73 0 1.33-.15 1.9-.47a.15.15 0 00.07-.13V24.9a.15.15 0 00-.21-.13c-.4.2-.77.28-1.19.28-.65 0-.94-.29-.94-.95v-4.17h2.23c.08 0 .14-.07.14-.15v-1.74a.15.15 0 00-.14-.14zM73.72 17.9v-.27c0-.82.31-1.2 1.02-1.2.42 0 .76.1 1.14.22a.15.15 0 00.2-.14v-1.7a.15.15 0 00-.11-.15c-.4-.11-.91-.24-1.68-.24-1.87 0-2.85 1.05-2.85 3.04v.43h-.97a.15.15 0 00-.15.15v1.74c0 .08.07.15.15.15h.97v6.92c0 .09.06.15.14.15h2.02c.09 0 .15-.06.15-.15v-6.92h1.89l2.89 6.92c-.33.73-.65.87-1.1.87-.35 0-.73-.1-1.1-.31a.15.15 0 00-.13-.01.15.15 0 00-.08.08l-.69 1.5c-.03.07 0 .15.07.2.71.38 1.36.54 2.15.54 1.5 0 2.32-.7 3.04-2.56l3.5-9.05a.15.15 0 00-.13-.2h-2.1a.15.15 0 00-.14.1l-2.15 6.15L77.3 18a.15.15 0 00-.14-.1h-3.45zM69.23 17.9h-2.02a.15.15 0 00-.15.14v8.81c0 .09.07.15.15.15h2.02c.08 0 .15-.06.15-.15v-8.8a.15.15 0 00-.15-.15zM68.23 13.88a1.45 1.45 0 100 2.9 1.45 1.45 0 000-2.9zM86 18.77h-.37v.47H86c.19 0 .3-.09.3-.23 0-.16-.11-.24-.3-.24zm.24.68l.4.56h-.33l-.36-.52h-.32v.52h-.28v-1.5h.67c.34 0 .57.18.57.48 0 .25-.14.4-.35.46zm-.31-1.43c-.73 0-1.28.58-1.28 1.29 0 .7.55 1.28 1.27 1.28.73 0 1.28-.58 1.28-1.3 0-.7-.55-1.27-1.27-1.27zm0 2.7c-.8 0-1.43-.63-1.43-1.41 0-.78.63-1.43 1.43-1.43.8 0 1.42.64 1.42 1.42 0 .78-.63 1.43-1.43 1.43z"
                    clip-rule="evenodd"
                ></path>
            </svg>
        </a>
        <a
            href="https://podcasts.apple.com/us/podcast/ep-99-exploring-growth-engineering-at-mongodb/id1500452446?i=1000551262281"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="apple-podcasts"
            className="e1yciuf90 e1lzeyoj2 css-1qi9uau eygprlc0"
        >
            <svg width="139" height="25" fill="none">
                <title>Apple podcasts</title>
                <path
                    fill="#B8C4C2"
                    d="M32.5 7.04H29V1.38h.87v4.85h2.63v.81zM33.51 1.51c0-.3.23-.52.54-.52.31 0 .54.23.54.52 0 .29-.23.51-.54.51-.3 0-.54-.22-.54-.51zm.13 1.26h.83v4.27h-.83V2.77zM37.37 2.69c.95 0 1.57.45 1.65 1.2h-.8c-.08-.31-.38-.51-.85-.51s-.83.22-.83.55c0 .26.22.42.68.52l.7.17c.8.19 1.19.54 1.19 1.16 0 .8-.75 1.34-1.76 1.34-1 0-1.67-.45-1.74-1.21h.84c.1.33.41.53.92.53.52 0 .9-.23.9-.57 0-.26-.2-.42-.63-.52l-.74-.18c-.8-.19-1.18-.56-1.18-1.19 0-.76.69-1.29 1.65-1.29zM41.33 1.71v1.08h.92v.71h-.92v2.2c0 .44.18.64.6.64.13 0 .2 0 .32-.02v.7c-.14.03-.3.05-.46.05-.93 0-1.3-.33-1.3-1.16v-2.4h-.67v-.72h.67V1.71h.84zM46.89 5.89c-.2.76-.87 1.23-1.84 1.23-1.21 0-1.96-.83-1.96-2.2 0-1.36.76-2.23 1.96-2.23 1.18 0 1.89.81 1.89 2.15v.3h-3v.04c.03.75.46 1.23 1.13 1.23.51 0 .86-.19 1.01-.52h.8zm-2.95-1.38h2.15c-.02-.67-.43-1.1-1.05-1.1-.62 0-1.05.44-1.1 1.1zM48.06 2.77h.8v.68h.07c.2-.47.62-.76 1.26-.76.95 0 1.47.57 1.47 1.59v2.76h-.84V4.5c0-.69-.3-1.03-.91-1.03-.62 0-1.02.42-1.02 1.08v2.5h-.83V2.77zM55.04 4.9c0-1.37.76-2.21 2-2.21 1.23 0 2 .84 2 2.22 0 1.38-.77 2.21-2 2.21-1.25 0-2-.83-2-2.21zm3.13 0c0-.92-.41-1.46-1.13-1.46-.73 0-1.14.54-1.14 1.47 0 .93.4 1.47 1.14 1.47.72 0 1.13-.55 1.13-1.47zM60.15 2.77h.8v.68h.07c.2-.47.63-.76 1.27-.76.94 0 1.46.57 1.46 1.59v2.76h-.83V4.5c0-.69-.3-1.03-.92-1.03-.62 0-1.01.42-1.01 1.08v2.5h-.84V2.77zM35.78 19.07H31.4l-1.05 3.13h-1.86l4.16-11.6h1.93l4.16 11.6h-1.9l-1.05-3.13zm-3.93-1.45h3.48l-1.72-5.1h-.05l-1.71 5.1zM47.71 17.97c0 2.63-1.4 4.32-3.5 4.32-1.2 0-2.15-.54-2.65-1.48h-.04V25H39.8V13.74h1.67v1.4h.03c.48-.9 1.5-1.49 2.68-1.49 2.13 0 3.53 1.7 3.53 4.32zm-1.77 0c0-1.71-.88-2.84-2.22-2.84-1.32 0-2.2 1.15-2.2 2.84 0 1.7.88 2.85 2.2 2.85 1.34 0 2.22-1.12 2.22-2.85zM56.96 17.97c0 2.63-1.4 4.32-3.5 4.32-1.2 0-2.16-.54-2.65-1.48h-.04V25h-1.72V13.74h1.66v1.4h.04c.48-.9 1.5-1.49 2.67-1.49 2.13 0 3.54 1.7 3.54 4.32zm-1.77 0c0-1.71-.88-2.84-2.22-2.84-1.32 0-2.2 1.15-2.2 2.84 0 1.7.88 2.85 2.2 2.85 1.34 0 2.22-1.12 2.22-2.85zM58.35 10.6h1.73v11.6h-1.73V10.6zM69.06 19.72c-.24 1.53-1.72 2.59-3.62 2.59-2.44 0-3.96-1.65-3.96-4.3s1.52-4.37 3.89-4.37c2.32 0 3.78 1.6 3.78 4.17v.6h-5.93v.1c0 1.45.9 2.4 2.26 2.4.96 0 1.7-.46 1.94-1.2h1.64zm-5.83-2.53h4.2c-.04-1.3-.87-2.15-2.06-2.15-1.2 0-2.06.87-2.14 2.15zM78.33 10.6c2.24 0 3.8 1.55 3.8 3.8a3.67 3.67 0 01-3.85 3.84H75.8v3.96h-1.78V10.6h4.31zm-2.53 6.13h2.06c1.55 0 2.44-.85 2.44-2.31 0-1.47-.89-2.3-2.44-2.3H75.8v4.6zM82.76 17.97c0-2.66 1.55-4.33 3.98-4.33 2.44 0 3.99 1.67 3.99 4.33 0 2.67-1.55 4.34-3.99 4.34-2.44 0-3.98-1.67-3.98-4.34zm6.2 0c0-1.82-.82-2.9-2.22-2.9-1.4 0-2.23 1.08-2.23 2.9 0 1.84.83 2.9 2.23 2.9s2.23-1.06 2.23-2.9zM91.94 17.97c0-2.61 1.42-4.32 3.5-4.32 1.21 0 2.16.57 2.64 1.5h.04V10.6h1.73v11.6h-1.68v-1.44h-.03a2.86 2.86 0 01-2.68 1.53c-2.1 0-3.52-1.7-3.52-4.32zm1.76 0c0 1.74.88 2.85 2.22 2.85 1.33 0 2.21-1.13 2.21-2.85 0-1.7-.88-2.84-2.21-2.84-1.34 0-2.22 1.12-2.22 2.84zM107.19 16.65c-.16-.89-.85-1.56-1.98-1.56-1.33 0-2.2 1.12-2.2 2.88 0 1.8.88 2.89 2.21 2.89 1.07 0 1.77-.54 1.97-1.52h1.66c-.2 1.78-1.6 2.97-3.64 2.97-2.4 0-3.96-1.65-3.96-4.34 0-2.63 1.56-4.33 3.94-4.33 2.16 0 3.5 1.36 3.64 3.01h-1.64zM109.9 19.8c0-1.48 1.13-2.38 3.12-2.5l2.3-.12v-.65c0-.94-.61-1.47-1.66-1.47-.95 0-1.63.46-1.76 1.2h-1.61c.04-1.54 1.46-2.62 3.42-2.62 2 0 3.33 1.1 3.33 2.76v5.8h-1.65v-1.39h-.04a3 3 0 01-2.65 1.54c-1.65 0-2.8-1.03-2.8-2.55zm5.42-.77v-.65l-2.06.13c-1.04.07-1.62.52-1.62 1.24 0 .74.61 1.22 1.54 1.22 1.2 0 2.14-.84 2.14-1.94zM121.85 13.65c1.86 0 3.2 1.03 3.24 2.53h-1.63c-.07-.75-.7-1.2-1.65-1.2-.94 0-1.56.43-1.56 1.09 0 .5.41.84 1.28 1.06l1.42.33c1.69.4 2.33 1.03 2.33 2.27 0 1.53-1.44 2.58-3.5 2.58-1.97 0-3.3-1.03-3.43-2.57h1.7c.13.81.77 1.25 1.82 1.25 1.03 0 1.68-.43 1.68-1.1 0-.53-.32-.8-1.2-1.03l-1.5-.37c-1.52-.37-2.29-1.15-2.29-2.33 0-1.5 1.34-2.51 3.3-2.51zM129.03 11.74v2h1.6v1.38h-1.6v4.66c0 .72.31 1.06 1.02 1.06.17 0 .45-.02.56-.04v1.37c-.19.05-.57.08-.95.08-1.7 0-2.37-.64-2.37-2.28v-4.85h-1.22v-1.38h1.22v-2h1.73zM135.26 13.65c1.86 0 3.2 1.03 3.23 2.53h-1.62c-.07-.75-.7-1.2-1.66-1.2-.93 0-1.56.43-1.56 1.09 0 .5.42.84 1.29 1.06l1.41.33c1.7.4 2.33 1.03 2.33 2.27 0 1.53-1.43 2.58-3.49 2.58-1.98 0-3.3-1.03-3.44-2.57h1.71c.12.81.77 1.25 1.81 1.25 1.03 0 1.68-.43 1.68-1.1 0-.53-.32-.8-1.2-1.03l-1.5-.37c-1.51-.37-2.28-1.15-2.28-2.33 0-1.5 1.33-2.51 3.29-2.51zM23.23 20.38a4.97 4.97 0 01-3.13 2.83c-.75.23-1.68.3-2.82.3H6.77a10.1 10.1 0 01-2.82-.3A4.88 4.88 0 01.8 20.38a9.28 9.28 0 01-.46-3.33V6.47c0-.84 0-2.17.46-3.34A4.97 4.97 0 013.95.3C4.7.08 5.62 0 6.77 0h10.5c1.15 0 2.08.08 2.83.3a4.88 4.88 0 013.13 2.83c.46 1.17.47 2.5.47 3.34v10.58c0 .83 0 2.16-.47 3.33zm-9.51-6.87a2.33 2.33 0 00-1.7-.6c-.72 0-1.34.23-1.69.6-.18.2-.28.4-.3.68-.07.55-.03 1.02.03 1.78.06.72.18 1.68.33 2.66.1.7.2 1.07.27 1.34.13.44.61.82 1.36.82.76 0 1.24-.38 1.37-.82.08-.27.16-.64.27-1.34.15-.98.27-1.94.33-2.66.06-.76.1-1.23.04-1.78a1.08 1.08 0 00-.31-.68zm-3.6-3.31c0 1.06.85 1.92 1.9 1.92a1.92 1.92 0 000-3.85c-1.05 0-1.9.87-1.9 1.93zM12 2.6a8.28 8.28 0 00-2.7 16.07c.09.03.17-.03.15-.11l-.11-.85a.28.28 0 00-.17-.22 7.22 7.22 0 012.8-13.83 7.22 7.22 0 012.92 13.82.28.28 0 00-.17.23l-.12.85c-.01.08.06.14.14.12A8.28 8.28 0 0012 2.6zm-.15 3.8a4.47 4.47 0 013.22 7.74.34.34 0 00-.1.27c.01.31 0 .6-.01.95 0 .09.1.14.16.1a5.55 5.55 0 00-3.3-10.12 5.54 5.54 0 00-2.88 10.11.1.1 0 00.16-.1 7.98 7.98 0 010-.94c0-.1-.04-.2-.11-.27a4.48 4.48 0 012.86-7.74z"
                ></path>
            </svg>
        </a>`,
            description: `Growth engineering, sometimes referred to as
        "growth hacking" is a technical, and systematic
        approach to growing the number of users of a
        given application or platform.
        <strong>Growth engineers</strong> are always
        coming up with new ideas and experiments to
        improve the users' experience. They do this by
        testing user behavior, and providing differing
        interfaces to select populations of users to see
        which one yields the intended results. Today, we
        chat with the team responsible for growth at
        MongoDB.
        <a
            target="_blank"
            href="https://www.linkedin.com/in/jessekrasnostein/"
        >
            Jesse Krasnostein
        </a>
         and
        <a
            target="_blank"
            href="https://www.linkedin.com/in/akshay-sadarangani/"
        >
            Akshay Sadarangani
        </a>
         chat about the science of growth engineering,
        the tools they use as well as the background and
        skills they leverage as part of this fascinating
        specialization.`,
        },
        {
            id: 'blog',
            menu: 'Blog',
            headline: 'Blog',
            description: `<ul>
            <li><a href='https://www.linkedin.com/pulse/ransomware-wannacry-what-you-can-do-prevent-akshay-sadarangani' target='_blank'>Ransomware, WannaCry and what you can do to prevent it</a></li>
            <br/>
            <li><a href='https://www.linkedin.com/pulse/dcleaner-chrome-extension-built-out-need-akshay-sadarangani' target='_blank'>DCleaner: A Chrome extension built out of need</a></li>
            <br/>
            <li><a href='https://www.linkedin.com/pulse/unichat-chat-beyond-boundaries-akshay-sadarangani/' target='_blank'>UniChat: Chat Beyond Boundaries</a></li>
            <br/>
            <li><a href='https://www.linkedin.com/pulse/autometa-geo-reminders-automation-akshay-sadarangani/' target='_blank'>Autometa: Geo-reminders and Automation</a></li>
            </ul>`,
        },
        {
            id: 'more',
            menu: 'More',
            headline: 'Hobbies',
            subhead: 'Some of my side projects',
            projects: [
                {
                    id: 'autometa',
                    title: 'Autometa',
                    summary:
                        "Autometa is an app that triggers reminders and automates text-based events based on the user's location and radius. Users can snooze or delay events and also cancel them within a specified duration of the trigger.",
                    image: 'https://raw.githubusercontent.com/aksh4y/aksh4y.github.io/bbc53fa0bc9f51e164aa3cb2979134a962e69cce/src/asset/images/autometa.png',
                    links: [
                        {
                            label: 'Check It Out',
                            url: 'https://devpost.com/software/autometa',
                        },
                    ],
                },
                {
                    id: 'unichat',
                    title: 'Unichat',
                    summary:
                        "A MEAN stack web app which lets users chat with each other either or in a group either privately or publicly in their native language. With a choice of 15 languages to choose from, chatting especially with a multicultural crowd has never been easier. Messages are translated as per user's preferred language and have associated sentiment analysis alongside to give a better idea of the tone of the message as translations today aren't perfect.",
                    image: 'https://raw.githubusercontent.com/aksh4y/aksh4y.github.io/bbc53fa0bc9f51e164aa3cb2979134a962e69cce/src/asset/images/unichat.jpg',
                    links: [
                        {
                            label: 'Check It Out',
                            url: 'https://devpost.com/software/unichat',
                        },
                    ],
                },
                {
                    id: 'news-map',
                    title: 'News Map',
                    summary:
                        'A web app that aggregates different news sources using Python on a map built with deck-gl and D3.js to provide location-based trends in current events and a sentiment analysis on each article using IBM Watson NLU to categorize each source’s view and help users recognize bias and prevent misinformation',
                    image: 'https://raw.githubusercontent.com/aksh4y/aksh4y.github.io/bbc53fa0bc9f51e164aa3cb2979134a962e69cce/src/asset/images/news.jpg',
                    links: [
                        {
                            label: 'Check It Out',
                            url: 'https://devpost.com/software/news-map-io',
                        },
                    ],
                },
            ],
        },
        {
            id: 'contact',
            menu: 'Contact',
            headline: 'Get In Touch',
            subhead: 'How about leaving me a message?',
        },
    ],
    footer: {
        social: [
            {
                service: 'email',
                link: 'mailto:akshay.sadarangani@gmail.com',
            },
            {
                service: 'github',
                link: 'https://github.com/aksh4y',
            },
            {
                service: 'linkedin',
                link: 'https://www.linkedin.com/in/akshay-sadarangani/',
            },
        ],
        footerMessage: 'Thanks for visiting',
        background: '',
    },
};

export default (state: Portfolio = initState) => {
    return state;
};
