import React, { Component } from 'react';
import './Movies.css';

export default class Movies extends Component {
   constructor(props) {
      super(props)
      this.state = {
        
         unique_id: ""
      }
   }

   OnClickAdd = () => {
      this.props.history.push('/AddPage', { data: this.state.movies, unique_id: this.state.unique_id })
   }

   delete = (e) => {
      var all_movies = this.state.movies
      for (var i = 0; i < all_movies.length; i++) {
         if (all_movies[i].id.toString() === e.target.id) {
            this.state.movies.pop(all_movies[i])
            this.setState({ movies: this.state.movies})
         }
      }
   }

   renderTableData() {
      return this.state.movies.map((movies, index) => {
         const { id, name, price, units } = movies
         return (
            <tr key={id}>
               <td>{index + 1}</td>
               <td>{name}</td>
               <td>{Release}</td>
               <td>{Rating}</td>
               <td><button onClick={this.delete} id={id}>Delete</button></td>
            </tr>
         )
      })
   }

   componentDidMount() {
      if (this.props.location.state !== undefined) {
         if (this.props.location.state.data.length === 1) {
            if (this.props.location.state.unique_id !== "") {
               this.setState({ movies: this.props.location.state.data })
            }
            else {
               this.state.movies.push(this.props.location.state.data[0])
               this.setState({ movies: this.state.movies })
            }
         }
         else {
            this.setState({ movies: this.props.location.state.data })
         }
         this.setState({ unique_id: this.props.location.state.unique_id + 1 })
      }
      else {
         this.setState({ unique_id: this.state.movies.length + 1 })
      }
   }

   render() {
      if (this.state.movies.length !== 0) {
         return (
            <div>
               <h1 id='title'>About Movies</h1>
               <table id='movies'>
                  <tbody>
                     <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Release</th>
                        <th>Rating</th>
                        <th>Delete</th>
                     </tr>
                     {this.renderTableData()}
                  </tbody>
               </table>
               <button onClick={this.OnClickAdd} className='button_background ' style={{
                  margin: '20px auto',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer'
               }}>ADD</button>
            </div>
         );
      }
      else {
         return (
            <div>
               <h1>No Data Available</h1>
               <button onClick={this.OnClickAdd} className='button_background ' style={{
                  margin: '20px auto',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer'
               }}>ADD</button>
            </div>
         );
      }
   }
}