import React, { useState, useEffect } from "react";
import Button from "./components/Button";

const getLocalItem = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [text, setText] = useState(); //to type text in inputbox

  const [task, setTask] = useState(getLocalItem()); //to store the submitted data in an array

  const changeText = (e) => {
    //console.log(e);
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text) {
      console.log("submitted");
      setTask([...task, text]); //storing in an array without losing previous data

      setText("");
    }
  };

  const removeTask = (a) => {
    const finalData = task.filter((curEle, index) => {
      return index !== a;
    });

    setTask(finalData);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(task));
  }, [task]);

  return (
    <div className="bg-gray-100">
      <div className="text-gray-900 text-center p-5 font-extrabold">
        TODO-List
        <div className="flex justify-center mt-4 pb-5 ml-3">
          <form
            onSubmit={submitHandler}
            action=""
            className="bg-white shadow-md rounded-sm sm:p-36 sm:pt-6 lg:p-60 lg:pt-10 min-h-screen border-2"
          >
            <div className="m-10">
              <input
                type="text"
                value={text}
                onChange={changeText}
                placeholder="type here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-100 focus:shadow-sm"
              />
            </div>

            <div className="flex justify-center">
              <Button btn="Add Task" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 justify-items-center">
              {task.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="mx-3 text-sm space-y-2 bg-red-100 p-2 rounded-xl"
                  >
                    <div>{value}</div>
                    <div>
                      <button onClick={() => removeTask(index)}> X </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
