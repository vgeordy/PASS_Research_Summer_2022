import React from 'react'
import Select from 'react-select'


const options = [
    { value: 'http://localhost:3004/institutions/mercycollege', label: 'Mercy College'},
    { value: 'strawberry', label: 'University Of Illinois' },
    { value: 'vanilla', label: 'DMV' }
  ]

export const URLOptions = () => {
  return (
    <Select options={options} />
  )
}
