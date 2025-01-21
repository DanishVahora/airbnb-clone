import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

const RegisterPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function registerUser (ev){
        ev.preventDefault()
        axios.post('/register', {
            name,
            email,
            password
        })
    }
    return (
        <>
            <div className="grow flex items-center mt-4 justify-around">
                <div>
                    <h1 className="text-4xl text-center mb-4">Register</h1>
                    <form action="" className="max-w-md mx-auto mb-4">
                        <input type="text" placeholder="userName"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        <input type="email" placeholder="your@gmail.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        <input type="password" placeholder="your password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        <button className="primary" onClick={registerUser}>Register</button>
                        <div className="text-center py-2 text-gray-500">
                            Already have an account? <Link className="underline text-black" to={'/login'}>Login Now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage