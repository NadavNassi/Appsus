
// import { eventBusService } from '../services/event-bus-service.js'

const { NavLink, withRouter } = ReactRouterDOM

 class _NavHeader extends React.Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="nav-header">
          <div className="nav-logo">
            <NavLink className='nav-logo-title' to='/'>
              BookShop
            </NavLink>
          </div>
          <div>
            <ul className="anchor-header-list clean-list">
              <li>
                <NavLink exact to="/" activeClassName="active-nav">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
              <NavLink to="/addBook">Add Book</NavLink>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export const AppHeader = withRouter(_NavHeader)

