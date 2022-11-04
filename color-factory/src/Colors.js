import React from 'react';
import {Link} from 'react-router-dom';

function Colors({colors}) { 

  return (
    <div className="Colors">
      <ul>
        {colors.map(c => <li><Link to={c}>{c}</Link></li>)}
      </ul>
    </div>
  )
}

export default Colors;