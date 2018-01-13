import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditPage extends Component {
    render() {
        return (
            <div>
                Edit Page
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditPage)