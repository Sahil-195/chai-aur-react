import { useState } from 'react'
import './App.css'
import AddTodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {

  const [isEditable, setisEditable] = useState(false);
  const [editNanoId, seteditNanoId] = useState('0');
  const [editTodoMsg, seteditTodoMsg] = useState('');

  // console.log('editable from app : ',isEditable);
  // console.log('editNanoId from app : ',editNanoId);


  return (
    <>
      <h1>Learn about redux Toolkit</h1>
      <AddTodo
      isEditable={isEditable}
      oneditableChange = {setisEditable}
      editNanoId = {editNanoId}
      oneditNanoIdChange = {seteditNanoId}
      editTodoMsg = {editTodoMsg}
      oneditTodoMsgChange = {seteditTodoMsg}
      />
      <Todos 
      isEditable={isEditable}
      oneditableChange = {setisEditable}
      editNanoId = {editNanoId}
      oneditNanoIdChange = {seteditNanoId}
      oneditTodoMsgChange = {seteditTodoMsg}
      />
    </>
  )
}

export default App
