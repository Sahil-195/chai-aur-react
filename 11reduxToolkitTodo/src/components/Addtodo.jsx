import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addTodo, updateAll , updateTodo} from '../features/Todo/todoSlice' 

function AddTodo({
  isEditable,
  oneditableChange,
  editNanoId,
  oneditNanoIdChange,
  editTodoMsg,
  oneditTodoMsgChange
}) {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    
    const addTodoHandler = (e) => {
        e.preventDefault();
        if(isEditable===false && input && input.length > 0) {
          dispatch(addTodo(input))
        }
        else if(isEditable) {
          dispatch(updateTodo({id:editNanoId,newtodoMsg: input})),
          oneditTodoMsgChange(''),
          oneditableChange(prev => !prev),
          oneditNanoIdChange('0')
          dispatch(updateAll({id:'0', editable:isEditable}))
        }
        setInput('')
    }

    useEffect(() => {
      setInput(editTodoMsg)
    },[isEditable])

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {isEditable ? "Update" : "Add Todo"}
      </button>
    </form>
  )
}

export default AddTodo