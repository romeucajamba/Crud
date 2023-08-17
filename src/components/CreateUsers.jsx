import { useState } from "react";
import axios from "axios";//Para consumo de API
import { useNavigate } from "react-router-dom";

export default function ListUsers() {

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:80/api/user/save', inputs).then(function (response) {
            console.log(response.data);
            navigate('/')
        })//Link para se conectar API// No meu caso está se conectando a porta 80 do apach e o comando inputs para pegar os valores e enviar para o BD;
        //Mostrar os valores dos inputs
    }

    return (
        <div>
            <h3>Usuários criados</h3>
            <form onSubmit={handleSubmit}>
                <table cellPadding="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Nome</label>
                            </th>
                            <td>
                                <input type="text" name="name" placeholder="Insira seu nome" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Email</label>
                            </th>
                            <td>
                                <input type="email" name="email" placeholder="Insira seu email" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Telemóvel</label>
                            </th>
                            <td>
                                <input type="number" name="number" placeholder="Insira seu contacto" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2" align="rigth">
                                <input type="submit" value="Guardar" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
