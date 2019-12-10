import React, { Component } from 'react';
import MovieApi from '../Data/MovieApi'
import Movies from './Movies';
class AddPage extends Component {
   constructor() {
      super();
      this.state = {
         movie:{},
         movies:[]
       
        
      }

   }

   update(e) {
      let movie = { name:this.b.value, Release: this.c.value, Rating: this.d.value }
      this.setState({movie: movie})
   }

   renderTableData() {
      return (
         <tr >
               <td><input type="text"
               ref={(call_back) => { this.b = call_back }} onChange=
               {this.update.bind(this)} required/> </td>
               <td><input type="text"
               ref={(call_back) => { this.c = call_back }} onChange=
               {this.update.bind(this)} required/> </td>
               <td><input type="text"
               ref={(call_back) => { this.d = call_back }} onChange=
               {this.update.bind(this)} required/> </td>
         </tr>

      )

   }
   componentDidMount() {
      if (this.props.location.state !== undefined) {
         this.setState({ movies: this.props.location.state.data})
         // this.setState({unique_id: this.props.location.state.unique_id})
      }
      else{
         console.log(this.state.movies)
         // const id = this.state.movies[this.state.movies.length-1].id + 1
       
      }
   }

   getAllMovies=()=>{
      MovieApi.getAllMovies(data=>this.setState({movies:data}))
   }
   addRowHandler = () => {
      this.setState({ movies: this.props.location.state.data});
      var movie = this.state.movie
      // this.getAllMovies()
      MovieApi.addMovies(movie,data=>this.setState({movies:data}));
      console.log(this.state.movies)
      this.getAllMovies()
      this.props.history.push('/', { data: this.state.movies})
   }


   render() {
      console.log(this.props.location.state.data)
      return (
         <div>
            <table id='movies'>
               <tbody>
                  <tr>
                     <th>Name</th>
                     <th>Release</th>
                     <th>Rating</th>
                  </tr>
                  {this.renderTableData()}
               </tbody>
            </table>

            <button className='button_background ' style={{
               margin: '20px auto',
               display: 'flex', alignItems: 'center',
               justifyContent: 'center', cursor: 'pointer'
            }} onClick={this.addRowHandler}>ADDRow
            </button>
         </div>
      );
   }
}

export default AddPage;