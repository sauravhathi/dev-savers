import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { FaBook, FaHome, FaYoutube } from 'react-icons/fa';

export default function Article() {
    const [query, setQuery] = useState('');

    const tools = [
        {
            name: 'Next.js',
            image: '/images/next.svg',
            uses: 'React Framework',
            tagline: 'The React Framework for Production',
            homepage: 'https://nextjs.org/',
            doc: 'https://nextjs.org/docs',
            video: 'https://www.youtube.com/watch?v=mTz0GXj8NN0'
        },
        {
            name: 'Tailwind CSS',
            image: '/images/tailwindcss.jpg',
            uses: 'CSS Framework',
            tagline: 'A utility-first CSS framework for rapidly building custom designs.',
            homepage: 'https://tailwindcss.com/',
            doc: 'https://tailwindcss.com/docs',
            video: 'https://www.youtube.com/watch?v=UBOj6rqRUME'
        },
        {
            name: 'SwiperJS',
            image: '/images/swiperjs.png',
            uses: 'Slider Library',
            tagline: 'The Most Modern Mobile Touch Slider.',
            homepage: 'https://swiperjs.com/',
            doc: 'https://swiperjs.com/swiper-api',
            video: 'https://www.youtube.com/results?search_query=swiperjs&sp=EgIIBQ%253D%253D'
        },
        {
            name: 'Spline',
            image: '/images/spline.png',
            uses: 'Design Tool',
            tagline: 'Spline is a design tool that lets you create interactive prototypes without code.',
            homepage: 'https://spline.design/',
            doc: 'https://spline.design/docs',
            video: 'https://www.youtube.com/watch?v=6Zg0Z9Z1Z0o'
        },
        {
            name: 'Framer Motion',
            image: '/images/framer-motion.png',
            uses: 'Animation Library',
            tagline: 'Open source, production-ready animation and gesture library for React.',
            homepage: 'https://www.framer.com/motion/',
            doc: 'https://www.framer.com/api/motion/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'React Icons',
            image: '/images/react-icons.svg',
            uses: 'Icon Library',
            tagline: 'Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.',
            homepage: 'https://react-icons.github.io/react-icons/',
            doc: 'https://react-icons.github.io/react-icons/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'React Hook Form',
            image: '/images/react-hook-form.jpg',
            uses: 'Form Library',
            tagline: 'Performant, flexible and extensible forms with easy-to-use validation.',
            homepage: 'https://react-hook-form.com/',
            doc: 'https://react-hook-form.com/get-started',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'React Query',
            image: '',
            uses: 'Data Fetching Library',
            tagline: 'React Query is a powerful library for fetching, caching and updating asynchronous data in React.',
            homepage: 'https://react-query.tanstack.com/',
            doc: 'https://react-query.tanstack.com/docs/overview',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'React Spring',
            image: '',
            uses: 'Animation Library',
            tagline: 'A spring-physics based animation library for React.',
            homepage: 'https://www.react-spring.io/',
            doc: 'https://www.react-spring.io/docs/hooks/basics',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'React Three Fiber',
            image: '',
            uses: '3D Library',
            tagline: 'A React renderer for Three.js on the web, with a declarative and reactive API.',
            homepage: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction',
            doc: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'React Use',
            image: '',
            uses: 'Hooks Library',
            tagline: 'Collection of essential React Hooks.',
            homepage: 'https://streamich.github.io/react-use/',
            doc: 'https://streamich.github.io/react-use/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'React Use Gesture',
            image: '',
            uses: 'Gesture Library',
            tagline: 'React-use-gesture is a React hook to bind mouse/touch gestures to your components.',
            homepage: 'https://use-gesture.netlify.app/',
            doc: 'https://use-gesture.netlify.app/docs/getting-started',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'React Use Scroll',
            image: '',
            uses: 'Scroll Library',
            tagline: 'React-use-scroll is a React hook to bind scroll events to your components.',
            homepage: 'https://use-scroll.netlify.app/',
            doc: 'https://use-scroll.netlify.app/docs/getting-started',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'React Use State With Callback',
            image: '',
            uses: 'State Library',
            tagline: 'React-use-state-with-callback is a React hook to bind state to your components.',
            homepage: 'https://use-state-with-callback.netlify.app/',
            doc: 'https://use-state-with-callback.netlify.app/docs/getting-started',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'ReactJS',
            image: '',
            uses: 'JavaScript Library',
            tagline: 'React is a JavaScript library for building user interfaces.',
            homepage: 'https://reactjs.org/',
            doc: 'https://reactjs.org/docs/getting-started.html',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'TypeScript',
            image: '',
            uses: 'Programming Language',
            tagline: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
            homepage: 'https://www.typescriptlang.org/',
            doc: 'https://www.typescriptlang.org/docs/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'NodeJS',
            image: '',
            uses: 'JavaScript Runtime',
            tagline: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
            homepage: 'https://nodejs.org/en/',
            doc: 'https://nodejs.org/en/docs/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'NestJS',
            image: '',
            uses: 'NodeJS Framework',
            tagline: 'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).',
            homepage: 'https://nestjs.com/',
            doc: 'https://docs.nestjs.com/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'ExpressJS',
            image: '',
            uses: 'NodeJS Framework',
            tagline: 'Fast, unopinionated, minimalist web framework for Node.js',
            homepage: 'https://expressjs.com/',
            doc: 'https://expressjs.com/en/4x/api.html',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'GraphQL',
            image: '',
            uses: 'Query Language',
            tagline: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
            homepage: 'https://graphql.org/',
            doc: 'https://graphql.org/learn/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Apollo GraphQL',
            image: '',
            uses: 'GraphQL Framework',
            tagline: 'Apollo GraphQL is a data graph platform that helps you deliver great experiences to your users.',
            homepage: 'https://www.apollographql.com/',
            doc: 'https://www.apollographql.com/docs/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'MongoDB',
            image: '/images/mongodb.png',
            uses: 'Database',
            tagline: 'MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.',
            homepage: 'https://www.mongodb.com/',
            doc: 'https://docs.mongodb.com/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'PostgreSQL',
            image: '',
            uses: 'Database',
            tagline: 'PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
            homepage: 'https://www.postgresql.org/',
            doc: 'https://www.postgresql.org/docs/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Oracle Database',
            image: '',
            uses: 'Database',
            tagline: 'Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing, data warehousing and mixed database workloads.',
            homepage: 'https://www.oracle.com/database/',
            doc: 'https://docs.oracle.com/en/database/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'MySQL',
            image: '',
            uses: 'Database',
            tagline: 'MySQL is an open-source relational database management system (RDBMS).',
            homepage: 'https://www.mysql.com/',
            doc: 'https://dev.mysql.com/doc/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Apache Kafka',
            image: '',
            uses: 'Message Broker',
            tagline: 'Apache Kafka is an open-source stream-processing software platform developed by LinkedIn and donated to the Apache Software Foundation, written in Scala and Java. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds.',
            homepage: 'https://kafka.apache.org/',
            doc: 'https://kafka.apache.org/documentation/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'PHP',
            image: '',
            uses: 'Programming Language',
            tagline: 'PHP is a popular general-purpose scripting language that is especially suited to web development.',
            homepage: 'https://www.php.net/',
            doc: 'https://www.php.net/manual/en/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Python',
            image: '/images/python.png',
            uses: 'Programming Language',
            tagline: 'Python is an interpreted, high-level and general-purpose programming language. Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.',
            homepage: 'https://www.python.org/',
            doc: 'https://docs.python.org/3/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Java',
            image: '',
            uses: 'Programming Language',
            tagline: 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.',
            homepage: 'https://www.java.com/',
            doc: 'https://docs.oracle.com/en/java/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'JavaScript',
            image: '/images/javascript.png',
            uses: 'Programming Language',
            tagline: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.',
            homepage: 'https://www.javascript.com/',
            doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'C#',
            image: '',
            uses: 'Programming Language',
            tagline: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.',
            homepage: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
            doc: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Kotlin',
            image: '/images/kotlin.png',
            uses: 'Programming Language',
            tagline: 'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of its standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.',
            homepage: 'https://kotlinlang.org/',
            doc: 'https://kotlinlang.org/docs/home.html',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Go',
            image: '/images/go.jpeg',
            uses: 'Programming Language',
            tagline: 'Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.',
            homepage: 'https://golang.org/',
            doc: 'https://golang.org/doc/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Dart',
            image: '/images/dart.png',
            uses: 'Programming Language',
            tagline: 'Dart is a client-optimized programming language for apps on multiple platforms. It is developed by Google and is used to build mobile, desktop, server, and web applications. Dart is an object-oriented, class-based, garbage-collected language with C-style syntax. Dart can compile to either native code or JavaScript.',
            homepage: 'https://dart.dev/',
            doc: 'https://dart.dev/guides',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Flutter',
            image: '/images/flutter.webp',
            uses: 'UI Framework',
            tagline: 'Flutter is Google\'s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.',
            homepage: 'https://flutter.dev/',
            doc: 'https://flutter.dev/docs',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Bootstrap',
            image: '/images/bootstrap.png',
            uses: 'UI Framework',
            tagline: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.',
            homepage: 'https://getbootstrap.com/',
            doc: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Material UI',
            image: '/images/material-ui.png',
            uses: 'UI Framework',
            tagline: 'Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications. Follow your own design system, or start with Material Design.',
            homepage: 'https://material-ui.com/',
            doc: 'https://material-ui.com/getting-started/usage/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Git',
            image: '/images/git.png',
            uses: 'Version Control',
            tagline: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
            homepage: 'https://git-scm.com/',
            doc: 'https://git-scm.com/doc',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'GitHub',
            image: '/images/github.jpeg',
            uses: 'Version Control',
            tagline: 'GitHub is a web-based hosting service for version control using git. It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features.',
            homepage: 'https://github.com/',
            doc: 'https://docs.github.com/en',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Sass',
            image: '/images/sass.jpg',
            uses: 'CSS Preprocessor',
            tagline: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. Sass is a stylesheet language that\'s compiled to CSS. It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.',
            homepage: 'https://sass-lang.com/',
            doc: 'https://sass-lang.com/documentation',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Webpack',
            image: '',
            uses: 'Module Bundler',
            tagline: 'Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.',
            homepage: 'https://webpack.js.org/',
            doc: 'https://webpack.js.org/concepts/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Html5',
            image: '/images/html5.webp',
            uses: 'Markup Language',
            tagline: 'HTML5 is the fifth and current major version of the HTML standard, and subsumes XHTML, which was the previous version of HTML. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.',
            homepage: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
            doc: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'CSS3',
            image: '',
            uses: 'Style Sheet Language',
            tagline: 'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.',
            homepage: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
            doc: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Docker',
            image: '/images/docker.png',
            uses: 'Containerization',
            tagline: 'Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.',
            homepage: 'https://www.docker.com/',
            doc: 'https://docs.docker.com/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },
        {
            name: 'Kubernetes',
            image: '/images/kubernetes.png',
            uses: 'Container Orchestration',
            tagline: 'Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications. It groups containers that make up an application into logical units for easy management and discovery.',
            homepage: 'https://kubernetes.io/',
            doc: 'https://kubernetes.io/docs/home/',
            video: 'https://www.youtube.com/watch?v=9Q9J8xkOjw0'
        },

    ]

    return (
        <div className="max-w-6xl mx-auto" id="Tools-and-Frameworks">
            <div className="flex flex-col items-center max-w-2xl md:mx-auto mx-2">
                <input type="text" placeholder="Search" className="text-teal-500 border-2 border-teal-500 rounded-md p-4 px-4 my-4 hover:border-teal-600 focus:border-teal-600 focus:outline-none w-full md:focus:w-9/12 md:w-7/12"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <p className="p-4 text-teal-500 text-2xl font-bold tracking-widest">Tools and Frameworks</p>
            <div className="flex flex-wrap justify-start">
                {tools.filter((tool) => {
                    if (query == "") {
                        return tool
                    } else if (tool.name.toLowerCase().includes(query.toLowerCase())) {
                        return tool
                    }
                }).map((tool) => (
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={tool.name}>
                        {
                            tool.image ? <div className='w-full object-contain rounded-t-md h-48 bg-white relative overflow-hidden'><Image src={tool.image} className="" fill alt={''} /> </div> :
                                <div className="w-full object-contain rounded-t-md h-48 flex flex-col justify-center items-center bg-white text-teal-500 text-2xl font-bold tracking-widest">{tool.name}</div>
                        }
                        <div className="shadow-md rounded-b-md p-4 space-y-2 bg-white">
                            <h3 className="text-xl font-bold text-teal-500">{tool.name}</h3>
                            <p className="bg-teal-500 text-white w-max px-2 py-1 rounded-md">{tool.uses}</p>
                            <p className="text-gray-500">{tool.tagline}</p>
                            <div className="flex flex-row justify-around">
                                <Link href={tool.homepage} className="text-teal-500 hover:text-teal-600">
                                    <FaHome className="text-2xl mx-2" />
                                </Link>
                                <Link href={tool.doc
                                } className="text-teal-500 hover:text-teal-600">
                                    <FaBook className="text-2xl mx-2" />
                                </Link>
                                <Link href={tool.video
                                } className="text-teal-500 hover:text-teal-600">
                                    <FaYoutube className="text-2xl mx-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}