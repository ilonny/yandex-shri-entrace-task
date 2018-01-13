import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timeline from 'containers/pages/main/Timeline'
import LeftSide from 'containers/pages/main/LeftSide'
import Lines from 'containers/pages/main/Lines'

class MainPage extends Component {
    render() {
        return (
            <main class="main-content">
                <Timeline />
                <div class="df">
                    <LeftSide />
                    <Lines />
                </div>
            </main>
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
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)