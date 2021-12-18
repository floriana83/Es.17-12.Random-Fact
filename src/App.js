import './App.css';
import Home from "./pages/Home/index.jsx";
import { useReducer } from 'react';


const INIT_STATE = {
text: []
}

const reducer =(state, action) =>{
  switch(action.type){
    case "add":
      return {...state, text: "lorem ipsum" };
    case "remove":
      return {...state, fact: [] };
      default:
          return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
 
  return (
    <div className="App">
     <Home data={state.text}/>
     
      <button onClick={() => dispatch ({ type:"add"})}>Add Fact</button>
      <button onClick={() => dispatch ({ type:"remove"})}>Remove Facts</button>

</div>     
    
    );
}

export default App;
