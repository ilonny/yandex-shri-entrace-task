import React, { Component } from 'react'

class LeftSide extends Component {
    render() {
        return (
            <div class="left-side">
                <div class="list">
                    <div class="floor-item">
                        <p class="list__floor">6 этаж</p>
                        {this.props.rooms.map((room) => {
                            if (room.floor == 6){
                                return (
                                    <a key={room.id} class="list-item">
                                        <div class="list-item__title">{room.name}</div>
                                        <div class="list-item__capacity">
                                            {(room.capacity.min == 0) ? 'до ' + room.capacity.max + " чел." : room.capacity.min + "—" + room.capacity.max + " человек"}
                                        </div>
                                    </a>
                                )
                            }
                        })}
                    </div>
                    <div class="floor-item">
                        <p class="list__floor">7 этаж</p>
                        {this.props.rooms.map((room) => {
                            if (room.floor == 7) {
                                return (
                                    <a key={room.id} class="list-item">
                                        <div class="list-item__title">{room.name}</div>
                                        <div class="list-item__capacity">
                                            {(room.capacity.min == 0) ? 'до ' + room.capacity.max + " чел." : room.capacity.min + "—" + room.capacity.max + " человек"}
                                        </div>
                                    </a>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftSide