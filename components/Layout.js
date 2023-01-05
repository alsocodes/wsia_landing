import React from 'react';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
const Layout = (props) => {
    return (
        <div>
            <NextNProgress
                color="#eb3d00"
                startPosition={0.8}
                stopDelayMs={100}
                height={2}
                showOnShallow={true}
                options={{ easing: 'ease', speed: 200, showSpinner: false, }}
            />
            <Head>
                <title>{props.pageTitle}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta content="" name="description" />
                <meta content="" name="keywords" />

                <link href="images/favicon.png" rel="icon" />
                <link href="images/apple-touch-icon.png" rel="apple-touch-icon" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
            </Head>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default Layout;