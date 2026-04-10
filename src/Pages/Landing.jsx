import { Link } from "react-router-dom";

function Landing({ users }) {
  const totalUsers = users?.length || 0;

  return (
    <div className="bg-black p-10 min-h-screen">
      <div className="bg-[#EFEFEF] p-10 rounded-md">
        <h1 className="text-2xl font-bold">Welcome to the Landing Page</h1>
        <p className="text-sm font-semibold mt-2">Total Stored Users: {totalUsers}</p>

        {users?.length ? (
          <ul className="space-y-3 mt-5">
            {users.map((user, index) => (
              <li key={`${user.username}-${index}`} className="w-60 border-black border-2 p-2 rounded-md bg-transparent">
                <p className="text-sm"><strong>Name:</strong> {user.username}</p>
                <p className="text-sm"><strong>Password:</strong> {user.password}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 mt-5">No users found.</p>
        )}

        <Link
          to="/"
          className="inline-block w-60 text-center bg-violet-500 text-white p-2 rounded-md mt-5"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}

export default Landing;
