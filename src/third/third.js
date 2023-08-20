import React from 'react'
import './third.css'
import { Link } from 'react-router-dom'
const Third = () => {
  return (
    <div className="checkout">
      <div className="container">
        <h1>Confirm Payment</h1>
        <form>
    
          <label for="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" placeholder="**** **** **** ****"/>
    
          <label for="expiration">Expiration Date</label>
          <input type="text" id="expiration" name="expiration" placeholder="MM / YY"/>
    
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" placeholder="123"/>
    
          <Link to="/fourth" className='button' style={{textDecoration:"none", marginLeft:"0px  "}}>Confirm Payment</Link>
        </form>
      </div>
    
      <div className="container">
        <h1 className='title'>Order Summary</h1>
        <table>
          <tr>
            <td>Plan Name</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Basic</td>
          </tr>

          <br /><br />
          <br /><br />

          <tr>
            <td>Biling Cycle</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Monthly</td>
          </tr>

          <br /><br />
          <br /><br />
          <tr>
            <td>Plan price</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>₹200/mo</td>
          </tr>
        </table>
      </div>
  </div>
  )
}

export default Third