import React, { useState } from "react";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Fab from '@mui/material/Fab';

function CreateArea(props) {
  const [expand, setExpand] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const expansion = () => {
    setExpand(true)
  }

  const collapse = () => {
    setExpand(false)
  }

  function handleChange(event) {
    const {name, value} = event.target
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  return (
    <div className="container">
      <form>
        <input name="title" onChange={handleChange} placeholder="Title" value={note.title} style={{display: expand? "block": "none" }} />
        <textarea name="content" onFocus={expansion} onBlur={collapse} onChange={handleChange} placeholder="Take a note..." rows={expand? "3": "1"} value={note.content} />
        <Fab onClick={(e) => {
          e.preventDefault()
          collapse()
          props.addItem(note)
          setNote({
            title: "",
            content: ""
          })
        }}
        className="fab-button"
        style={{display: expand? "block": "none" }}
        >
          <PushPinOutlinedIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
