import React, { Component } from 'react';
import '../components/styles/BrandProfile.css';

import axios from 'axios'

import ItemCard from './ItemCard';


export class BrandProfile extends Component {
    state = { brandProducts: []}
    componentDidMount(){
        axios.get(`http://localhost:3000/brands/${this.props.match.params.id}/products`)
        .then(res => {
            console.log("got products!",res)
            this.setState({brandProducts: res.data.products})
        })
        .catch(err => {
            console.log(err)
        })
    }

    // componentDidUpdate(){
    //     axios.get(`http://localhost:3000/brands/${this.props.match.params.id}/products`)
    //     .then(res => {
    //         console.log("got products!",res)
    //         this.setState({brandProducts: res.data.products})
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    render() {
        const products = this.state.brandProducts.map(product => 
            <ItemCard 
            type={product.name} 
            size={product.size} 
            brand={product.brand} 
            productImage={product.productImage}
            price={product.price}
    
            key={product._id} 
            id={product._id}
    
            addToCart={this.props.addToCart}
            />)

        return (
            <div className="brand-profile">
                
                <div className="brand-header">
                <img className="brand-profile-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png"></img>
                </div>

                <div className="product-div">
               {products}
                </div>












                
            </div>
        )
    }
}

export default BrandProfile;
