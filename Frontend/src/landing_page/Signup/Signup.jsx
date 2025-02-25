import React from 'react'
import OpenAccount from '../OpenAccount'

function Signup() {
  return (
    <div className='container' style={{ marginTop: "5rem" }}>
      <div className="mb-5" style={{ marginTop: "9rem" }}>
        <h1 className=' fw-bold text-center' style={{ lineHeight: "4rem", fontSize: "3rem" }}>Open a free demat and trading account online
        </h1>
        <p className='text-center text-muted fs-5'>Start investing brokerage free and join a community of 1.5+ crore investors and traders
        </p>
      </div>

      <div className="row gap-5">
        <div className="col">
          <img src="media_images/account_open.svg" alt="account_open" />
        </div>
        <div className="col">
          <h1 className="fs-2">Signup now
          </h1>
          <p className="text-muted mt-2 mb-2">Or track your existing application
          </p>

          <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">+91</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" style={{ outline: "none", boxShadow: "none" }} />
          </div>
          <p className="fs-6 text-muted mt-1"><small>You will receive an OTP on your number</small></p>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-lg btn-outline-success rounded-3"
            >
              Continue
            </button>
          </div>

          <p><small className='text-primary'>Want to open an NRI account?
          </small></p>
          <p><small>By proceeding, you agree to the Zerodha <span className='text-primary'> terms</span> &  <span className='text-primary'>privacy policy</span>
          </small></p>
        </div>
      </div>

      <OpenAccount/>
    </div>
  )
}

export default Signup