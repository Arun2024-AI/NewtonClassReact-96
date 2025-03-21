import React from 'react';
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

export default function App() {
  const students = ['s1', 's2', 's3'];
  const studentselements = [];
  for (let i = 0; i < students.length; i++) {
    studentselements.push(<h1>{students[i]}</h1>);
  }
  
  return <div>{studentselements}</div>;

}
