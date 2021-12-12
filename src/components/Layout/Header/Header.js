export default function Header() {
    return(
        <header className="w-full py-2 border-b-2 border-yellow-400 flex items-center">
            <a href="/">
            <img className="pl-2 mr-4" src="https://www.uniminuto.edu/sites/default/files/uniminuto.png" />
            </a>
            <p className="flex items-center h-10 pl-4 border-l-4 border-white text-white uppercase font-semibold text-xl">Centro progresa</p>
        </header>
    );
}