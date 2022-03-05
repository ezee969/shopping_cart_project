import {Link} from "react-router-dom"


const Profile = () => {
    return (
        <div>
            <h1>Hello from profile</h1>
            <Link to={"/"}><button>
                Go back  
            </button></Link> 
        </div>
    )
}

export default Profile