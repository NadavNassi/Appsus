const { NavLink } = ReactRouterDOM;
export function Home() {
    return(
        <React.Fragment>
            <div className="home-page-screen">
            <div className="home-page-container">
            <ul className="anchor-home-list clean-list">
      <li>
        <NavLink exact to="/" >
          <i className="fas fa-home"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/note">
          <i className="far fa-sticky-note"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/mail">
          <i className="fas fa-at"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/book">
          <i className="fas fa-book"></i>
        </NavLink>
      </li>
    </ul>
    </div>
        
      </div>
      <ul className="slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </React.Fragment>
    )
}