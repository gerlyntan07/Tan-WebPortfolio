import { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Metrics = lazy(() => import('./components/MetricsBanner'));

function App() {
    const [darkMode, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark(prevMode => !prevMode);
    }

    {/* SEO */ }
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Gerlyn Tan",
        "jobTitle": "Front-End Developer",
        "url": "https://tan-web-portfolio.vercel.app",
        "image": "https://tan-web-portfolio.vercel.app/src/assets/portfolio-logo.png",
        "sameAs": [
            "https://github.com/gerlyntan07",
            "https://www.facebook.com/gerlyn.tan.50",
            "https://www.instagram.com/mehehehe__/"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "description": "Portfolio of a front-end developer and UI designer specializing in React.js."
    };

    return (
        <main className={`${darkMode ? 'bg-darkBackground' : 'bg-lightBG'} m-0 p-0`}>
            <Helmet>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
                <title>Gerlyn Tan | Portfolio</title>
                <meta name="robots" content="index, follow" />
                <meta property="og:image" content="https://tan-web-portfolio.vercel.app/src/assets/portfolio-logo.png" />
                <meta property="og:url" content="https://tan-web-portfolio.vercel.app/" />
                <meta property="og:title" content="Gerlyn Tan | Front-End Developer" />
                <meta property="og:description" content="Portfolio of a skilled Front-End Developer and UI Designer with expertise in React.js." />
            </Helmet>

            <Suspense>
                <Header />
                <Hero />
                <Metrics />
            </Suspense>            
        </main>
    );
}

export default App;
