import React from 'react'
import './ExploreMenu.css'
import {menu_list } from '../../../assets/index'
const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose frm a diverse menu featuring a delectable array of dishes.our mission give you  delicious dishes</p>
      <div className='explore-menu-list'>
       
  {menu_list.map((item, index) => {
    return (
        
    <div key={index} className='explore-menu-item'>
      <img src={item.menu_image} alt={item.menu_name} />
      <p>{item.menu_name}</p>
    </div>
    )
})}
</div>
          
    </div>
    
  )
}

export default ExploreMenu
