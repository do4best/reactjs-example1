import {Link} from "react-router-dom";
import './styles.css';

const Header=()=>{
    return(
        <header className={"header"}>
        <ul>
            <li>
                <Link to={'/'}>Note List</Link>
            </li>
            <li>
                <Link to={'/add-new-note'}>Add Notes</Link>
            </li>
        </ul>
            </header>
    )
}
export default  Header;