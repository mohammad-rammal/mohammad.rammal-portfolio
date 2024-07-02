import logo from "../assets/logo.png"

import ThemeToggle from "./ThemeToggle"


function Navbar() {
    return (
        <nav className="flexBetween">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" className="mx-2 w-20 " />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://res.cloudinary.com/dftxzx2zc/image/upload/v1719922520/cv/MohammadRammal-FullStackDeveloper-CV.pdf"
                    download
                    className="mr-2 rounded bg-neutral-900 sm:px-4 sm:py-2 px-6 py-2  text-sm font-medium text-purple-800 hover:bg-neutral-800 focus:outline-none"
                >
                    <p className="sm:block hidden">Curriculum Vitae (CV)</p>
                    <p className="sm:hidden block">CV</p>
                </a>
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Navbar