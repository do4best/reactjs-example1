import './styles.css'
const dummydata=[
    {
        name:"First Name",
        id:1
    },
    {
        name:"Second Name",
        id:2
    },
    {
        name:"Third Name",
        id:3
    }
]


const NotesList=()=>{
    return(
        <div className={"notes-list-wrapper"}>
            <h1>Note List</h1>
            <ul>
                {
                    dummydata.map(item=>(
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export  default NotesList;