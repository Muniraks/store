import React, { Component } from 'react';

import ItemCard from './ItemCard';

 class Products extends Component {
    

    render() {

        const products = this.props.products.map(product => 
        <ItemCard 
        type={product.type} 
        size={product.size} 
        brand={product.brand} 
        productImage={product.productImage}
        price={product.price}

        key={product.id} 
        id={product.id}

        addToCart={this.props.addToCart}
        />)

        return (
            <div>
                {products}  
            </div>
        )
    }
}

export default Products;
