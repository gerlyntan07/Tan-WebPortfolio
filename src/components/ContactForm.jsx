import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = ({ labelStyle, inputStyle, toastTheme, submitStyle }) => {
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
            <form ref={form} onSubmit={sendEmail} className='flex flex-col w-[90%] items-start justify-center lg:w-[85%]'>
                <label className={labelStyle}>Name</label>
                <input style={{fontFamily: 'Roboto Mono'}} className={inputStyle} type="text" value={name} name="from_name" placeholder="Your name" onChange={(e) => setName(e.target.value)} required />
                
                <label className={labelStyle}>Email</label>
                <input style={{fontFamily: 'Roboto Mono'}} className={inputStyle} type="email" value={email} name="from_email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} required />
                
                <label className={labelStyle}>Message</label>
                <textarea style={{fontFamily: 'Roboto Mono'}} className={inputStyle} name="message" rows={5} value={msg} onChange={(e) => setMsg(e.target.value)} required />
                
                <div className='flex w-full items-center justify-center'>
                    <input style={{fontFamily: 'Roboto Mono'}} className={submitStyle} type="submit" value={loading ? 'SENDING...' : 'SUBMIT'} disabled={loading} />
                </div>                
            </form>
            <ToastContainer theme={toastTheme} newestOnTop={true} hideProgressBar={true} />
        </>
    );
};

export default ContactForm;
