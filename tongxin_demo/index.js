import React from 'react'
import ReactDOM from 'react-dom'
import Btn from './containers/progress_bar/Btn.jsx'
import ProgressBar from './containers/progress_bar/ProgressBar.jsx'
// import MyContainer from './containers/parent_to_child/P_c.jsx'
import Product from './containers/product/Product.jsx'

ReactDOM.render(
		<section>
		<Btn/>
		<ProgressBar/>
		</section>,
		document.getElementById('container')
	)
