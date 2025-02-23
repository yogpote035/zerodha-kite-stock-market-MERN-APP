import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        {/* col 1 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="support-head-w-icon">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="" className="link-support"> Getting started</a>
          <a href="" className="link-support"> Online</a>
          <a href="" className="link-support"> Offline</a>
          <a href="" className="link-support"> Charges</a>
          <a href="" className="link-support"> Company, Partnership and HUF</a>
          <a href="" className="link-support"> Non Resident Indian (NRI)</a>
          <br />
        </div>
        {/* col 2 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="support-head-w-icon">
            <i className="fa-regular fa-user"></i> Your Zerodha Account

          </h4>
          <a href="" className="link-support"> Login credentials</a>
          <a href="" className="link-support"> Your Profile</a>
          <a href="" className="link-support"> Account modification and segment addition</a>
          <a href="" className="link-support"> CMR & DP ID</a>
          <a href="" className="link-support"> Nomination</a>
          <a href="" className="link-support"> Transfer and conversion of shares</a>
          <br />
        </div>
        {/* col 3 */}

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="support-head-w-icon">
            <i className="fa-solid fa-chart-simple"></i> Trading and Markets
          </h4>
          <a href="" className="link-support">Trading FAQs</a>
          <a href="" className="link-support">Kite</a>
          <a href="" className="link-support">Margins</a>
          <a href="" className="link-support">Product and order types</a>
          <a href="" className="link-support">Corporate actions</a>
          <a href="" className="link-support">Kite features</a>
          <br />
        </div>
        {/* col 4 */}

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="support-head-w-icon">
            <i className="fa-regular fa-credit-card"></i>  Funds
          </h4>
          <a href="" className="link-support">Fund withdrawal</a>
          <a href="" className="link-support">Adding funds</a>
          <a href="" className="link-support">Adding bank accounts</a>
          <a href="" className="link-support">eMandates</a>
          <br />
        </div>
        {/* col 5 */}

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="support-head-w-icon">
            <i className="fa-regular fa-compass"></i>  Console
          </h4>

          <a href="" className="link-support">IPO</a>
          <a href="" className="link-support">Portfolio</a>
          <a href="" className="link-support">Funds statement</a>
          <a href="" className="link-support">Profile</a>
          <a href="" className="link-support">Reports</a>
          <a href="" className="link-support">Referral program</a>
          <br />
        </div>
        {/* col 6 */}

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="support-head-w-icon">
            <i className="fa-solid fa-circle-notch"></i> Coin</h4>
          <a href="" className="link-support">Understanding mutual funds and Coin</a>
          <a href="" className="link-support">Coin app</a>
          <a href="" className="link-support">Coin web</a>
          <a href="" className="link-support">Transactions and reports</a>
          <a href="" className="link-support">National Pension Scheme (NPS)</a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
