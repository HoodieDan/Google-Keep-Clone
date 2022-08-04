import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note(props) {
  return (
    <div className="col-6 col-lg-3 col-md-4 col-sm-4">
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={(e) => {
          e.preventDefault()
          props.deleteItem(props.id)
        }}><DeleteForeverIcon /></button>
      </div>
    </div>
  );
}

export default Note;
