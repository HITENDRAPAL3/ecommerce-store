import React from 'react'
import Link from 'next/link'
const canceled = () => {
  return (
   <div className="success-wrapper">
      <div className="cancel">
        <p className="icon">
        </p>
        <h2>Sorry, Your Order was Cancelled !!</h2>
        
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:S&H@gmail.com">
            S&H@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default canceled