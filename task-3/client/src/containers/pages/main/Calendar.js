import React, { Component } from 'react'
import ArrowRight from 'assets/images/arrow.svg'
import ArrowLeft from 'assets/images/arrow2.svg'



class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div class="calendar-wrap" id="calendar-wrap">
                <div class="month">
                    <div class="month-arrow month-arrow--disabled">
                        <img src={ArrowLeft} />
                    </div>
                    <div class="month__name">Январь</div>
                    <div class="month-arrow month-arrow">
                        <img src={ArrowRight} />
                    </div>
                </div>
                <div id="calendar"></div>
            </div>
        )
    }
}
export default Calendar