import React from 'react';
import {Link} from 'react-router-dom';

function Nav({links}) {
  return (
    <ul className="Nav">
      {links.map(link => <li className="Nav-link"><Link to={'./' + link}>{link}</Link></li>)}
    </ul>
  )
}

export default Nav;