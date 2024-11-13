import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = ({ darkMode }) => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm('service_lvaypj2', 'template_n1qgo2v', form.current, {
                publicKey: 'Z9nUoyrtbdrLWu_kT',
            })
            .then(
                () => {
                    toast.success('Message sent! I will get back to you through the email account you sent as soon as possible.', {
                        position: 'top-center',
                        autoClose: 5000,
                    });
                    setName('');
                    setEmail('');
                    setMsg('');
                    setLoading(false); 
                },
                (error) => {
                    toast.error(`Failed to send email: ${error}`, {
                        position: 'bottom-right',
                        autoClose: 5000,
                    });
                    setLoading(false);
                }
            );
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className='contactFormContainer'>
                <label className={`contactLbl ${darkMode ? 'darkTextColor' : ''}`}>Name</label>
                <input className={`contactInput ${darkMode ? 'darkContactInput' : 'lightContactInput'}`} type="text" value={name} name="from_name" placeholder="Your name" onChange={(e) => setName(e.target.value)} required />
                
                <label className={`contactLbl ${darkMode ? 'darkTextColor' : ''}`}>Email</label>
                <input className={`contactInput ${darkMode ? 'darkContactInput' : 'lightContactInput'}`} type="email" value={email} name="from_email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} required />
                
                <label className={`contactLbl ${darkMode ? 'darkTextColor' : ''}`}>Message</label>
                <textarea className={`contactInput-txtArea ${darkMode ? 'darkContactInput' : 'lightContactInput'}`} name="message" value={msg} onChange={(e) => setMsg(e.target.value)} required />
                
                <input className="submitContactForm" type="submit" value={loading ? 'SENDING...' : 'SUBMIT'} disabled={loading} />
            </form>
            <ToastContainer theme={darkMode ? 'dark' : 'light'} newestOnTop={true} hideProgressBar={true} />
        </>
    );
};

export default ContactForm;
