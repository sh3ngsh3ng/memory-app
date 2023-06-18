import React from 'react'
import './ListGame.css'
import CountdownTimer from './CountdownTimer'
import nouns from '../nouns.json'

export class ListGame extends React.Component {

    state = {
        gamePhase: 1,
        nouns: nouns,
        itemsToRemember: [],
        answersChecked: false,
        userAnswers: [],
        wrongCount: 0
    }

    componentDidMount() {
        this.shuffleNouns()
    }

    displayPhaseOne() {
        return (
            <div id='list-game-phase-one-container'>
                <div className='list-game-header'><span>{this.props.systemName ? this.props.systemName : 'System'}</span></div>
                <div className='list-game-instructions'>
                    <div>
                        <h4>Instructions</h4>
                        <p>Using the {this.props.systemName} System, memorize the following set of items.</p>
                        <p>You can choose the option.</p>
                    </div>
                </div>
                <div className='list-game-btn-div'>
                    <button id='start-btn' onClick={() => this.setState({
                        gamePhase: 2
                    })}>
                        <span>Start</span>
                    </button>
                </div>
            </div>
        )
    }

    displayPhaseTwo() {
        setTimeout(() => {
            this.setState({
                gamePhase: 3
            })
        }, 3000)
        return (
            <div id='list-game-phase-two-container'>
                    <CountdownTimer />
            </div>
        )
    }

    displayPhaseThree() {
        return (
            <div id='list-game-start-container'>
                <div id='generated-items-left'>{this.generateItems(this.props.numOfItems)}</div>
                <div id='generated-items-right'>
                    <button class="btn btn-primary" onClick={() => {
                        this.setState({
                            gamePhase: 4
                        })
                    }}>Start</button>
                </div>
            </div>
        )
    }

    displayPhaseFour() {
        return (
            <div id='list-game-start-container'>
                <div id='generated-fields-left'>{this.generateInputFields(this.props.numOfItems)}</div>
                <div id='generated-fields-right'>
                    <button class="btn btn-primary" onClick={() => {
                        let inputNodeObjs = Array.from(document.querySelectorAll('.card-item-input'));
                        let userAnswers = inputNodeObjs.map((node) => node.value);
                        console.log(userAnswers)
                        this.setState({
                            userAnswers: userAnswers,
                            gamePhase: 5
                        })
                    }}>Check</button>
                </div>
            </div>
        )
    }

    displayPhaseFive() {
        // check answers
        if (!this.state.answersChecked) {
            let correctAnswers = this.state.itemsToRemember
            let userAnswers = this.state.userAnswers
            let wrongCount = 0
            for (let i = 0; i < correctAnswers.length; i++) {
                if (correctAnswers[i].toUpperCase() !== userAnswers[i].toUpperCase()) {
                    wrongCount++
                }
            }
            this.setState({
                answersChecked: true,
                wrongCount: wrongCount
            })
        } else {
            // display results
            return (
                <div id='list-game-phase-five-container'>
                    <div className='list-game-header'><span>{this.props.systemName ? this.props.systemName : 'System'}</span></div>
                    <div className='list-game-instructions'>
                        <div>
                            <h4>Results</h4>
                            <p>You got {this.state.itemsToRemember.length - this.state.wrongCount}/{this.state.itemsToRemember.length} correct.</p>
                        </div>
                    </div>
                    <div className='list-game-btn-div'>
                        <button class='btn btn-danger' onClick={() => {
                                this.shuffleNouns()
                                this.restartGame()
                        }}>Restart</button>
                    </div>                
                </div>
                
            )
        }


        
    }

    shuffleNouns() {
        let shuffledNouns = this.state.nouns.map((a) => ({sort: Math.random(), value: a})).sort((a, b) => a.sort - b.sort).map((a) => a.value)
        this.setState({
            nouns: shuffledNouns
        })
    }

    restartGame() {
        this.setState({
            gamePhase: 2,
            itemsToRemember: [],
            answersChecked: false,
            userAnswers: []
        })
    }

    generateInputFields(numOfFields) {
        let fields = []
        for (let i = 0; i < numOfFields; i++) {
            fields.push(<input className='form-control form-control-lg card-item-input' autoFocus={i == 0 ? true : false} />)
        }
        return fields
    }

    generateItems(numOfItems) {
        let items = this.state.nouns.slice(0, numOfItems)
        this.setState({
            itemsToRemember: items
        })
        return (
            items.map((noun) => {
                return (
                    <div className='card card-item'>
                        <div className='card-body'>
                            {noun}
                        </div>
                    </div>
                )
            })
        )
    }

    renderGame() {
        if (this.state.gamePhase === 1) {
            return this.displayPhaseOne()
        } else if (this.state.gamePhase === 2) {
            return this.displayPhaseTwo()
        } else if (this.state.gamePhase === 3) {
            return this.displayPhaseThree()
        } else if (this.state.gamePhase === 4) {
            return this.displayPhaseFour()
        } else if (this.state.gamePhase === 5) {
            return this.displayPhaseFive()
        }
    }

    render() {
        return (
            <div id='list-game-container'>
                {this.renderGame()}
            </div>
        )
    }
}
