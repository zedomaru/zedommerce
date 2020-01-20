import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import {selectCollections} from '../../redux/shop/shop-selectors'
import './CollectionsOverview.scss'

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
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

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
