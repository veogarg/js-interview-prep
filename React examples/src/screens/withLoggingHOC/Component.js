import React from 'react'
import withLogging from './WithLogging'

const Component = () => {
  return (
    <div>Component</div> 
  )
}

export default withLogging(Component)