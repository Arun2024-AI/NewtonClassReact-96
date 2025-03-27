import React, {useState} from 'react';
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
//   // let count = 0;
//   let [count, setCount] =useState(0)
//   const incrementClickHandle = () => {
//     setCount ((prev) => {
//       return prev + 1;
//     })
//   }

//   const decrementClickHandle = () => {
//     setCount((prev) => {
//       return prev-1
//     })

//   }
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






export default function App() {
  const [text, setText] = useState('');
  const inputChangeHandler = function (event) {
    setText(event.target.value);
  };

  return (
    <div>
      <input onChange={inputChangeHandler} type="text" />
      <h1>{text}</h1>
    </div>
  );
}