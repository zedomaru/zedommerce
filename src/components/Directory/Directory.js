//import lib
import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory-selector'

//import style
import './Directory.scss'

//import component
import MenuItem from '../MenuItem/MenuItem'

const Directory = ({sections}) => {
    return (
        <div className="directory-menu">
            {
                sections.map(({id, ...sectionsProps}) => {
                    return <MenuItem key={id} {...sectionsProps} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
