export async function getStaticProps(){
    const data = [
        {
            id: 1,
            product_name: 'Laptop',
            product_code: 'laptop110',
            product_icon: 'laptop.svg',
            product_price:'50,000',
            product_category:'Laptop',
            product_remarks:'Asus'

        },
        {
            id: 2,
            product_name: 'Laptop',
            product_code: 'laptop110',
            product_icon: 'laptop.svg',
            product_price:'50,000',
            product_category:'Laptop',
            product_remarks:'Asus'
        },
        {
            id: 3,
            product_name: 'Laptop',
            product_code: 'laptop110',
            product_icon: 'laptop.svg',
            product_price:'50,000',
            product_category:'Laptop',
            product_remarks:'Asus'
        },
        {
            id: 4,
            product_name: 'Laptop',
            product_code: 'laptop110',
            product_icon: 'laptop.svg',
            product_price:'50,000',
            product_category:'Laptop',
            product_remarks:'Asus'
        },

    ]


    return {
        props: {
            dataTable:data
        }
    }
}


import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import ProductList from "../components/ProductList";

class Product extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ProductList dataTable={this.props.dataTable}/>
            </div>
        );
    }
}

export default Product;