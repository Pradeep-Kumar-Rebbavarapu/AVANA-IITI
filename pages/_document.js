import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    const imageDirectURL = `${process.env.SITE_URL}/images/logo.png`;
    return (
        <Html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json" crossorigin="use-credentials"/>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="subject" content="The Avana Club - IIT Indore" />
                <meta
                    name="description"
                    content="AVANA is social welfare initiative taken up by students of IIT Indore that plays a significant part towards the welfare of underprivileged peoples in and around Indore. This includes and is not limited to: conducting teaching activities for rural children, distribution of basic clothing and blankets through a donation mechanism, conducting blood donation camps, and more recently developing educational content such as videos for the benefit of the rural folk."
                />
                <meta
                    name="keywords"
                    content="The Avana Club,Avana, IIT INODRE, Avana IIT INDORE, Avana iit indore , Indian Institute of Technology Indore, Avana Indian Institute of Techonology Indore, avana , avana-iiti, Indore, Education, Help, Donate"
                />
                <meta name="language" content="en" />
                <meta name="url" content={process.env.SITE_URL} />
                <meta name="coverage" content="Worldwide" />
                <meta name="distribution" content="Global" />
                <meta name="target" content="all" />
                <meta name="rating" content="General" />
                <meta name="og:country-name" content="India" />
                <meta name="og:region" content="India" />
                <meta property="og:url" content={process.env.SITE_URL} />
                <meta
                    name="og:site_name"
                    content="The Avana Club - IIT Indore"
                />
                <meta property="og:type" content="Website" />
                <meta
                    property="og:title"
                    content="The Avana Club - IIT Indore"
                />
                <meta
                    property="og:description"
                    content="AVANA is social welfare initiative taken up by students of IIT Indore that plays a significant part towards the welfare of underprivileged peoples in and around Indore. This includes and is not limited to: conducting teaching activities for rural children, distribution of basic clothing and blankets through a donation mechanism, conducting blood donation camps, and more recently developing educational content such as videos for the benefit of the rural folk."
                />
                <meta name="twitter:card" content="website" />
                <meta
                    name="twitter:site"
                    content="The Avana Club - IIT Indore"
                />
                <meta
                    name="twitter:title"
                    content="The Avana Club - IIT Indore"
                />
                <meta
                    name="twitter:description"
                    content="AVANA is social welfare initiative taken up by students of IIT Indore that plays a significant part towards the welfare of underprivileged peoples in and around Indore. This includes and is not limited to: conducting teaching activities for rural children, distribution of basic clothing and blankets through a donation mechanism, conducting blood donation camps, and more recently developing educational content such as videos for the benefit of the rural folk."
                />
                <meta itemprop="name" content="The Avana Club - IIT Indore" />
                <meta
                    itemprop="description"
                    content="AVANA is social welfare initiative taken up by students of IIT Indore that plays a significant part towards the welfare of underprivileged peoples in and around Indore. This includes and is not limited to: conducting teaching activities for rural children, distribution of basic clothing and blankets through a donation mechanism, conducting blood donation camps, and more recently developing educational content such as videos for the benefit of the rural folk."
                />
                <meta name="author" content="Pradeep Kumar Rebbavarapu" />

                <meta property="og:image" content={imageDirectURL} />
                <meta name="twitter:image" content={imageDirectURL} />

                <link rel="shortcut icon" href="favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="150x150"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
            </head>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
