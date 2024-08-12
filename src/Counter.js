// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}!</h1>;
//   }
// }

// function Greeting(props) {
//     return <h1>Hello, {props.name}!</h1>;
//   }

//   function App() {
//     return (
//       <div>
//         <Greeting name="Alice" />
//         <Greeting name="Bob" />
//       </div>
//     );
//   }

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Counter;
