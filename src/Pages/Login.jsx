import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const [eusername, setEusername] = useState("");
    const [epassword, setEpassword] = useState("");
    const [ruser,setRuser] = useState(true);

    const users = props.users;
    



    function handleUInput(event) {
        setEusername(event.target.value);
    }
    function handlePInput(event) {
        setEpassword(event.target.value);
    }

    function checkUser() {
        const matchedUser = users.find(
            (item) => item.username === eusername && item.password === epassword
        );

        if (matchedUser) {
            setRuser(true);
            console.log("Login Successful");
            navigate("/landing", {state:{user:eusername}});
            return;
        }

        setRuser(false);
    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 rounded-md">

                <h1 className="text-2xl font-bold">Hey Hi!!</h1>
                {ruser ? <p className="text-sm text-gray-500">Welcome to Login Page</p> : <p className="text-sm text-red-500">Please SignUp Before Login</p>}

                <div className="flex flex-col gap-5 mt-5">
                    <input type="text" placeholder="Enter your name" onChange={handleUInput} className="w-52 border-black border-2 p-2 rounded-md bg-transparent" />
                    <input type="password" placeholder="Enter your password" onChange={handlePInput} className="w-52 border-black border-2 p-2 rounded-md bg-transparent" />
                    <button className="w-52 bg-violet-500 text-white p-2 rounded-md" onClick={checkUser}>Login</button>
                </div>
                <p className="text-sm text-gray-500 mt-5">Don't have an account? <Link to="/signup" className="text-violet-500">Sign Up</Link></p>



            </div>
        </div>
    )
}

export default Login;