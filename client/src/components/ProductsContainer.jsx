//  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ
//  InshaAllah, By his marcy I will Gain Success


import React from 'react'


export default function ProductsContainer({ skeleton_mode, products }) {
    if (skeleton_mode) {
        return (
            <div className="products-grid" id="productsContainer">
                <div className="skeleton-card">
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-price"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                </div>
                <div className="skeleton-card">
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-price"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                </div>
                <div className="skeleton-card">
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-price"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                </div>
            </div>
        )
    }
    else if (products.length === 0) {
        return (
            <div className="products-grid" id="productsContainer">
                <p
                    style={{ textAlign: 'center', width: '100%' }}>No products found.</p>
            </div>
        );
    }
    else {
        return (
            <div className="products-grid" id="productsContainer">
                {
                    products.map(function (product, index) {
                        return (
                            <div className="product-card" key={index}>
                                <h3>{product.name}</h3>
                                <div className="product-category">{product.category}</div>
                                <div className="product-price">${product.price.toFixed(2)}</div>
                                <div className="product-date">Added: {product.date}</div>
                                <p className="product-description">{product.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
