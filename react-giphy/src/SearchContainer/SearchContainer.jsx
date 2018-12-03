import React, {Component} from 'react';

class SeachContainer extends Component {

     constructor() {
         super();

         this.state = {
             searchterm: ''
         }
     }

     handleInput = (e) => {
        this.setState({
         [e.currentTarget.name]: e.currentTarget.value
        })

     }


    render() {
        return (
            <form onSubmit = {this.props.performSearch.bind(null, this.state.searchTerm)}>
                <input placeholder="Search Giphy"  value = {this.state.searchTerm} onChange={this.handleInput} name="search"/>
                <input type="submit" value="Submit" />
          </form>
        )
    }
}


export default SeachContainer;