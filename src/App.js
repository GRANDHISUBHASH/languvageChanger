import {Component} from 'react'
import TabItem from './Components/TabItem'
import './App.css'
import DisplayItem from './Components/DisplayItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

console.log(languageGreetingsList)
// Replace your code here
class App extends Component {
  state = {
    LanguvageActivated: languageGreetingsList[0].id,
  }

  isActive = id => {
    this.setState({LanguvageActivated: id})
  }

  render() {
    const {LanguvageActivated} = this.state
    console.log(LanguvageActivated)
    const DisplyValue = languageGreetingsList.find(
      eachItem => eachItem.id === LanguvageActivated,
    )

    return (
      <div>
        <h1>Multilingual Greetings</h1>
        <ul className="ButtonesList">
          {languageGreetingsList.map(eachItem => (
            <TabItem
              eachItem={eachItem}
              isActive={this.isActive}
              key={eachItem.id}
              LanguvageActivated={LanguvageActivated}
              changeColor={LanguvageActivated === eachItem.id}
            />
          ))}
        </ul>
        <div>
          <DisplayItem DisplyValue={DisplyValue} />
        </div>
      </div>
    )
  }
}

export default App
