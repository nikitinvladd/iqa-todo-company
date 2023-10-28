import { useState } from 'react';
import './header.sass'
import React from 'react';
import classNames from 'classnames';

const Header = ({ toggleTheme, isDarkTheme, onFilter }) => {
  const [term, setText] = useState('');

  const onInput = (e) => {
    const searchText = e.target.value;
    setText(searchText);
    onFilter(searchText);
  };

  return (
    <div className="header">
    <div className="header-title">Prospects</div>
    <div className="search-container">
  <input
    value={term}
    onChange={onInput}
    className='search-content'
    type="text"
    placeholder='Search content'
  />
  <div className="search-icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
  <circle cx="11" cy="11" r="8" />
  <path d="M21 21l-4-4" />
</svg>
  </div>
</div>
<p className='search-info'>*</p>
      <div
        onClick={toggleTheme}
        className={classNames('flex transition-all cursor-pointer duration-500 w-7 h-4 bg-gray-300 rounded-full', {
          'bg-gray-500': isDarkTheme,
        })}
      >
        <img
        src={isDarkTheme ? "img/moon.webp" : "img/sun.webp"}
        alt='toggle button on dark theme or light theme'
          className={classNames('h-4 w-4 bg-yellow-400 rounded-full transition-all shadow-lg duration-500', {
            'ml-3 bg-gray-800': isDarkTheme,
          })}
        />
      </div>
    </div>
  );
}

export default Header;
