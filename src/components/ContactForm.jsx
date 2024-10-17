import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
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
                    console.log('SUCCESS!');
                    setName('');
                    setEmail('');
                    setMsg('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" value={name} name="from_name" placeholder='Your name' onChange={(e) => setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={email} name="from_email" placeholder='Your email' onChange={(e) => setEmail(e.target.value)} />
            <label>Message</label>
            <textarea name="message" value={msg} onChange={(e) => setMsg(e.target.value)} />
            <input type="submit" value="Send" />
        </form>

    );
};

export default ContactForm;