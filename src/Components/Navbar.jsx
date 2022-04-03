import './navbar.css'
import {Link} from "wouter"

export const Navbar = () => {
  return (
    <div>
        <div className='menu'>
       
            <ul className='menuul'>

          
            <Link href="/"><a className='menuitem'>Home</a></Link>
                <Link href="/About"><a className='menuitem'>About</a></Link>
              

                
            </ul>
            <div className="appointmentbtn">
            <button className='btn appointment'>
          Make An Appointment
        </button>
            </div>



        </div>
    </div>
  )
}

