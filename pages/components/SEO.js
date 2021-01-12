import Head from 'next/head'

export default function SEO() {
    return <Head>

        <title>Aditya's Portfolio</title>
        <meta name="title" content="Aditya's Portfolio"/>
        <meta name="description"
              content="Hi! I am Aditya Manikanth Rao. I am a final year CS Undergraduate and a full stack developer from Warangal, India. Check out my portfolio and other profiles to know more or contact me."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://aditya2810.me/"/>
        <meta property="og:title" content="Aditya's Portfolio"/>
        <meta property="og:description"
              content="Hi! I am Aditya Manikanth Rao. I am a final year CS Undergraduate and a full stack developer from Warangal, India. Check out my portfolio and other profiles to know more or contact me."/>
        <meta property="og:image" content="/preview.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://aditya2810.me/"/>
        <meta property="twitter:title" content="Aditya's Portfolio"/>
        <meta property="twitter:description"
              content="Hi! I am Aditya Manikanth Rao. I am a final year CS Undergraduate and a full stack developer from Warangal, India. Check out my portfolio and other profiles to know more or contact me."/>
        <meta property="twitter:image" content="/preview.png"/>
    </Head>
}