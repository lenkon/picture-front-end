import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const links = [
  { path: 'image-list', text: 'Image List' },
  { path: 'image-upload', text: 'Image Upload' },
];

const Navigation = () => (
  <div className="border-r h-screen w-auto pt-[100px]">
    <aside>
      <ul className="space-y-2 font-medium items-start flex flex-col ml-3 gap-2">
        {links.map((link) => (
          <li key={link.text} className={`pl-5 active:bg-color-green active:text-white hover:bg-color-green hover:text-white h-[40px] flex items-center w-full pr-5 font-bold ${({ isActive }) => (isActive ? 'active' : '')}`}>
            <NavLink
              to={link.path}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  </div>
);

export default Navigation;
