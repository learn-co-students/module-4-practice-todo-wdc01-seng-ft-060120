import React from 'react'

const Button = props => {
  return (
    <button
      className={ props.category === props.categorySelected && 'selected' }
      onClick={ () => props.updateCategory( props.category ) }
    >{props.category}
    </button>
  )
}

export default Button
