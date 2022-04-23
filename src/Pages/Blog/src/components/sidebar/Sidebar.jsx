import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore. Officia officiis quod maiores esse ut soluta magnam eum atque eos
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Injuries</li>
                <li className="sidebarListItem">Wellbeing</li>
                <li className="sidebarListItem">Health</li>
                <li className="sidebarListItem">Exercises</li>
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>    
        </div>
    </div>
  )
}


