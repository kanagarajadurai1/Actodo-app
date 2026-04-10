import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp({ users, setUsers }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function handleSignup() {

    if (!username || !password) {
      alert("Fill all fields ❌");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password mismatch ❌");
      return;
    }

    const exists = users.find(
      (user) => user.username === username
    );

    if (exists) {
      alert("User already exists ❌");
      return;
    }

    const newUser = { username, password };

    setUsers([...users, newUser]);

    alert("Signup Success ✅");

    navigate("/");
  }

  return(
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 rounded-md">

        <h1 className="text-2xl font-bold">Hey Hi!!</h1>
        <p className="text-sm text-gray-500">Welcome to SignUp Page</p>

        <div className="flex flex-col gap-5 mt-5">

          <input
            type="text"
            placeholder="Enter your name"
            className="w-52 border-black border-2 p-2 rounded-md bg-transparent"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-52 border-black border-2 p-2 rounded-md bg-transparent"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm your password"
            className="w-52 border-black border-2 p-2 rounded-md bg-transparent"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            className="w-52 bg-orange-600 text-white p-2 rounded-md"
            onClick={handleSignup}
          >
            Sign Up
          </button>

        </div>

        <p className="text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to="/" className="text-violet-500">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default SignUp;