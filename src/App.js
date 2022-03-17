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
    console.log("submitted");
    e.preventDefault();
    setTask([...task, text]); //storing in an array without losing previous data

    setText("");
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
    <div className="App bg-gray-100">
      <div className="text-gray-900 text-center p-14 font-extrabold">
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

            <div className="">
              {task.map((value, index) => {
                return (
                  <div>
                    <>
                      <div className="columns-6 my-2" key={index}>
                        {value}
                      </div>
                      <div className="columns-6 my-2">
                        <button onClick={() => removeTask(index)}> X </button>
                      </div>
                    </>
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
