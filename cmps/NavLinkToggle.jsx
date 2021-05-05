const { NavLink } = ReactRouterDOM;
export function NavLinkToggle() {
  return (
    <ul className="anchor-header-list clean-list">
      <li>
        <NavLink exact to="/" activeClassName="active-nav">
          <i class="fas fa-home"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/note">
          <i class="far fa-sticky-note"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/mail">
          <i class="fas fa-at"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/book">
          <i class="fas fa-book"></i>
        </NavLink>
      </li>
    </ul>
  );
}
