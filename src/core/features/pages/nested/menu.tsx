import React from 'react'

function Menu({list=[]}) {
  return (
    // {recursive or tree vview componet}
    <div>
      {
        list && list.length?
        <p>display the menu component here</p>
         : null
      }
    </div>
  )
}

export default Menu
