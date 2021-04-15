import React from 'react'
import Hospital_card from './Hospital_card/Hospital_card';
import Filter_container from "./Filter_component/Filter_container";
import Pagination_component from './Pagination/Pagination_component';
import Sort from './Sort_component/Sort';
import "./Search_results.scss"
function Search_results(query) {
    return (
        <div className="search-results">
             <div className="container-fluid row">
      <div className="col-lg-2">
       <Filter_container />
      </div>
      <div className="col-lg-10">
        <Sort/>
     <Hospital_card results={query.location.query}/>
    
    <Pagination_component />
     </div>
     </div>
        </div>
    )
}

export default Search_results
