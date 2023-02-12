import { NavLink, Outlet } from 'react-router-dom';
import { NavigatorProps } from './../../models/NavigatorProps';
import './navigators.css';
type NavigProps = {
  navigConfig: NavigatorProps;
};
export const Navigator: React.FC<NavigProps> = (props) => {
  function getList(): JSX.Element[] {
    return props.navigConfig.routeItems.map((item) => {
      return (
        <li className="navigator-item">
          <NavLink
            style={({ isActive }) => activeLink(isActive)}
            to={item.routPath}
          >
            {item.label}
          </NavLink>
        </li>
      );
    });
  }
  function activeLink(isActive: boolean): React.CSSProperties | undefined {
    let result: React.CSSProperties = {};
    if (isActive) {
      result = { color: 'black', fontWeight: 'bolder'};
    }
    return result;
  }
  return (
    <div>
      <nav>
        <ul className={props.navigConfig.cssClassName}>{getList()}</ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};
