import React from 'react'

const Navbar = ({ filteritem, menuList}) => {
  return (

    <>
      <nav className='Navbar'>
  <div className='btn-group'>
    { 
        menuList.map(
            (curElem) => {
                return (
                <button
                 className='btn-group__item'
                 onClick={() => filteritem(curElem)}>
                 {curElem}
                </button>

                );
            })}
  </div>
  </nav>
    </>
  )
}

export default Navbar;
