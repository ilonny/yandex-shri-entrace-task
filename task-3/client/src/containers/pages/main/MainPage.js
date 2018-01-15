import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timeline from 'containers/pages/main/Timeline'
import LeftSide from 'containers/pages/main/LeftSide'
import Lines from 'containers/pages/main/Lines'
import { testAsyncAction } from 'actions/index'
class MainPage extends Component {
    componentWillMount(){
        // this.props.testAct()
    }
    render() {
        return (
            <main class="main-content">
                <Timeline 
                    dateNow={this.props.mainReducer.dateNow}
                    TimesArray={this.props.mainReducer.TimesArray}
                    chooseDate = {this.props.chooseDate}
                />
                <div class="df">
                    <LeftSide rooms={this.props.mainReducer.rooms} />
                    <Lines />
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mainReducer: state.mainReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        testAct: () => dispatch(testAsyncAction()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)