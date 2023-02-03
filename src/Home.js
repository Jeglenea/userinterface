import Nav from '../components/Nav'
import {useState} from 'react'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [formData, setFormData] = useState({
        user_id: 1,
        user_name: "",
        phone_number:"",
        e_mail:"",
        user_roles:"",
        enabled:false,

    })



    return (
        <div className="overlay">
            <div className="Nav">
                Hello
                <button>HEllO</button>

            </div>
        </div>
    )
}
export default Home
