import React from 'react'
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <h1>Este será el Index</h1>
      <Link to="/coco">Ir a la página de perro</Link>
    </div>
  )
}

export default Index