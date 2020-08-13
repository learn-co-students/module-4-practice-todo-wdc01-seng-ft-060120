import React from 'react'
import Button from './Button'

const Menu = props => {

  function renderMunuButtons() {
    return props.categories.map( c => 
        <Button
          category={c}
          categorySelected={ props.categorySelected }
          updateCategory={ props.updateCategory }
        />
      )
  }
  return (
    <div className='categories'>
      { renderMunuButtons() }
    </div>
  )
}

export default Menu
