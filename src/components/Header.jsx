import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  BuildingLibraryIcon,
  ArrowLeftOnRectangleIcon,
  UserIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid';
import { UserContext } from '../contexts/User';

export function Header() {
  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    setUser({});
  };

  return (
    <nav className='Header flex-container'>
      <span>
        <NavLink to='/'>
          <HomeIcon className='icons' />
          Home
        </NavLink>{' '}
        <NavLink to='/topics'>
          <BuildingLibraryIcon className='icons' />
          Topics
        </NavLink>
      </span>
      {user.username ? (
        <span className='user-nav'>
          <NavLink to='#' onClick={logout}>
            <ArrowLeftOnRectangleIcon className='icons' />
            Log Out
          </NavLink>
          <NavLink to={`/user/${user.username}`}>
            <UserIcon className='icons' />
            {user.username}
          </NavLink>
          <NavLink to={`/user/${user.username}`}>
            <img className='header-avatar' src={user.avatar_url} alt='avatar' />{' '}
          </NavLink>
        </span>
      ) : (
        <span>
          <NavLink to='/login'>
            <RocketLaunchIcon className='icons' />
            Log in
          </NavLink>{' '}
          or <NavLink to='/register'>Register</NavLink>
        </span>
      )}
    </nav>
  );
}
