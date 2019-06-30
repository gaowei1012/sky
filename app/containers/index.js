import React, { useState, useEffect } from 'react'

const Container = () => {

  const [ count, setCount ] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      console.log(count)
    })
  }, [])

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>+</button>
    </>
  )
}

export default Container
