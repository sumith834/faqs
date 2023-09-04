// Write your code here.
import {Component} from 'react'

import './index.css'

const PLUS = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqList} = this.props
    const {answerText} = faqList

    if (isActive) {
      return (
        <div>
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS : PLUS
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" onClick={this.onToggleActive}>
        <img src={image} alt={altText} className="active-image" />
      </button>
    )
  }

  render() {
    const {faqList} = this.props
    const {questionText} = faqList

    return (
      <li className="faq-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
