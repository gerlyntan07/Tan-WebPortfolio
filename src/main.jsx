import "./index.css";
import App from "/src/App.jsx";
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <App />
    </HelmetProvider>
);
