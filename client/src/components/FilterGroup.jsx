//  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ
//  InshaAllah, By his marcy I will Gain Success

import React, { useRef } from 'react'

export default function FilterGroup({min, max , setMin , setMax, setOrderBy , setCetegories}) {
    let minMaxTimeOut;
    let minRef=useRef();
    let maxRef=useRef();
    let cetegoryRef = useRef(document.createElement('select'));
    let sortRef = useRef(document.createElement('select'));
    function addMin(event = new CustomEvent('input')) {
        clearTimeout(minMaxTimeOut)
        minMaxTimeOut=setTimeout( () => {
            if (isNaN(event.target.valueAsNumber)) return alert('Please enter a Valid Number in Minimum Price');
            if (event.target.valueAsNumber < 1) event.target.value = 1;
            if (!maxRef.current.valueAsNumber || maxRef.current.valueAsNumber < minRef.current.valueAsNumber) maxRef.current.value = minRef.current.valueAsNumber + 100;
            setMin(event.target.valueAsNumber)
        }, 1000);
    }
    let changeCetegoryTimeOut;
    function changeCetegory() {
        clearTimeout(changeCetegoryTimeOut);
        changeCetegoryTimeOut=setTimeout(() => {
            setCetegories(cetegoryRef.current.selectedOptions[0].value);
        }, 700);
    }
    let changeSortTimeOut ;
    function  changeSort() {
        clearTimeout(changeSortTimeOut);
        changeSortTimeOut = setTimeout(() => {
            setOrderBy(sortRef.current.selectedOptions[0].value);
        }, 700);
    }

    function addMax(event = new CustomEvent('input')) {
        clearTimeout(minMaxTimeOut)
        minMaxTimeOut=setTimeout( () => {
            if (isNaN(event.target.valueAsNumber)) return alert('Please enter a Valid Number in Minimum Price');
            if (event.target.valueAsNumber > 10000) event.target.value = 10000;
            if (event.target.valueAsNumber < 100) event.target.value = 100;
            if (!minRef.current.valueAsNumber || minRef.current.value >= maxRef.current.value) maxRef.current.value = minRef.current.valueAsNumber - 10; 
            setMax(event.target.valueAsNumber)
        }, 1000);
    }

    let cetegories = [
        'All',
        "Computers",
        "Shoes",
        "Toys",
        "Games",
        "Industrial",
        "Jewelery",
        "Books",
        "Automotive",
        "Tools",
        "Beauty",
        "Garden",
        "K_ids",
        "Health",
        "Electronics",
        "Clothing",
        "Music",
        "Movies",
        "Baby",
        "Home",
        "Grocery",
        "Outdoors",
        "Sports",
        "Any"
    ];
    return (
        <div className="filters">
            <div className="filter-group">
                <label htmlFor="categoryFilter">Category</label>
                <select id="categoryFilter" ref={cetegoryRef} onChange={changeCetegory}>
                    {
                        cetegories.map(function (el) {
                            return (<option value={el} >{el} </option>);
                        })
                    }
                </select>
            </div>

            <div className="filter-group">
                <label>Price Range</label>
                <div style={{display: 'flex', gap: '5px'}}>
                    <input type="number" id="minPrice" onInput={addMin} placeholder="Min 1" min="1" ref={minRef} />
                    <input type="number" id="maxPrice" onInput={addMax} placeholder="Max 100" min="100" ref={maxRef} max="10000" />
                </div>
            </div>

            <div className="filter-group">
                <label htmlFor="sortBy">Sort By</label>
                <select id="sortBy" ref={sortRef} onChange={changeSort}>
                    <option value="ASC">Newest First</option>
                    <option value="DESC">Oldest First</option>
                </select>
            </div>


        </div>
    )
}
