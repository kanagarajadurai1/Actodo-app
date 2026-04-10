import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoConatiner";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function TodoDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInUser = location.state?.user || "User";

  return (
    <div className="bg-black p-6 md:p-16 min-h-screen">
      <div className="bg-[#EFEFEF] p-6 md:p-10 rounded-lg max-w-6xl mx-auto">
        <Header userName={loggedInUser} onClose={() => navigate("/")} />
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <Card bgColor="bg-pink-500" title={"📅Today"} subtitle={"5th April"} />
          <Card bgColor="bg-blue-500" title={"🕒 Current Time"} subtitle={"10:51:02"} />
          <Card bgColor="bg-orange-500" title={"💻Build with"} subtitle={"React JS"} />
        </div>
        <TodoContainer />
      </div>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("actodo_users");
    if (!savedUsers) return [];

    try {
      return JSON.parse(savedUsers);
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("actodo_users", JSON.stringify(users));
  }, [users]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} />} />
        <Route path="/signup" element={<SignUp users={users} setUsers={setUsers} />} />
        <Route path="/landing" element={<TodoDashboard />} />
        <Route path="/todo" element={<TodoDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
