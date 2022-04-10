import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-pink-200">
      <Head>
        <title>LA4 - SISMUL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-pink-600" href="http://www.japan.go.jp/index.html">
            Japan
          </a>
        </h1>

        <div className="mt-5">
          <Image className="rounded" src="/japanbanner.jpg" alt="Japan banner" width={952} height={282}/>
        </div>
        
        <p className="mt-3 text-2xl font-serif">
          Disusun oleh
        </p>
        
        <div className="flex w-flex flex-wrap">
          <p className="mt-3 text-2xl font-serif">
          Nama : {' '}
            <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
              Haafidz Nurul Salim
            </code>
          </p>

          <p className="mt-3 text-2xl ml-2 font-serif">
          NPM : {' '}
            <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
              52418987
            </code>
          </p>

          <p className="mt-3 text-2xl ml-2 font-serif">
            Kelas : {' '}
            <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
              4IA23
            </code>
          </p>
        </div>
        

        

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/tentang"
            className="mt-6 w-96 rounded-xl border border-black p-6 text-left hover:text-pink-600 hover:border-pink-600 focus:text-pink-600"
          >
            <h3 className="text-2xl font-bold">Tentang &rarr;</h3>
            <p className="mt-4 text-xl">
              Informasi singkat tentang Jepang.
            </p>
          </a>

          <a
            href="/audio"
            className="mt-6 w-96 rounded-xl border border-black p-6 text-left hover:text-pink-600 hover:border-pink-600 focus:text-pink-600"
          >
            <h3 className="text-2xl font-bold">Audio &rarr;</h3>
            <p className="mt-4 text-xl">
              Contoh audio!
            </p>
          </a>

          <a
            href="/video"
            className="mt-6 w-96 rounded-xl border border-black p-6 text-left hover:text-pink-600 hover:border-pink-600 focus:text-pink-600"
          >
            <h3 className="text-2xl font-bold">Video &rarr;</h3>
            <p className="mt-4 text-xl">
              Contoh Video!
            </p>
          </a>

          <a
            href="/animasi"
            className="mt-6 w-96 rounded-xl border border-black p-6 text-left hover:text-pink-600 hover:border-pink-600 focus:text-pink-600"
          >
            <h3 className="text-2xl font-bold">Animasi &rarr;</h3>
            <p className="mt-4 text-xl">
              Contoh Animasi!
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
