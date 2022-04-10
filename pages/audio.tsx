import type { NextPage } from 'next'
import Head from 'next/head'

import ReactAudioPlayer from 'react-audio-player'
import Header from '../components/Header'
import Footer from '../components/Footer'

const audio: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-pink-200">
            <Head>
                <title>LA4 - SISMUL</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        
        <Header />

        <h1 className="text-4xl font-bold">
            Contoh Audio
        </h1>

        <div className="mt-5">
            <ReactAudioPlayer
                src="/ronin.mp3"
                autoPlay={false}
                controls
                volume={0.2}
            />
        </div>

        </main>
            <Footer />
        </div>)
}

export default audio

