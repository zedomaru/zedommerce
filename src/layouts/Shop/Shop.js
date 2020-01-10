import React, { Component } from 'react'
import SHOP_DATA from './ShopData'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'

class Shop extends Component {
    state = {
        collections: SHOP_DATA
    }

    render() {
        const {collections} = this.state
        return (
            <div className="Shop">
                <h1>Collections</h1>
                {
                    collections.map(({id, ...collectionsProps}) => {
                        // console.log(collectionsProps)
                        return <PreviewCollection key={id} {...collectionsProps}/>
                    })
                }
            </div>
        )
    }
}

export default Shop
