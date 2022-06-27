

const AddNewNote=()=>{
    return(
        <div className={"add-new-note-wrapper"}>
            <h1>Add New Note</h1>
            <div className={"form-wrapper"}>
                <input name={"addTodo"} placeholder={"Enter ToDo Name"} onChange={(event)=>(console.log(event))}/>
                <button>Add Note</button>
            </div>

        </div>
    )
}
export default AddNewNote;