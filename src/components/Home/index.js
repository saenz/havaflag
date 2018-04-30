import React from 'react';
import { Helmet } from 'react-helmet';
import H2 from 'components/H2';

const Home = () => (
  	<article>
    	<Helmet>
        	<title>Home Page</title>
          	<meta name="description" content="Jeff Saenz home page" />
        </Helmet>
    	<div>
    		<H2>Home</H2>
    		This is the text of the home page.
    	</div>
  	</article>
)

export default Home;