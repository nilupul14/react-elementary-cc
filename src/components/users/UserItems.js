import React from 'react'
import { Link } from 'react-router-dom';

/**
*@author nilupul gamage
*@since 22/08/2021
*/
const UserItems = ({ user: { login, avatar_url}}) => {


     // const { login, avatar_url, html_url } = props.user;

     return (
          <div className='card text-center'>
               <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }}></img>
               <h2>{login}</h2>
               <div>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
               </div>
          </div >
     );

}

export default UserItems
