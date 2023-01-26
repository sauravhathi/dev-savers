import { } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {

    return (
        <div className="flex flex-col justify-center h-screen md:-mt-[4.5rem] max-w-6xl mx-auto p-4">
            <div className="flex flex-col md:flex-row justify-between w-full items-center">
                <div className='w-full md:w-1/3 flex flex-col justify-center items-center md:items-start'>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-[0.5rem] text-teal-300">
                        Dev Savers
                    </h1>
                    <p className="text-lg md:text-2xl text-teal-300">
                        List of Productivity-Boosting Tools and Frameworks
                    </p>
                    <Link href="#Tools-and-Frameworks" className="mt-4 bg-teal-300 hover:bg-teal-400 text-stone-800 px-6 py-3 rounded-md shadow-md shadow-slate-500
                    hover:scale-95 transform transition duration-200 ease-in-out" aria-label="Save Your Time">
                        Save Your Time
                    </Link>
                </div>
                <div className="relative w-full md:w-1/2 h-96 hover:scale-105 transform transition duration-200 ease-in-out">
                    <Image
                        src="/hero.svg"
                        alt="Hero Image"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}