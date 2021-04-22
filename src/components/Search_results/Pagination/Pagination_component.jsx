import React, { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pagination_component = ({resultsPerPage,paginate,nextPage,pervPage,totalHospitals,totalDoctors}) => {
  const pageNum = [];
  
  for (let i = 1; i <= Math.ceil(totalDoctors / resultsPerPage); i++) {
    console.log([...pageNum,i])
    pageNum.push(i);
  }
  return (
    <Pagination className="d-flex justify-content-center" aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous onClick={pervPage} />
      </PaginationItem>
      { pageNum.map(num=>{
        return  <PaginationItem key={num}>
        <PaginationLink onClick={paginate(num)}>
         {num}
        </PaginationLink>
      </PaginationItem>
      })
     
}
      <PaginationItem>
        <PaginationLink next onClick={nextPage} />
      </PaginationItem>
  
    </Pagination>
  );
}

export default Pagination_component;