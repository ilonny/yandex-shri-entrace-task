import React, { Component } from 'react'
import ArrowRight from 'assets/images/arrow.svg'
import ArrowLeft from 'assets/images/arrow2.svg'

class Timeline extends Component {
    render() {
        return (
            <div class="timeline">
                <div class="calendar">
                    <div class="calendar-arrow calendar-arrow--left">
                        <img src={ArrowLeft} />
                    </div>
                    <a class="calendar-date" href="#">14 дек · Сегодня</a>
                    <div class="calendar-arrow calendar-arrow--right">
                        <img src={ArrowRight} />
                    </div>
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
                </div>
                <div class="time">
                    <div class="df">
                        <div class="time-item time-item--current">11:05</div>
                        <div class="time-item time-item--disabled">8:00</div>
                        <div class="time-item time-item--disabled">9</div>
                        <div class="time-item time-item--disabled">10</div>
                        <div class="time-item">11</div>
                        <div class="time-item">12</div>
                        <div class="time-item">13</div>
                        <div class="time-item">14</div>
                        <div class="time-item">15</div>
                        <div class="time-item">16</div>
                        <div class="time-item">17</div>
                        <div class="time-item">18</div>
                        <div class="time-item">19</div>
                        <div class="time-item">20</div>
                        <div class="time-item">21</div>
                        <div class="time-item">22</div>
                        <div class="time-item">23</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline