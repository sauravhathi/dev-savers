import Link from "next/link";
import { FaLink } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="px-2 py-4 text-center">
            Made with ❤️ by <Link href="https://sauravhathi.github.io/"
                className="text-teal-300 hover:text-teal-400">Saurav Hathi</Link>
        </footer>
    )
}
