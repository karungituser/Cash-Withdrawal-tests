// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="cash-Container">
        <div className="denomination-Container">
          <div className="name-container">
            <p className="initial-letter">{initial}</p>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div>
              <p className="min-balance">{balance}</p>
              <p className="description">In Rupees</p>
            </div>
          </div>
          <div className="container">
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denomination-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationValues={eachDenomination}
                key={eachDenomination.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
