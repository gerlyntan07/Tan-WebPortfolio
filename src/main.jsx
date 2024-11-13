import "./index.css";
import App from "/src/App.jsx";
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactDOM.createRoot(document.getElementById('root')).render(
    <SpeedInsights>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </SpeedInsights>
);
