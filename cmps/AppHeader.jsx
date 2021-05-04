
// import { eventBusService } from '../services/event-bus-service.js'

const { NavLink, withRouter } = ReactRouterDOM

 class _NavHeader extends React.Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="nav-header">
          <div className="nav-logo">
            <h2 className="nav-logo-title">
              BookShop
            </h2>
          </div>
          <div>
            <ul className="anchor-header-list clean-list">
              <li>
                <NavLink exact to="/" activeClassName="active-nav">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/note">Note</NavLink>
              </li>
              <li>
              <NavLink to="/mail">Mail</NavLink>
               
              </li>
              <li>
              <NavLink to="/book">Book</NavLink>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export const AppHeader = withRouter(_NavHeader)

