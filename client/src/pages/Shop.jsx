//  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ
//  InshaAllah, By his marcy I will Gain Success

import React, { useMemo, useRef, useState } from 'react'
import FilterGroup from '../components/FilterGroup'
import ProductsContainer from '../components/ProductsContainer'
import { Pagination } from '../components/Pagination';
import { getContextData } from '../components/contax';
import toast, { Toaster } from 'react-hot-toast'


export default function Shop() {
    let { host } = getContextData()
    let [skeleton_mode, set_skeleton_mode] = useState(true);
    let [products, setProducts] = useState([]);
    let [maxPrice, setMaxPrice] = useState(100)
    let [minPrice, setMinPrice] = useState(1);
    let [query, setQuery] = useState('*');
    let [pages, setPages] = useState(0);
    let [paginationProduct, setPaginationProduct] = useState([]);
    let [cetegories, setCetegories] = useState('All');
    let [sorting, setSort] = useState('ASC');
    //Use Memo for product search
    useMemo(async function () {
        let q = {
            min: minPrice,
            max: maxPrice,
            pages,
            cetegories,
            sorting,
            query: query?.trim() ? query : undefined
        };
        q = new URLSearchParams(q).toString();
        set_skeleton_mode(true)
        let response = await fetch(host + '/products?' + q);

        if (response.status === 200) {
            let data = await response.json();
            let counts = data.counts;
            let products = data.products;
            setProducts(products)
            set_skeleton_mode(false);
            setPaginationProduct(function () {
                let arr = [];
                for (let i = 0; i <= counts; i++) {
                    arr.push(i)
                }
                return arr;
            });
        } else {
            toast.error('Failed To load Products', {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }
            })
        }
    }, [query, minPrice, maxPrice, sorting, cetegories]);

    useMemo(async function () {
        try {
            if (pages === 0) return;
            let q = new URLSearchParams({
                min: minPrice,
                max: maxPrice,
                pages,
                cetegories,
                sorting,
                query: query?.trim() ? query : undefined,
            });
            set_skeleton_mode(true);
            let response = await fetch(host + '/products?' + q);
            if (response.status === 200) {
                setProducts((await response.json()).products)
                set_skeleton_mode(false);
            } else {
                toast.error('Failed To load Products', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                })
            }
        } catch (error) {
            return toast.error('Unkown error', {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }
            })
        }
    }, [pages]);

    let queryTimeOut;
    function addQuery(event = new Event('input')) {
        clearTimeout(queryTimeOut);
        queryTimeOut = setTimeout(() => {
            setQuery(event.target.value)
        }, 650);
    }
    let queryInputRef = useRef('');
    return (
        <div className="search-container">
            <div className="search-header">
                <h1>Find Your Perfect Product</h1>
                <p>Search from a wide range of quality products</p>
            </div>
            <input type="text" id="searchInput" placeholder="Search products..." ref={queryInputRef} onInput={addQuery} />
            <FilterGroup
                min={minPrice}
                max={maxPrice}
                setMin={setMinPrice}
                setMax={setMaxPrice}
                setCetegories={setCetegories}
                setOrderBy={setSort}
            />
            <ProductsContainer
                skeleton_mode={skeleton_mode}
                products={products}
            />
            <Pagination
                itemsPerPage={8}
                items={paginationProduct}
                updatePage={setPages}
            />
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    )
}
