import TodoItem from "./TodoItem";

function TodoList({ activityArr, setActivityArr }) {

  return (
    <div className="bg-[#bdb4ea] p-6 mt-10 rounded-lg flex-grow align-top">
      <h1 className="text-4xl font-medium">Today's Activities</h1>

      {
        activityArr.length === 0 && (
          <p className="mt-2">You have no activities for today.</p>
        )
      }

      {
        activityArr.map((item, index) => (
          <TodoItem 
            key={item.id} 
            item={item} 
            index={index} 
            activityArr={activityArr} 
            setActivityArr={setActivityArr} 
          />
        ))
      }

    </div>
  );
}

export default TodoList;