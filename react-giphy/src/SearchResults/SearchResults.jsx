import React, {Component} from 'react';


class SearchResults extends Component {
    constructor() {
        super();

        this.state = {
            searchResultsId : ''
        }

  
    }



    render() {

        const searchResults = this.props.searchResults.map((searchResult, i) =>{
            return (
                <div key={i}>
                    <div>
                                <img src={searchResult.images.fixed_height.url} width = {searchResult.images.fixed_height.width} height = {searchResult.images.fixed_height.height}/>
                    </div>
                </div>

            )
        })


        return (  

            <div >             
              <div>{searchResults}</div> 
            </div>
        )
    }
}

export default SearchResults;