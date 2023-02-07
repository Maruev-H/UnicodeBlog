import React, {useState}from 'react'

export default function ReadMore({children, len}) {

    const [isReadMore, setisReadMore] = useState(false)

    const readMoreBtn = () =>{
        setisReadMore(!isReadMore)
    }

  return (
    <>
    <span>{isReadMore? children : `${children.substring(0, len)}...`}</span>
    <div><p onClick={readMoreBtn} className='ReadMore'>{isReadMore? 'read less' : 'read more...'}</p></div>
    </>
  )
}
