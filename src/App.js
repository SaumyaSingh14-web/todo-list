function App() {
  return (
    <div className="App bg-gray-100">
      <div className="text-gray-900 text-center p-14 font-extrabold">
        TODO-List
        <div className="flex justify-center mt-4 pb-5">
          <form
            action=""
            className="bg-white shadow-md rounded-sm sm:p-36 sm:pt-6 lg:p-60 lg:pt-10 min-h-screen border-2"
          >
            <div className="m-10">
              <input
                type="text"
                placeholder="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-sm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
