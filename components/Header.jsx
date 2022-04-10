
const Header = () => {
    return (
    <header className="text-gray-900 body-font mb-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a href="/" className="mr-10 hover:text-gray-600 font-bold text-xl">Home</a>
        <a href="/tentang" className="mr-10 hover:text-gray-600 font-bold text-xl">Tentang Jepang</a>
        <a href="/audio" className="mr-10 hover:text-gray-600 font-bold text-xl">Lagu Jepang</a>
        <a href="/video" className="mr-10 hover:text-gray-600 font-bold text-xl">Video Jepang</a>
        <a href="/animasi" className="mr-10 hover:text-gray-600 font-bold text-xl">Animasi Jepang</a>
        </nav>
    </div>
    </header>
    )
}


export default Header