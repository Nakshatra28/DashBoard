import React from 'react'
import Slidebar from '../component/Slidebar';
import Maincontent from '../component/maincontent';
import Linegraph from '../component/Linegraph';

const Layout = () => {
  return (
    <>
    <div className=' flex'>
   
   <Slidebar/>
 
   
   
        <Maincontent/>

  
    </div>
    </>
    
  )
}

export default Layout;