import { axios } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





export default function CreateUsers() {
    const [users, setUsers] = useState([]);

    //Consumindo API//
    useEffect(() => {
        getUsers();
    }, []);


    function getUsers() {

        axios.get('http://localhost:80/api/users/').then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        });

    }

    function deleteUser(id) {
        axios.delete(`http://localhost:80/api/user/${id}/delete`).then(function (response) {
            console.log(response.data);
            getUsers();
        })
    }

    return (
        < div >
            <h1>Lista de usuarios</h1>
            <table>
                <thead>
                    <tr>
                        Nome
                    </tr>
                    <tr>
                        Email
                    </tr>
                    <tr>
                        Mobile
                    </tr>
                    <tr>
                        Actions
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) => {
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`users/${user.id}/edit`}>Editar</Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div >
    )
}