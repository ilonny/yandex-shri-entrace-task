import React, { Component } from 'react'
import Calendar from 'containers/pages/main/Calendar'
import Moment from 'react-moment'
import 'moment/locale/ru';
import ArrowRight from 'assets/images/arrow.svg'
import ArrowLeft from 'assets/images/arrow2.svg'
import { createCalendar } from 'containers/pages/main/utils'

class Timeline extends Component {
    constructor(props){
        super(props)
        this.state = {
            calendar: {
                open: false,
            }
        }
    }
    openCalendar(){
        this.setState({
            calendar:{
                open: !this.state.calendar.open
            }
        })
        if (!this.state.calendar.open){
            setTimeout(() => {
                createCalendar('calendar', 2018 , 1)
                let elems = document.querySelectorAll(".calendar-date-item")
                elems.forEach(function(el){
                    el.addEventListener("click", function(el){
                        let chosenDate = el.target.getAttribute('data-date');
                        console.log(chosenDate);
                    })
                })
            }, 1);
        }
    }
    render() {

        return (
            <div class="timeline">
                <div class="calendar">
                    <div class="calendar-arrow calendar-arrow--left">
                        <img src={ArrowLeft} />
                    </div>
                    <a class="calendar-date" onClick={() => this.openCalendar()}>
                        <Moment locale="ru" format="DD MMM · Сегодня">
                            {this.props.dateNow.date}
                        </Moment>
                    </a>
                    <div class="calendar-arrow calendar-arrow--right">
                        <img src={ArrowRight} />
                    </div>
                    {this.state.calendar.open ? <Calendar date={this.props.dateNow} /> : ''}
                </div>
                <div class="time">
                    <div class="df">
                        <div class="time-item time-item--current" style={{ left: this.props.dateNow.offset+'px' }}>
                            <Moment format="HH:mm">
                                {this.props.dateNow.date}
                            </Moment>
                        </div>
                        {this.props.TimesArray.map(function(time){
                            return (
                                <div key={time.time} class="time-item"> {time.text}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline