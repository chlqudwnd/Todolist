import React from 'react'
import Boxlist from './boxlist'

const Box = (props) =>{
  let { display , onHandleEditText , onHandleTextChange ,  onHandleBtClick, input} = props
  let text = '';
  function handleAddListText (e){
    text = e.target.value;
  }

  function handleresetText(e){
    e.target.value = ''
  }

  function handleChangeTitle (e) {
    onHandleBtClick(text)
  }
  
  function pressEnter(e){
    if(window.event.keyCode === 13){
      onHandleBtClick(text)
      e.target.value = '';
    } 
  }

  return (
  <div className="box">
    <div className="Add_List">

      <input onKeyPress={pressEnter} onClick={handleresetText} onChange={handleAddListText} type="text" placeholder="리스트를 추가 하세요!"/>
      <button onKeyPress={pressEnter} type="reset" onClick={handleChangeTitle}>Add List</button>
      <div className="List">List</div>

    </div>

    {input.map((list) =>{
      console.log(list.index)
     return (<Boxlist display={display} onHandleEditText={onHandleEditText} index={list.index} onHandleTextChange={onHandleTextChange}  holder={list.holder}/>
      )})
    }
    </div>
  )
}

export default Box;