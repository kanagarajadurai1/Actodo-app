import { useState } from "react";

function AddTodoForm({ activityArr, setActivityArr }) {

  const [newActivity, setNewActivity] = useState("");
  const [newTime, setNewTime] = useState("");

  function handleAdd() {
    if (newActivity.trim() === "" || newTime.trim() === "") return;

    const newItem = {
      id: Date.now(), 
      activity: newActivity,
      time: newTime
    };

    setActivityArr([...activityArr, newItem]);

    // clear input
    setNewActivity("");
    setNewTime("");
  }

  return (
    <div>
      <h1 className="text-xl font-semibold mb-2">Manage Activities</h1>

      <input
        type="text"
        placeholder="Next Activity!!!"
        value={newActivity}
        onChange={(e) => setNewActivity(e.target.value)}
        className="border p-2 mr-2"
      />

      <input
        type="text"
        placeholder="Time (e.g 08:00 PM)"
        value={newTime}
        onChange={(e) => setNewTime(e.target.value)}
        className="border p-2 mr-2"
      />

      <button
        onClick={handleAdd}
        className="bg-black text-white px-3 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodoForm;