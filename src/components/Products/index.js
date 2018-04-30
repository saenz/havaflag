import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Route } from 'react-router-dom';
import ProductItem from 'components/ProductItem';
import H2 from 'components/H2';

const Products = ({ match }) => {

  const productsData = [
  {
    id: 1,
    name: 'NIKE Liteforce Blue Sneakers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
    status: 'Available'

  },
  {
    id: 2,
    name: 'Stylised Flip Flops and Slippers',
    description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
    status: 'Out of Stock'

  },
  {
    id: 3,
    name: 'ADIDAS Adispree Running Shoes',
    description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
    status: 'Available'
  },
  {
    id: 4,
    name: 'ADIDAS Mid Sneakers',
    description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
    status: 'Out of Stock'
  },

  ];

  // Create an array of `<li>` items for each product
  var linkList = productsData.map( (product) => {
    return (
      <li key={product.id}>
        <Link to={`${match.url}/${product.id}`}>
          {product.name}
        </Link>
      </li>
    )
  })

  return(
    <div>
      <Helmet>
        <title>Products Page</title>
        <meta name="description" content="jeff testing" />
      </Helmet>
      <div style={{ display: 'block',  justifyContent: "space-between" }}>
        <div style={{
          float:'left',
          padding: '10px',
          width: '30%',
          background: '#f0f0f0',
          marginLeft:'auto' }}>

          <H2> Products</H2>
          <ul  style={{ listStyleType: 'none', padding: 0, fontSize:'15px' }}> {linkList} </ul>
        </div>
      </div>

      <Route path={`${match.url}/:productId`}
          render={ (props) => <ProductItem data={productsData} {...props} />}/>
      <Route exact path={match.url}
          render={() => (
            <div style={{ textAlign:'center'}}>Please select a product.</div>
      )}/>

    </div>
  )
}

export default Products;