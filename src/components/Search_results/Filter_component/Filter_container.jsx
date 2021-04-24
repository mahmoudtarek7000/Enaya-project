import React from 'react'
import Filter_acordion from "./Filter_acordion";
import { FaFilter } from "react-icons/fa";
import "./Filter_container.scss";
function Filter_container() {
    const avilableOptions = ['Any day','Today','Tomorrow'];
    return (
        <div className="bg-white filter_cont rounded mt-5 d-none d-lg-block">
            <h5 className="mb-5 text-center filter_head ftxt text-white bg-info border-bottom border-info p-3 my-4"><FaFilter/> Filter</h5>
            <div className="p-3">
            <Filter_acordion title={'Avilability'} options={avilableOptions}  id="togglerOne" checkBox="exampleCustomCheckboxOne"/>
            <Filter_acordion title={'intensive care'} options={avilableOptions} id="togglerTwo" checkBox="exampleCustomCheckboxTwo"/>
            </div>
        </div>
    )
}

export default Filter_container
