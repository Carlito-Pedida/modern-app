import React from 'react'

const Button = ({styles, label}) => {
  return (
    <button type='button' className={`py-3 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-md ${styles}`}>{label}</button>
  )
}

export default Button