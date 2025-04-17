// import React, {useState,useEffect,useRef} from 'react';
// import './style.css';
// import { useRef } from 'react/cjs/react.production.min';

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




// export default function App(){
//   const [show, setShow] = useState(true)
//   return (
//     <div>
//       {show && <Hello/>}
//       <button onClick={() => setShow(true)}>Show</button>
//       <button onClick={() => setShow(false)}>Hide</button>
//     </div>
//   )
// }
// function Hello() {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log("Hello")
//     },1000);
//     console.log("component mounted");
//     return () => {
//       console.log("component unmounted");
//       clearInterval(intervalId)
//     }
//   }, [])
//   return <h1>Hello Newton</h1>
// }




// export default function App(){
//   const h1ref = useRef();    //{current: {value}}
//   const inputref =useRef();
//   return <div>
//     <h1 ref = {h1ref}>Hello</h1>
//     <input onChange={() => 
//     console.log(inputref.current.value)}/>
//   </div>
// }




// import React, { useRef } from "react";

// export default function App() {
//   const homeRef = useRef();
//   const aboutRef = useRef();
//   const contactRef = useRef();

//   const handleClick = (section) => {
//     // Hide all
//     homeRef.current.style.display = "none";
//     aboutRef.current.style.display = "none";
//     contactRef.current.style.display = "none";

//     // Show selected
//     if (section === "home") homeRef.current.style.display = "block";
//     if (section === "about") aboutRef.current.style.display = "block";
//     if (section === "contact") contactRef.current.style.display = "block";
//   };

//   return (
//     <div>
//       <div className="buttons">
//         <button onClick={() => handleClick("home")}>Home</button>
//         <button onClick={() => handleClick("about")}>About</button>
//         <button onClick={() => handleClick("contact")}>Contact</button>
//       </div>

//       <div className="content">
//         <h1 ref={homeRef}>Home</h1>
//         <h1 ref={aboutRef} style={{ display: "none" }}>About</h1>
//         <h1 ref={contactRef} style={{ display: "none" }}>Contact</h1>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
export default function App() {
  const [left, setLeft] = useState(100);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeft((prev) => {
        scrollTo(prev + 2 - 100, 0);
        return prev + 2;
      });
    }, 50);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div
      style={{
        height: '100vh',
        width: '20000vw',
        background:
          "url('data:image/jpeg;base64,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')",
        backgroundSize: 'contain',
      }}
    >
      <img
        style={{
          width: 150,
          height: 100,
          marginTop: 50,
          marginLeft: left,
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsROjCWauRhkmVWtXgY45tlk0Ks159vxKKA&s"
      />
    </div>
  );
}

