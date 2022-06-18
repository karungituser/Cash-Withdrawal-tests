// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationValues, updateBalance} = props
  const {value} = denominationValues

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="list-container">
      <button
        className="denomination-button"
        type="button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
