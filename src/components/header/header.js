import './header.sass'
import React from 'react';
import classNames from 'classnames';

const Header = ({ toggleTheme, isDarkTheme }) => {
  return (
    <div className="header">
      <div className="header-title">Prospects</div>
      <div className="color-modes modes mr-2">{isDarkTheme ? <img src="img/moon.png" className='w-7' alt="Moon" /> : <img src="img/sun.png" className='w-7' alt="Sun" />}</div>
      <div
        onClick={toggleTheme}
        className={classNames('flex transition-all cursor-pointer duration-500 w-7 h-4 bg-gray-300 rounded-full', {
          'bg-gray-500': isDarkTheme,
        })}
      >
        <span
          className={classNames('h-4 w-4 bg-gray-500 rounded-full transition-all shadow-lg duration-500', {
            'ml-3 bg-gray-800': isDarkTheme,
          })}
        />
      </div>
    </div>
  );
}

export default Header;