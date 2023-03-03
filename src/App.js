import { useSelector, useDispatch } from 'react-redux';
import './App.css';


function App() {
 
  const userAct = useSelector (store => store.users.user);
  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch({type: "CHANGE_TEXT", payload: "Hello"})
  }

  return (
    <div className="App">
      <p onClick={()=> {handleClick()}}>fghj</p>
      <p>{userAct}</p>
    </div>
  );
}

export default App;
