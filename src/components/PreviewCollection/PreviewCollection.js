import React from 'react'
import './PreviewCollection.scss'
import CollectionItem from '../CollectionItem/CollectionItem'

const PreviewCollection = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                //ketika halaman ini dipanggil, halaman akan di re-render jadi perlu performace upgrade 
                //kalo data nya besar/banyak dan kalo di akses di komputer yang lambat
                items
                    .filter((item, index) => {
                        // console.log(item)
                        return index < 4
                    })
                    .map(({id, ...ItemProps}) => {
                        // console.log(ItemProps)
                        return <CollectionItem key={id} {...ItemProps}/>
                    })
            }
            </div>
        </div>
    )
}

export default PreviewCollection