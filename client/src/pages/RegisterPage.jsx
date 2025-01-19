import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <>
            <div className="grow flex items-center mt-4 justify-around">
                <div>
                    <h1 className="text-4xl text-center mb-4">Register</h1>
                    <form action="" className="max-w-md mx-auto mb-4">
                        <input type="email" placeholder="your@gmail.com" />
                        <input type="password" placeholder="your password" />
                        <button className="primary">Register</button>
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