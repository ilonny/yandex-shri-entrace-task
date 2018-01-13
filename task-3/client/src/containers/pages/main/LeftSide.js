import React, { Component } from 'react'

class LeftSide extends Component {
    render() {
        return (
            <div class="left-side">
                <div class="list">
                    <div class="floor-item">
                        <p class="list__floor">7 этаж</p>
                        <a class="list-item list-item--disabled">
                            <div class="list-item__title">Ржавый фред</div>
                            <div class="list-item__capacity">3—6 человек</div>
                        </a>
                        <a href="#" class="list-item">
                            <div class="list-item__title">Прачечная</div>
                            <div class="list-item__capacity">до 10 человек</div>
                        </a>
                        <a href="#" class="list-item">
                            <div class="list-item__title">Желтый дом</div>
                            <div class="list-item__capacity">до 10 человек</div>
                        </a>
                        <a class="list-item list-item--disabled">
                            <div class="list-item__title">Оранжевый тюльпан</div>
                            <div class="list-item__capacity">до 10 человек</div>
                        </a>
                    </div>
                    <div class="floor-item">
                        <p class="list__floor">6 этаж</p>
                        <a href="#" class="list-item">
                            <div class="list-item__title">Джокер</div>
                            <div class="list-item__capacity">3—6 человек</div>
                        </a>
                        <a href="#" class="list-item">
                            <div class="list-item__title">Мариванна</div>
                            <div class="list-item__capacity">3—6 человек</div>
                        </a>
                        <a href="#" class="list-item">
                            <div class="list-item__title">Тонкий боб</div>
                            <div class="list-item__capacity">3—6 человек</div>
                        </a>
                        <a href="#" class="list-item">
                            <div class="list-item__title">Черная вдова</div>
                            <div class="list-item__capacity">3—6 человек</div>
                        </a>
                        <a href="#" class="list-item">
                            <div class="list-item__title">Белорусский ликер</div>
                            <div class="list-item__capacity">3—6 человек</div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftSide