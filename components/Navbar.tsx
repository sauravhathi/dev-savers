import Link from 'next/link';
import { FaLink } from 'react-icons/fa';

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto sticky top-0 z-50 bg-stone-800" aria-label="Main Navigation">
            <div className="flex items-center">
                {/* <div className="text-2xl font-bold tracking-wider" aria-label="Logo">
                    <a href="#">LOGO</a>
                </div> */}
                <div className="space-x-4 font-semibold">
                    <Link href="#Tools-and-Frameworks" className="text-teal-300 hover:text-teal-400" aria-label="Tools and Frameworks">Tools and Frameworks</Link>
                    <Link href="https://sauravhathi.github.io/" className="text-teal-300 hover:text-teal-400" aria-label="Contact">Contact</Link>
                </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
                {/* Contribute github link */}
                <Link href="#" className="flex items-center space-x-2 bg-teal-300 hover:bg-teal-400 text-stone-800 px-4 py-2 rounded-md">
                    <span className="font-bold" aria-label="Contribute">Contribute</span>
                    <FaLink />
                </Link>
            </div>
        </nav>
    )
}
