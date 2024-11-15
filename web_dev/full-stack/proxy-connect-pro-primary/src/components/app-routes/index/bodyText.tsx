import React from 'react';

const IndexBodyText = () => {
  return (
    <>
        <div className='mx-auto body-text-1'>
            <h2 className='p-1 title'> 
                <div className='block'>
                    <span className='text-success'>ProxyConnect </span>
                    <span>helps you locate </span>
                </div>
                <span>
                    <span className='text-warning '>services </span>
                    <span>you need, </span> 
                </span>
                <div className='block'>
                    <span className='text-info'>around you</span>
                </div>       
            </h2>
            <div className='subtitle mt-6 mb-6'>
                'Technology is best when it brings people together' 
                <span className='title-5 block'> — Matt Mullenweg</span>
            </div>    
        </div>
    </>
  )
}

export default IndexBodyText;