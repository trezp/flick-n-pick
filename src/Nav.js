import React from 'react';
import { NavLink } from 'react-router-dom';


const Search = (props) => (
    <form>
      <input type="text" name="search"></input>
      <button type="submit">Search!</button>
    </form>
  )

const Nav = ()=> (
    <nav className="main-nav">
    <Search/>
      <ul>
          <li><NavLink to='/cats' activeClassName="selected">Cats</NavLink></li>
          <li><NavLink to='/flowers' activeClassName="selected">Flowers</NavLink></li>
          <li><NavLink to='/rainbows' activeClassName="selected">Rainbows</NavLink></li>
          <li><NavLink to='/cake' activeClassName="selected">Cake</NavLink></li>
          <li><NavLink to='/puppies' activeClassName="selected">Puppies</NavLink></li>
          <li><NavLink to='/plants' activeClassName="selected">Plants</NavLink></li>
      </ul>
    </nav>
)

export default Nav;
