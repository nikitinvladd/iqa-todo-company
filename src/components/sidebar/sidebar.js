import './sidebar.sass'
const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar-menu">
                <div className="menu-logo">
                    <a href="/"><img src="/img/logo.png" alt="logo" /></a>
                </div>
                <div className="menu menu-user">
                    <a className="menu-link" href="/"><img src="/img/user.svg" alt="user" /></a>
                    <div className="menu-box">
                        <div className="item-menu-title">Prospects</div>
                        <a href="/" className="item-menu">Login</a>
                        <a href="/" className="item-menu">Register</a>
                    </div>
                </div>
                <div className="menu menu-task">
                    <a className="menu-link" href="/tasks"><img src="/img/tasks.svg" alt="task" /></a>
                    <div className="menu-box">
                        <div className="item-menu-title">Your Mission</div>
                        <a href="/functionality task" className="item-menu">Your Task</a>
                        <a href="/" className="item-menu">Planed your week</a>
                    </div>
                </div>
                <div className="menu menu-analytics">
                    <a className="menu-link" href="/"><img src="/img/analytics.svg" alt="analytics" /></a>
                    <div className="menu-box">
                        <div className="item-menu-title">Your Analytics</div>
                        <a href="/" className="item-menu">Your Company Analytics</a>
                        <a href="/" className="item-menu">Your Analytics</a>
                    </div>
                </div>
                <div className="menu menu-analytics">
                    <a className="menu-link" href="/"><img src="/img/calendar.svg" alt="calendar" /></a>
                    <div className="menu-box">
                        <div className="item-menu-title">Your Calendar</div>
                        <a href="/" className="item-menu">Calendar</a>
                        <a href="/" className="item-menu">Meet at this week</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar