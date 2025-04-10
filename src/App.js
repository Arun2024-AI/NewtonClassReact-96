import React, {useState,useEffect} from 'react';
import './style.css';

// export default function App() {
//   const text = "NSTians"
//   return (
//     <div>
//       <h1>Hello {text}</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

// export default function App() {
//   const isloggedin = "NSTians"
//   return (
//     <div>
//       <div>{isloggedin ? <h1>Welcome</h1> :
//       <h1>Please sign in</h1>}</div>
//     </div>
//   );
// }

// export default function App() {
//   const isloggedin = false;
//   return (
//     <div>
//       <div>{isloggedin ? <h1>Welcome</h1> :
//       <h1>Please sign in</h1>}</div>
//     </div>
//   );
// }

// export default function App() {
//   const isloggedin = false;
//   if(isloggedin){
//     return <h1>Welcome</h1>
//   } else{
//     return <h1>Please sign in</h1>
//   }

// }

// export default function App() {
//   const weatherCondition = "Rainy"
//   switch(weatherCondition){
//     case("sunny"): {
//       return <h1>Sunny</h1>
//     }
//     case("Rainy"): {
//       return <h1>Rainy</h1>
//     }
//     default: {
//       return <h1>All</h1>
//     }
//   }
// }

// export default function App() {
//   const isloggedin = true;
//   return <div>{isloggedin && <h1>Welcome</h1>}</div>
// }

// export default function App() {
//     const user = {
//       name: "Arun"
//     };

//   return <h1>{user.name || 'anonymous user'}</h1>
// }

// export default function App() {
//   function fetchUser() {
//     return {
//       name: 'Arun'
//     };
//   }

//   const user = fetchUser();

//   return <h1>{user.name}</h1>;
// }

// export default function App(){
//   const students = ['s1','s2','s3']
//   return <div>{
//     [<h1>s1</h1>,<h1>s3</h1>]}</div>
// }

// export default function App() {
//   const students = ['s1', 's2', 's3'];
//   const studentselements = [];
//   for (let i = 0; i < students.length; i++) {
//     studentselements.push(<h1>{students[i]}</h1>);
//   }
  
//   return <div>{studentselements}</div>;

// }



// export default function App() {
//   const students = ['s1', 's2', 's3'];
//   const studentselements = [];
//   for (let i = 0; i < students.length; i++) {
//     studentselements.push(<h1>{students[i]}</h1>);
//   }
  
//   return <div>{studentselements}</div>;

// }



// const arrOfstr = ['mango', 'orange', 'apple', 'hello'];
// export default function App() {
//   const arr = arrOfstr.map((str) => <h2>{str}</h2>);
//   return <div className="App">{arr}</div>;
// }


// export default function App() {
//   return (
//     <div>
//       <button onclick = {() => 
//        alert ("Button Click")} >Click Me</button>
//     </div>
//   );
// }




// export default function App() {
//   let count=0
//   return (
//     <div>
//       <button
//       onClick={() => {
//         console.log(count)
//         count+=1
//       }}
//       >
//         Click Me

//       </button>
//     </div>
//   )
// }



// export default function App() {
//   return (
//     <div>
//       <input
//         onChange={(event) => {
//           console.log(event.target.value);
//         }}
//         type="text"
//       />
//     </div>
//   );
// }


// export default function App() {
//   let count = 0;
//   let intervalId = null;

//   const startTimer = () => {
//     if (!intervalId) {
//       intervalId = setInterval(() => {
//         count += 1;
//         console.log(count);
//       }, 1000);
//     }
//   };

//   const stopTimer = () => {
//     clearInterval(intervalId);
//     intervalId = null;
//   };

//   return (
//     <div>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }



// export default function App() {
//   let [count, setCount] = useState(0);

//   const incrementClickHandle = () => {
//     setCount((prev) => prev + 1);
//   };

//   const decrementClickHandle = () => {
//     setCount((prev) => prev - 1);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={incrementClickHandle}>Add</button>
//       <button onClick={decrementClickHandle}>Sub</button>
//     </div>
//   );
// }




// export default function App() {
//   let count = 0;
//   setInterval(() => {
//     count+=1;
//     console.log(count);

//   },2000)
// }



// export default function App(){
//   return (
//     <div>
//       <input type='text'/>
//       <h1>A</h1>
//     </div>
//   )

// }


// export default function App() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input 
//         type="text" 
//         onChange={(e) => setText(e.target.value)} 
//       />
//       <h1>{text}</h1>
//     </div>
//   );
// }








// export default function App() {
//   const [text, setText] = useState('');
//   const inputChangeHandler = function (event) {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <input onChange={inputChangeHandler} type="text" />
//       <h1>{text}</h1>
//     </div>
//   );
// }



// export default function App() {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [sum, setSum] = useState(0);

//   const calculateSum = () => {
//     setSum(Number(num1) + Number(num2));
//   };

//   return (
//     <div>
//       <input 
//         type="number" 
//         onChange={(e) => setNum1(e.target.value)} 
//       />

      // {/* <br></br><br/> */}
//       <input 
//         type="number" 
//         onChange={(e) => setNum2(e.target.value)} 
//       />
//       {/* <br></br><br/> */}
//       <button onClick={calculateSum}>Calculate</button>
//       <h1>Sum:{sum}</h1>
//     </div>
//   );
// }




// export default function App() {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [result, setResult] = useState(0);
//   const [operation, setOperation] = useState("+");

//   const calculate = (op) => {
//     let res;
//     switch (op) {
//       case "+":
//         res = Number(num1) + Number(num2);
//         break;
//       case "-":
//         res = Number(num1) - Number(num2);
//         break;
//       case "*":
//         res = Number(num1) * Number(num2);
//         break;
//       case "/":
//         res = num2 !== 0 ? Number(num1) / Number(num2) : "Error";
//         break;
//       case "%":
//         res = num2 !== 0 ? Number(num1) % Number(num2) : "Error";
//         break;
//       default:
//         res = 0;
//     }
//     setOperation(op);
//     setResult(res);
//   };

//   return (
//     <div>
//       <input 
//         type="number" 
//         onChange={(e) => setNum1(e.target.value)} 
//       />
//       <br></br><br/>
//       <input 
//         type="number" 
//         onChange={(e) => setNum2(e.target.value)} 
//       />
//       <br></br><br/>
//       <button onClick={() => calculate("+")}>Add</button>
//       <br></br><br/>
//       <button onClick={() => calculate("-")}>Subtract</button>
//       <br></br><br/>
//       <button onClick={() => calculate("*")}>Multiply</button>
//       <br></br><br/>
//       <button onClick={() => calculate("/")}>Divide</button>
//       <br></br><br/>
//       <button onClick={() => calculate("%")}>Modulo</button>
//       <br></br><br/>
//       <h1>{num1} {operation} {num2} = {result}</h1>
//     </div>
//   );
// }





// export default function App() {
//   const [left, setLeft] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLeft((prev) => (prev < 100 ? prev + 1 : prev));
//     }, 1000);

//     return () => clearInterval(interval); 
//   }, []);

//   return (
//     <div
//       style={{
//         height: "50px",
//         width: "50px",
//         position: "fixed",
//         top: 0,
//         left: `${left}px`, 
//         backgroundColor: "red",
//       }}
//     ></div>
//   );
// }



// export default function App() {
//   const [meassage,setMessage] =useState("Hello")

//   const handleMessage =()=>{
//     setMessage("buttton was click")

//   }
//   return (
//     <div>
//       <h1>{meassage}</h1>
//       <button onClick={handleMessage}>Arun</button>
//     </div>
//   )
// }



// import React, { useState } from "react";

// const ToDoApp = () => {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [search, setSearch] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   const handleAddOrUpdateTask = () => {
//     if (!title.trim() || !description.trim()) return;
//     if (editIndex !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[editIndex] = { title, description };
//       setTasks(updatedTasks);
//       setEditIndex(null);
//     } else {
//       setTasks([...tasks, { title, description }]);
//     }
//     setTitle("");
//     setDescription("");
//   };

