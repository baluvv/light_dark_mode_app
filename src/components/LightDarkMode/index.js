import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    container: 'dark-mode-container',
    heading: 'dark-mode-heading',
    button: 'dark-mode-button',
    clickText: 'Light Mode',
  }

  changeMode = () => {
    this.setState(prevState => {
      if (prevState.clickText === 'Light Mode') {
        return {
          container: 'light-mode-container',
          heading: 'light-mode-heading',
          button: 'light-mode-button',
          clickText: 'Dark Mode',
        }
      }
      return {
        container: 'dark-mode-container',
        heading: 'dark-mode-heading',
        button: 'dark-mode-button',
        clickText: 'Light Mode',
      }
    })
  }

  render() {
    const {container, heading, button, clickText} = this.state
    return (
      <div className="bg-container">
        <div className={container}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button className={button} onClick={this.changeMode}>
            {clickText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
