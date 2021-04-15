import React from 'react'
import Filter_acordion from "./Filter_acordion";
import { FaFilter } from "react-icons/fa";
import "./Filter_container.scss";
function Filter_container() {
    return (
        <div className="bg-white filter_cont rounded mt-5 d-none d-lg-block">
            <h5 className="mb-5 text-center filter_head ftxt text-white bg-info border-bottom border-info p-3 my-4"><FaFilter/> Filter</h5>
            <div className="p-3">
            <Filter_acordion  id="togglerOne" checkBox="exampleCustomCheckboxOne"/>
            <Filter_acordion  id="togglerTwo" checkBox="exampleCustomCheckboxTwo"/>
            <Filter_acordion  id="togglerThree" checkBox="exampleCustomCheckboxThree"/>
            <Filter_acordion  id="togglerFour" checkBox="exampleCustomCheckboxFour"/>
            <Filter_acordion  id="togglerFive" checkBox="exampleCustomCheckboxFive"/>
            </div>
        </div>
    )
}

export default Filter_container