//   const handleEditTask = (index) => {
//     setTitle(tasks[index].title);
//     setDescription(tasks[index].description);
//     setEditIndex(index);
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   const filteredTasks = tasks.filter(
//     (task) =>
//       task.title.toLowerCase().includes(search.toLowerCase()) ||
//       task.description.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
//       <h2>To-Do App</h2>
//       <input
//         type="text"
//         placeholder="Search tasks..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />
//       <input
//         type="text"
//         placeholder="Task Title..."
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />
//       <textarea
//         placeholder="Task Description..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />
//       <button onClick={handleAddOrUpdateTask} style={{ width: "100%", padding: "10px" }}>
//         {editIndex !== null ? "Update" : "Add"}
//       </button>
//       <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
//         {filteredTasks.map((task, index) => (
//           <li
//             key={index}
//             style={{
//               background: "#f4f4f4",
//               margin: "10px 0",
//               padding: "10px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <div>
//               <strong>{task.title}</strong>
//               <p>{task.description}</p>
//             </div>
//             <div>
//               <button onClick={() => handleEditTask(index)}>Edit</button>
//               <button onClick={() => handleDeleteTask(index)} style={{ marginLeft: "5px" }}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ToDoApp;






// export default function App(){
//   // function sum(a,b) {
//   //   return a + b;
//   // }

//   function button(text){
//     return <button style={{backgroundColor:"red"}}>{text}</button>
//   }



// return (
//   <div>
//     <Button text="click1"/>
//     <Button text="click2"/>
//     <Button text="click3"/>
//     {/* {button("click1")}
//     {button("click2")}
//     {button("click3")} */}
//   </div>
// )
// }

// function Button({text}) {
//   return <button style={{backgroundColor:"red"}}>{text}</button>
// }



// export default function App() {
//   return (
//     <div>
//       <Card 
//         imageUrl="https://www.w3schools.com/howto/img_avatar.png" 
//         name="Arun" 
//         jobtitle="Software Engineer" 
//       />
//     </div>
//   );
// }

// function Card({ imageUrl, name, jobtitle }) {
//   return (
//     <div>
//       <img src={imageUrl} alt={name} />
//       <h1>{name}</h1>
//       <p>{jobtitle}</p>
//       <Button text="Message" onClick={() => alert("Message clicked")} />
//       <Button text="Connect" onClick={() => alert("Connect clicked")} />
//       <Button text="Follow" onClick={() => alert("Follow clicked")} />
//     </div>
//   );
// }

// function Button({ text, onClick }) {
//   return <button onClick={onClick}>{text}</button>;
// }




// import React from 'react';
// import './style.css';
// import {Card} from './card.js';

// export default function App() {
//   return (
//     <div>
//       <Card
//         imgurl="https://www.w3schools.com/howto/img_avatar.png" 
//         name={'shivansh'}
//         jobTitle={'student'}
//       />
//     </div>
//   );
// }



// export function Card({ imgurl, name, jobTitle }) {
//   return (
//     <div>
//       <img src={imgurl}  />
//       <h1 >{name}</h1>
//       <p>{jobTitle}</p>
//       <Button text="message" clickHandler={() => {}} />
//       <Button text="Connect" clickHandler={() => {}} />
//       <Button text="Follow" clickHandler={() => {}} />
//     </div>
//   );
// }

// export function Button({ text, clickHandler }) {
//   return <button onClick={clickHandler}>{text}</button>;
// }



// export default function App() {
//   const [count ,setCount] = useState(0);              // count (s) -> 0, setCount -> update the state count 

//   let test= 0;         // test (v) -> 0 -> 1 // 1 -> 0
//   console.log(test);   // 0  // 0
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => {
//         setCount((prev) => prev + 1);
//         test += 1
//       }}> Increment
//       </button>
//     </div>
//   )
// }


// export default function App(){
//   const [count , section] =useState(0);
//   const [user ,setUser] =useState("")

//   useEffect(() => {
//     console.log("hello");
//   },[count,user]);
//   return (
//     <div>
//       <h1>Hello Stackblitz!</h1>
//       <button onClick={()=> setUser((prev)=> prev+1)}>increment</button>
//     </div>
//   )
// };


export default function App(){
  const [show, setShow] = useState(true)
  return (
    <div>
      {show && <Hello/>}
      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>
    </div>
  )
}
function Hello() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Hello")
    },1000);
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
      clearInterval(intervalId)
    }
  }, [])
  return <h1>Hello Newton</h1>
}



