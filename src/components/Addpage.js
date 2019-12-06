import React, { Component } from 'react';

class AddPage extends Component {
   constructor() {
      super();
      this.state = {
         movies: [],
       
        
      }

   }

   update(e) {
      let movies = { id: this.state.unique_id, name:this.b.value, price: this.c.value, units: this.d.value }
      this.setState({movies: movies})
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
         this.setState({ movies: this.props.location.state.data })
         this.setState({unique_id: this.props.location.state.unique_id})
      }
      else{
         this.setState({unique_id: 100})
      }
   }


   addRowHandler = () => {
      this.state.movies.push(this.state.movies)
      this.setState({ movies: this.state.movies });
      this.props.history.push('/', { data: this.state.movies, unique_id: this.state.unique_id })
   }


   render() {
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