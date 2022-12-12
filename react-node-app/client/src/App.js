import React from "react";
import DisableDates from "./disableDates.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Identity Banking</h1>
      </header>
      {/*Intro*/}
      <p className="intro">Welcome to Identity Banking! We work diligently to provide you
        with a seamless banking experience and to keep you protected 
        from fraudulent activity.</p>
      <p className="intro">To create an account with us, please enter your demographics below. 
      Required fields are bolded with an asterisk.</p>
      {/*Demographic Entry Form*/}
      <form action="/form_submit" method="post">
        <ul>
          <li>
            <label htmlFor="fname">
              First Name: 
            </label>
            <input type="text" id="fname" name="name_first" autoFocus />
          </li>
          <li>
            <label htmlFor="lname">
              Last Name: 
            </label>
            <input type="text" id="lname" name="name_last" />
          </li>
          <li>
            <label htmlFor="add1">
              <strong>*Address Line 1: </strong>
            </label>
            <input type="text" id="add1" name="address_line_1" required={true} />
          </li>
          <li>
            <label htmlFor="add2">
              Address Line 2: 
            </label>
            <input type="text" id="add2" name="address_line_2" />
          </li>
          <li>
            <label htmlFor="city">
              <strong>*City: </strong>
            </label>
            <input type="text" id="city" name="address_city" required={true} />
          </li>
          <li>
            <label htmlFor="state">
              <strong>*State: </strong>
            </label>
            <select id="state" name="address_state" required={true}>
              <option selected disabled>Select Your State</option>
              <option>AL</option>
              <option>AK</option>
              <option>AR</option>
              <option>AZ</option>
              <option>CA</option>
              <option>CO</option>
              <option>CT</option>
              <option>DC</option>
              <option>DE</option>
              <option>FL</option>
              <option>GA</option>
              <option>HI</option>
              <option>IA</option>
              <option>ID</option>
              <option>IL</option>
              <option>IN</option>
              <option>KS</option>
              <option>KY</option>
              <option>LA</option>
              <option>MA</option>
              <option>MD</option>
              <option>ME</option>
              <option>MI</option>
              <option>MN</option>
              <option>MO</option>
              <option>MS</option>
              <option>MT</option>
              <option>NC</option>
              <option>NE</option>
              <option>NH</option>
              <option>NJ</option>
              <option>NM</option>
              <option>NV</option>
              <option>NY</option>
              <option>ND</option>
              <option>OH</option>
              <option>OK</option>
              <option>OR</option>
              <option>PA</option>
              <option>RI</option>
              <option>SC</option>
              <option>SD</option>
              <option>TN</option>
              <option>TX</option>
              <option>UT</option>
              <option>VT</option>
              <option>VA</option>
              <option>WA</option>
              <option>WI</option>
              <option>WV</option>
              <option>WY</option>
            </select>
          </li>
          <li>
            <label htmlFor="zip">
              <strong>*ZIP Code: </strong>
            </label>
            <input type="text" id="zip" name="address_postal_code" required={true} />
          </li>
          <li>
            <label htmlFor="country">
              Country: 
            </label>
            <input type="text" id="country" name="address_country_code" value="US" readOnly={true} />
          </li>
          <li>
            <label htmlFor="ssn">
              SSN: 
            </label>
            <input type="text" id="ssn" name="document_ssn" placeholder="#########" pattern="\d{9}"/>
          </li>
          <li>
            <label htmlFor="email">
              Email Address: 
            </label>
            <input type="email" id="email" name="email_address" />
          </li>
          <li>
            <label htmlFor="phone">
              <strong>*Phone: </strong>
            </label>
            <input type="tel" id="phone" name="phone_number" required={true} />
          </li>
          <li>
            <label htmlFor="dob">
              <strong>*Date of Birth: </strong>
            </label>
            <DisableDates />
          </li>
        </ul>
        {/* Submit Button */}
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;