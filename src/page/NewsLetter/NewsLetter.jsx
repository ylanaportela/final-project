import { useState } from "react"
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

import './newsletter.css'
import ImageNews from "../../assets/Newsletter.svg"


const NewsLetter = () => {
    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [notifications, setNotifications] = useState(true)
    // const [error, setError] = useState({ cpf: { valido: true, texto: "" } })

    const functionSubmit = (e) => {
        e.preventDefault()
        console.log()

    }


    return (

        <>
            <section className="container-newsletter"  id="newsletter">
                <div className="newsletter-title">
                    <h2>NewsLetter</h2>
                    <p>Interassado em receber em primeira mão as novas publicação do TechLovers? <br /> Então, cadastre-se e receba as novidade na sua caixa de email!</p>

                </div>
                <div className="container-form">
                    <div className="newsletter-image">
                        <img src={ImageNews} alt="Inbox"/>
                    </div>
                    <form onSubmit={functionSubmit}>
                        <TextField
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                            value={name}
                            id="name"
                            label="Nome"
                            variant="outlined"
                            margin="normal"
                            color="secondary"
                            fullWidth
                        />
                        <TextField
                            onChange={(event) => {
                                setLastName(event.target.value);
                            }}
                            value={lastname}
                            id="Sobrenome"
                            label="Sobrenome"
                            variant="outlined"
                            margin="normal"
                            color="secondary"
                            fullWidth
                        />

                        <TextField
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            // error={!error.cpf.valido}
                            // helperText={error.cpf.texto}
                            value={email}
                            id="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            color="secondary"
                            fullWidth
                        />

                        <FormControlLabel
                            label="Notificações"

                            control={
                                <Switch
                                    onChange={(event) => {
                                        setNotifications(event.target.checked);
                                    }}
                                    name="novidades"
                                    color="secondary"
                                    checked={notifications}
                                ></Switch>
                            }
                        />

                        <Button type="submit" variant="outlined" color="secondary" className="button">
                            Cadastrar-se
                        </Button>

                    </form>
                </div>
            </section>
        </>
    )
}

export default NewsLetter