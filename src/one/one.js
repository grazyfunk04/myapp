import React from 'react'
import './one.css'
import { Link} from 'react-router-dom'
// import axios from "axios";
// import { useEffect, useState } from "react";
// var a;


const One = () => {
  
  return (
    <div className="firstPage">
      <br />
      <h2>Choose the right plan for you</h2>

        {/* Data Creation */}
        <table className='values'>
          <tr>
            <td>
            <Link className='monthly' to="/one">Monthly</Link>
            <Link className='yearly' to="/two">Yearly</Link>
            </td>

            <td className="button-right">
              <button>Mobile</button>
            </td>
            <td className="button-right">
              <button>Basic</button>
            </td>
            <td className="button-right">
              <button>Standard</button>
            </td>
            <td className="button-right">
            <button>Premium</button>
            </td>
          </tr>
          <tr>
            <td className='heading'>Monthly price</td>
            <td>₹100</td>
            <td>₹200</td>
            <td>₹500</td>
            <td>₹700</td>
          </tr>

          <tr>
            <td className='heading'>Video quality</td>
            <td>Good</td>
            <td>Good</td>
            <td>Better</td>
            <td>Best</td>
          </tr>

          <tr>
            <td className='heading'>Resolution</td>
            <td>480p</td>
            <td>480p</td>
            <td>1080p</td>
            <td>4K+HDR</td>
          </tr>
          
          <tr>
            <td className='heading'>Devices you can use to watch</td>
            <td>Phone</td>
            <td>Phone</td>
            <td>Phone</td>
            <td>Phone</td>
          </tr>

          <tr>
            <td></td>
            <td>Tablet</td>
            <td>Tablet</td>
            <td>Tablet</td>
            <td>Tablet</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Computer</td>
            <td>Computer</td>
            <td>Computer</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>TV</td>
            <td>TV</td>
            <td>TV</td>
          </tr>
        </table>

      <div className="next-button">
        <Link className='button' to="/third" style={{textDecoration:'none'}}>Next</Link>
      </div>

    </div>
  )
}

export default One