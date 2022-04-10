import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

const video: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-pink-200">
            <Head>
                <title>LA4 - SISMUL</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        
        <Header />

        <h1 className="text-4xl font-bold">
            Video Cinematic Jepang
        </h1>

        <div className="mt-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/G5RpJwCJDqc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>

        </main>
            <Footer />
        </div>)
}

export default video
