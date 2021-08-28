import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Search extends Component {

     state = {
          text: ''
     };

     static propTypes = {
          searchUsers: PropTypes.func.isRequired,
          clearUsers: PropTypes.func.isRequired,
          showClear: PropTypes.func.isRequired,
          setAlert: PropTypes.func.isRequired,
     }
     onChange = (event) => {
          this.setState({ [event.target.name]: event.target.value });
     }

     onSubmit(e) {
          e.preventDefault();
          if (this.state.text === '') {
               this.props.setAlert('🙏 Please enter 🎯 something here ✍')
          } else {
               this.props.searchUsers(this.state.text);
               this.setState({ text: '' });
          }
     }

     render() {

          const { showClear, clearUsers } = this.props;
          return (
               <div>
                    <form onSubmit={this.onSubmit.bind(this)} className="form">
                         <input type='text' name='text' placeholder='Search Users...' value={this.state.text} onChange={this.onChange}/>
                         <input type='submit' value=' 🔎 Search' className='btn btn-dark btn-block'/>
                    </form>
                    {showClear && 
                         <button className="btn btn-light btn-block" onClick={clearUsers}> 🚀 Clear</button>
                         //this.props.showClear & this.props.clearUsers
                    }                  
               </div>
          )
     }
}

export default Search
