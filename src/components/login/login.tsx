'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import './login.css';
import { login } from '../../../services/apiService';
import SimpleSnackbar from '../../components/SnackBar';
import { useDispatch } from "react-redux";
import * as Actions from "./store/action";

interface login {
    userName: string;
    password: string;
}

const Login = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [form, setForm] = useState<login>({
        userName: "",
        password: ""
    })

    const [alert, setAlert] = useState({
        open: false,
        message: ""
    })

    const submit = (e: any) => {
        e.preventDefault()
        console.log("....form", form)

        dispatch(Actions.callLoginUser(form))


        // login({ ...form }).then((res) => {
        //     console.log("login api response==>>", res)
        //     // setAlert((pre) => ({ ...pre, message: "Login successful", open: true }))
        //     localStorage.setItem("user" , res.data.token)
        //     localStorage.setItem("userData" , res.data.data)
        //     // setTimeout(() => {
        //         setAlert({ message: "", open: false })
        //         router.push("/")
        //     // }, 3000);
        // }).catch((err) => {
        //     // setAlert((pre) => ({ ...pre, message: err.response.data.message, open: true }))
        //     console.log("login api error==>>", err)
        //     // setTimeout(() => {
        //     //     setAlert({ message: "", open: false })
        //     // }, 3000);
        // })


        // router.push('/about')
    }


    const handleSnackbarClose = () => {
        setAlert({ ...alert, open: false });
    };

    const handleClick = () => {
        // Show Snackbar
        setAlert((pre) => ({ ...pre, message: "Here is the message", open: true }))
    };



    const handleFormChange = (e: any) => {

        const { value, name } = e.target

        setForm({ ...form, [name]: value })
    }
    return (
        <div className="login-container">
            <SimpleSnackbar open={alert.open} message={alert.message} handleClose={handleSnackbarClose} />
            <h1>Login</h1>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={handleFormChange} type="text" placeholder="User Name" name="userName" value={form.userName} required />
                <input className="mt-2" onChange={handleFormChange} type="password" placeholder="Password" name="password" value={form.password} required />
                <button type="submit" className="mt-2" >Login</button>
                <button type="button" onClick={handleClick} className="mt-2" >click</button>

            </form>
            <div className="wave"></div>
        </div>
    );
}

export default Login