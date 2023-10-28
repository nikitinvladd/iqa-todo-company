import { Link } from 'react-router-dom';
import './sidebar.sass'
const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar-menu">
                <div className="menu-logo">
                    <Link to="/"><img src="/img/logo.webp" alt="logo" /></Link>
                </div>
                <div className="menu menu-user">
                    <Link className="menu-link" to="/"><img src="/img/user.svg" alt="user" /></Link>
                    <div className="menu-box">
                        <div className="item-menu-title">Prospects</div>
                        <Link to="/userlogin" className="item-menu">Login</Link>
                        <Link to="/userregister" className="item-menu">Register</Link>
                    </div>
                </div>
                <div className="menu menu-task">
                    <Link className="menu-link" to="/createtask"><img src="/img/tasks.svg" alt="task" /></Link>
                    <div className="menu-box">
                        <div className="item-menu-title">Your Mission</div>
                        <Link to="/createtask" className="item-menu">Your Task</Link>
                        <Link to="/" className="item-menu">Planed your week</Link>
                    </div>
                </div>
                <div className="menu menu-analytics">
                    <Link className="menu-link" to="/"><img src="/img/analytics.svg" alt="analytics" /></Link>
                    <div className="menu-box">
                        <div className="item-menu-title">Your Analytics</div>
                        <Link to="/" className="item-menu">Company Analytics</Link>
                        <Link to="/" className="item-menu">Your Analytics</Link>
                    </div>
                </div>
                <div className="menu menu-analytics">
                    <Link className="menu-link" to="/calendar"><img src="/img/calendar.svg" alt="calendar" /></Link>
                    <div className="menu-box">
                        <div className="item-menu-title">Your Calendar</div>
                        <Link to="/calendar" className="item-menu">Calendar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar