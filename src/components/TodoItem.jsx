function TodoItem({ item, index, activityArr, setActivityArr }) {

  function handleDelete(id) {
    const updatedList = activityArr.filter((each) => each.id !== id);
    setActivityArr(updatedList);
  }

  return (
    <div className="flex justify-between items-center mt-2">
      <p>
        {index + 1}. {item.activity} - {item.time}
      </p>

      <button 
        onClick={() => handleDelete(item.id)} 
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;