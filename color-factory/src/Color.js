import {useParams, Navigate} from 'react-router-dom';

function Color({colors}) {
  
  const {color} = useParams();

  const included = colors.includes(color);
  
  return (
    <div className="color">
      {included ? <h1>{color}</h1> : <Navigate to="/colors" replace />} 
    </div>
  )
}

export default Color;