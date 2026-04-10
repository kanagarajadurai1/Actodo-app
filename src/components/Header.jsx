function Header({ userName, onClose }) {

return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold">Hello {userName}!!</h1>
        <p className="text-gray-700">Welcome to Actodo, your task management app.</p>
      </div>
      <button
        onClick={onClose}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Close
      </button>
    </div>
)
}
export default Header;