// import React from 'react'; 
import ReactDOM from 'react-dom';
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cocktiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "wheaten Terrier",
//     }),
//   ]);
// };

const App = () => {
return(  
  <div>
    <h1> Adopt me!</div>
    <Pet name="Luna" animal="Dog" breed="havanese" />
    <Pet name="Pepper" animal="Bird" breed="cockatiel" />
    <Pet name="Sudo" animal="Dog" breed="wheaten Terrier" />
  </div>
);
};



ReactDOM.render(<h1>fasdfasdhhfs</h1>, document.getElementById("root"));
