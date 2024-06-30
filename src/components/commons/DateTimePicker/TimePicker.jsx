import { useState } from 'react';
import DateTimePicker from 'react-weblineindia-time-picker'
import "./datetimepicker.css"

const TimePicker = ({ value, handleChange, toggle }) => {
  const [tempTime, setTempTime] = useState(value ?? new Date())

  const handleSelect = (time) => {
    setTempTime(time.value)
  }

  const handleOk = () => {
    if (handleChange) {
      handleChange(tempTime)
    }
  }

  const handleCancel = () => {
    setTempTime(value ?? new Date())
    if (toggle) toggle()
  }

  return (
    <div className="overlay-picker">
      <div className="picker">
        <DateTimePicker
          hourFormat='12'
          value={tempTime}
          onChange={handleSelect}
          timeOnly
        />
        <div className="confirm-picker">
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleOk}>OK</button>
        </div>
      </div>
    </div>
  )
}

export default TimePicker