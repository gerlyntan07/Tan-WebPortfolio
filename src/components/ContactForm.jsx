import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = ({darkMode}) => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_lvaypj2', 'template_n1qgo2v', form.current, {
                publicKey: 'Z9nUoyrtbdrLWu_kT',
            })
            .then(
                () => {
                    toast.success('Email sent successfully!', {
                        position: 'bottom-right',
                        autoClose: 3000, // Close after 3 seconds
                    });
                    setName('');
                    setEmail('');
                    setMsg('');
                },
                (error) => {
                    toast.error(`Failed to send email: ${error}`, {
                        position: 'bottom-right',
                        autoClose: 5000, // Close after 5 seconds
                    });                    
                }
            );
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className='contactFormContainer'>
                <label className={`contactLbl ${darkMode ? 'darkTextColor': ''}`}>Name</label>
                <input className={`contactInput ${darkMode ? 'darkContactInput' : 'lightContactInput'}`} type="text" value={name} name="from_name" placeholder='Your name' onChange={(e) => setName(e.target.value)} />
                <label className={`contactLbl ${darkMode ? 'darkTextColor': ''}`}>Email</label>
                <input className={`contactInput ${darkMode ? 'darkContactInput' : 'lightContactInput'}`} type="email" value={email} name="from_email" placeholder='Your email' onChange={(e) => setEmail(e.target.value)} />
                <label className={`contactLbl ${darkMode ? 'darkTextColor': ''}`}>Message</label>
                <textarea className={`contactInput-txtArea ${darkMode ? 'darkContactInput' : 'lightContactInput'}`} name="message" value={msg} onChange={(e) => setMsg(e.target.value)} />
                <input className='submitContactForm' type="submit" value="SUBMIT" />
            </form>
            <ToastContainer />
        </>
    );
};

export default ContactForm;
