import {
    TextField,
    Button,
} from "@mui/material";
import emailjs from 'emailjs-com';
import style from './contactForm.module.css';

export const ContactForm = () => {
   
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_6vns58g',
            'template_4nvv24p',
            e.target,
            'user_RYtXuv6D4I7c7LnKKsyzq')
            .then(res => {
                console.log('res:', res)
            })
            .catch( error => console.log(error));
    }
    return (
        <div className={style.form}>
            <form onSubmit={sendEmail}>
                <TextField
                    name="name"
                    type="text"
                    label="Nombre"
                    variant="outlined"
                />
                <TextField
                    name="email"
                    type="email"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    name="message"
                    type="text"
                    label="Dejame tu consulta"
                    variant="outlined"
                    multiline
                    rows={10}
                />
                <div>
                    <Button type="submit" variant="contained" color="primary">
                        Enviar
                    </Button>
                </div>
            </form>
        </div>
    );
}
