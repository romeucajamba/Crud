import { useState, useEffect } from "react";
import axios from "axios";//Para consumo de API
import { useNavigate, useParams } from "react-router-dom";


export default function EditUser() {

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    //Consumindo API//
    useEffect(() => {
        getUser();
    }, []);


    function getUser() {

        axios.get(`http://localhost:80/api/user/${id}`).then(function (response) {
            console.log(response.data);
            setInputs(response.data);
        });

    }


    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:80/api/user/${id}/edit`, inputs).then(function (response) {
            console.log(response.data);
            navigate('/')
        })//Link para se conectar API// No meu caso está se conectando a porta 80 do apach e o comando inputs para pegar os valores e enviar para o BD;
        //Mostrar os valores dos inputs
    }

    return (
        <div>
            <h3>Edição de suários</h3>
            <form onSubmit={handleSubmit}>
                <table cellPadding="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Nome</label>
                            </th>
                            <td>
                                <input type="text" value={inputs.name} name="name" placeholder="Insira seu nome" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Email</label>
                            </th>
                            <td>
                                <input type="email" value={inputs.email} name="email" placeholder="Insira seu email" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Telemóvel</label>
                            </th>
                            <td>
                                <input type="number" name="number" value={inputs.mobile} placeholder="Insira seu contacto" onChange={handleChange} />
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