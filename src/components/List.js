import React, { useState } from "react";

function List() {
  const data = [
    { id: 1, name: "Dileepa", age: 24 },
    { id: 2, name: "Lakmina", age: 26 },
    { id: 3, name: "Bandara", age: 28 },
    { id: 4, name: "Jayasanka", age: 30 },
  ];

  const [birthdays, setBirthdays] = useState(data);

  const dataItems = birthdays.map((item) => (
    <p key={item.id} className="bg-white mb-2 p-2">
      {item.name} <strong className="absolute right-5">Age:{item.age}</strong>
    </p>
  ));
  return (
    <div>
      <div className="flex flex-col max-w-md bg-red-200 h-[500px] mx-auto rounded-md p-3 border-box relative">
        <div className="topic text-red-700 mx-auto font-bold bg-red-300 p-4 rounded-[8px] mb-3  ">
          Birthday App
        </div>
        <div className="list-container">
          {dataItems ? <>{dataItems}</> : <>No Birthdays today</>}
        </div>
        <div className="bg-orange-400 font-bold text-center p-3 ">
          {/* Number of birthdays:{birthdays.length} */}
          {birthdays.length ? (
            <>Number of birthdays:{birthdays.length}</>
          ) : (
            <>Number of birthdays:0</>
          )}
        </div>
        <button
          className="p-3 bg-pink-500 mt-3 text-white mx-auto w-24 rounded-xl hover:bg-red-500"
          onClick={() => {
            setBirthdays([]);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default List;
