const LoginPage = () => {
    return (
        <>
            <div className="grow flex items-center mt-4 justify-around">
                <div>
                    <h1 className="text-4xl text-center mb-4">Login Page</h1>
                    <form action="" className="max-w-md mx-auto mb-4">
                        <input type="email" placeholder="your@gmail.com" />
                        <input type="password" placeholder="your password" />
                        <button className="primary">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage