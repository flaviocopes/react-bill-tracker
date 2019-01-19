import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default props => {
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState(props.categories[0])
  const [date, setDate] = useState(new Date().toISOString())

  const handleChangeAmount = e => {
    setAmount(parseInt(e.target.value), 10)
  }

  const handleChangeCategory = e => {
    setCategory(e.target.value)
  }

  const handleChangeDate = date => {
    setDate(date)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!amount) {
      alert('Please enter an amount')
      return
    }

    props.onSubmit(amount, category || props.categories[0], date)
  }

  return (
    <form className="h-100 w-full flex items-center justify-center font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Enter a new bill</h1>
          <p>E.g. 'Electricity' or 'Gas' or 'Internet'</p>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add category"
              value={amount}
              onChange={handleChangeAmount}
            />

            <select onChange={handleChangeCategory}>
              {props.categories
                ? props.categories.map((value, index) => {
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    )
                  })
                : ''}
            </select>

            <DatePicker selected={date} onChange={handleChangeDate} />

            <button
              className="flex-no-shrink p-2 border-2 rounded bg-teal text-white border-teal hover:text-white hover:bg-teal"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
