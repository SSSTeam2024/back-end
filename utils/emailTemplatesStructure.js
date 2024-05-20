const emailTemplates = {
  with_return_quote_received: (visitor, quote, creationDate) =>
    `
    <html>
  <body
    style="
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    "
  >
    <table
      style="
        width: 600px;
        height: 96px;
        margin: 0 auto;
        border: none;
        text-align: center;
        padding: 0;
        border-collapse: collapse;
        color: #000;
      "
    >
      <tbody>
        <tr>
          <td>
            <a href="">
              <img src="cid:unique-image-id" alt="" />
            </a>
          </td>
        </tr>
        <tr>
          <td style="text-align: left">
            <p>Dear ` +
    visitor.name +
    `</p>
            <p>
              Thank you for your recent enquiry, we hope to have a quotation
              ready for you as soon as possible.
            </p>
            <p>
              Please ensure you check all the information you have provided such
              as times, dates, pick-up and drop-off details are correct.
            </p>
            <p>
              Any changes to these details are to be brought to our attention as
              soon as possible, in order to be amended as this may affect the
              pending quotation.
            </p>
            <p>Hope to hear from you soon.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <fieldset
      style="
        width: 600px;
        margin: auto;
      "
    >
      <legend style="margin-left: 20%">
        <strong>Reference: </strong>02022024 <strong>Date: </strong>` +
    creationDate +
    `
      </legend>
        <table
          style="
            width: 600px;
            border: none;
            text-align: center;
            padding: 8px;
          "
        >
          <tbody>
            <tr>
              <td colspan="2" style="color: #000;">
                <b>QUOTE REQUEST RECEIVED</b>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Pickup</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label></label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Date & Time</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.date + `<strong> at </strong>` + quote.pickup_time +
    ` </label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Collection Address</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.start_point.placeName +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Destination Address</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.destination_point.placeName +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Luggage</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.luggage_details +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Return</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label></label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Date & Time</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
                quote.date + `<strong> at </strong>` + quote.pickup_time +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Collection Address</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.destination_point.placeName +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Destination Address</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.start_point.placeName +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Route</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label><a href="https://www.google.com/maps/dir/?api=1&origin=` +
    quote.start_point.coordinates.lat +
    `,` +
    quote.start_point.coordinates.lon +
    `&destination=` +
    quote.destination_point.coordinates.lat +
    `,` +
    quote.destination_point.coordinates.lon +
    `&travelmode=driving">View Route</a></label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Luggage</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.luggage_details +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Number Of Passengers</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.passengers_number +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Vehicle Type</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label> ` +
    quote.vehicle_type +
    ` </label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Journey Type</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.journey_type +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Passenger Name</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    visitor.name +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Passenger Phone</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    visitor.phone +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Email</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>
                  <a
                    style="
                      text-decoration: none !important;
                    "
                    >` +
    visitor.email +
    `</a
                  >
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </fieldset>
  </body>
</html>


    `,
  one_way_quote_received: (visitor, quote, creationDate) =>
    `
    <html>
  <body
    style="
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    "
  >
    <table
      style="
        width: 600px;
        height: 96px;
        margin: 0 auto;
        border: none;
        text-align: center;
        padding: 0;
        border-collapse: collapse;
        color: #000;
      "
    >
      <tbody>
        <tr>
          <td>
            <a href="">
              <img src="cid:unique-image-id" alt="" />
            </a>
          </td>
        </tr>
        <tr>
          <td style="text-align: left">
            <p>Dear ` +
    visitor.name +
    `</p>
            <p>
              Thank you for your recent enquiry, we hope to have a quotation
              ready for you as soon as possible.
            </p>
            <p>
              Please ensure you check all the information you have provided such
              as times, dates, pick-up and drop-off details are correct.
            </p>
            <p>
              Any changes to these details are to be brought to our attention as
              soon as possible, in order to be amended as this may affect the
              pending quotation.
            </p>
            <p>Hope to hear from you soon.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <fieldset
      style="
        width: 600px;
        margin: auto;
      "
    >
      <legend style="margin-left: 20%">
        <strong>Reference: </strong>02022024 <strong>Date: </strong>` +
    creationDate +
    `
      </legend>
        <table
          style="
            width: 600px;
            border: none;
            text-align: center;
            padding: 8px;
          "
        >
          <tbody>
            <tr>
                <td colspan="2" style="color: #000;">
                  <b>QUOTE REQUEST RECEIVED</b>
                </td>
            </tr>
            <tr>
                <td
                  style="
                    width: 200px;
                    text-align: right;
                    vertical-align: top;
                    padding-right: 15px;
                    background-color: #555;
                    color: #ffe605;
                  "
                >
                  <b>Pickup</b>
                </td>
                <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc;">
                  <label></label>
                </td>
              </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Date & Time</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
                quote.date + `<strong> at </strong>` + quote.pickup_time +
    ` </label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Collection Address</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.start_point.placeName +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Destination Address</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.destination_point.placeName +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Luggage</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.luggage_details +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Number Of Passengers</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.passengers_number +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Vehicle Type</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label> ` +
    quote.vehicle_type +
    ` </label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Journey Type</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.journey_type +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Passenger Name</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    visitor.name +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Passenger Phone</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    visitor.phone +
    `</label>
              </td>
            </tr>
            <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Email</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>
                  <a
                    style="
                      text-decoration: none !important;
                    "
                    >` +
    visitor.email +
    `</a
                  >
                </label>
              </td>
            </tr>
          </tbody>
        </table>
    </fieldset>
  </body>
</html>
 
  `,
  booking: (visitor, price, deposit_percentage, url, quote, creationDate) =>
    `
    <html>
  <body
    style="
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    "
  >
  <table
      style="
        width: 600px;
        height: 96px;
        margin: 0 auto;
        border: none;
        text-align: center;
        padding: 0;
        border-collapse: collapse;
        color: #000;
      "
    >
    <tbody style="font-family: 'Roboto'; font-size: 1rem;">
      <tr>
        <td>
          <a href="">
            <img src="cid:unique-image-id" alt="" />
          </a>
        </td>
      </tr>
      <tr>
        <td style="text-align: left">
          <p>Dear ` +
    visitor.name +
    `</p>
          <p>I hope this email finds you well.</p>
          <p>
            We are pleased to inform you that your quote request has been
            successfully processed, and we are excited to assist you with your
            arrangements.
          </p>
          <!-- <p>
            As per your request, the total price for the journey is <strong style="font-size: 1rem;">` +
    price +
    `</strong>.
          </p> -->
          <!-- <p>
            To proceed with confirming your booking, please click on the button
            below: 
            <a href="` +
    url +
    `" style="display: inline-block;
                                padding: 10px 20px;
                                margin: 10px;
                                text-align: center;
                                text-decoration: none;
                                font-size: 16px;
                                cursor: pointer;
                                color: #fff;
                                background-color: #e67e22;
                                border: 2px solid #d6731d;
                                border-radius: 17px;">Confirm Your Booking</a>
          </p> -->
          <p>
            Once booked, you will receive an email with payment link to complete
            your payment process. 
          <p>
            If you have any questions or need further
            assistance, please do not hesitate to reach out to our dedicated
            team at Bouden Coach Travel.
          </p>  
          </p>
          <p>
            Thank you once again for choosing us. We look forward to provide you
            with an exceptional experience.
          </p>
          <p>Warm regards,</p>
        </td>
      </tr>
    </tbody>
  </table>
  <br />
  <fieldset
    style="
      width: 600px;
      margin: auto;
    "
  >
    <legend style="margin-left: 20%">
      <strong>Reference: </strong>02022024 <strong>Date: </strong>` +
    creationDate +
    `
    </legend>
      <table
        style="
          width: 600px;
          border: none;
          text-align: center;
          padding: 8px;
        "
      >
        <tbody>
          <tr>
              <td colspan="2" style="color: #000;">
                <b>QUOTE REQUEST RECEIVED</b>
              </td>
          </tr>
          <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Pickup</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc;">
                <label></label>
              </td>
            </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Date & Time</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
              quote.date + `<strong> at </strong>` + quote.pickup_time +
    ` </label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Collection Address</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.start_point.placeName +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Destination Address</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.destination_point.placeName +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Luggage</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.luggage_details +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Number Of Passengers</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.passengers_number +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Vehicle Type</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label> ` +
    quote.vehicle_type +
    ` </label>
            </td>
          </tr>
          <tr>
            <td  style="
            width: 200px;
            text-align: right;
            vertical-align: top;
            padding-right: 15px;
            background-color: #555;
            color: #ffe605;
          "></td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc;">
            <span style="color: #000">£` +
    price +
    `</span> 
      <a href=` +
    url +
    `>BOOK NOW</a>
              </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Journey Type</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.journey_type +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Passenger Name</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    visitor.name +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Passenger Phone</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    visitor.phone +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Email</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>
                <a
                  style="
                    text-decoration: none !important;
                  "
                  >` +
    visitor.email +
    `</a
                >
              </label>
            </td>
          </tr>
        </tbody>
      </table>
  </fieldset>
  <fieldset
    style="
      width: 400px;
      margin: auto;
    "
  >
    <legend style="margin-left: 20%">
      <strong>PAYMENT</strong>
    </legend>
      <table
        style="
          width: 400px;
          border: none;
          text-align: center;
          padding: 8px;
        "
      >
        <tbody>
          <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Vehicle Price</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc;">
                £` +
    price +
    `
              </td>
            </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>VAT</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>£` +
    price * 0.2 +
    ` </label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Total Price</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>£` +
    (Number(price) + Number(price) * 0.2) +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Deposit Amount</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>£` +
    (
      (Number(price) + Number(price) * 0.2) *
      (Number(deposit_percentage) / 100)
    ).toFixed(2) +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Current Balance</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>£` +
    (Number(price) + Number(price) * 0.2) +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Click to Book</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
             <a href=` +
    url +
    `>BOOK NOW</a>
            </td>
          </tr>
        </tbody>
      </table>
  </fieldset>
  </body>
</html>
  `,
  booking_success: () =>
    `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Booking Success</title>

    <style>
      body {
        background: #62f1621c;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
      }
      p {
        font-size: 1.3rem;
        border: 2px solid #00800047;
        border-radius: 4px;
        padding: 18px;
      }
    </style>
  </head>
  <body>
    <div>
      <p>Your quote has been successfully booked!</p>
    </div>
  </body>
</html>

  `,
  payment: (visitor, url, quote, creationDate) =>
    `
  <html>
  <body
    style="
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    "
  >
  <table
      style="
        width: 600px;
        height: 96px;
        margin: 0 auto;
        border: none;
        text-align: center;
        padding: 0;
        border-collapse: collapse;
        color: #000;
      "
    >
    <tbody style="font-family: 'Roboto'; font-size: 1rem;">
      <tr>
        <td>
          <a href="">
            <img src="cid:unique-image-id" alt="" />
          </a>
        </td>
      </tr>
      <tr>
        <td style="text-align: left">
          <p>Dear ` +
    visitor.name +
    `, </p>

          <p>I hope this email finds you well.</p>
          <p>We would like to extend our gratitude for choosing our service for your journey.</p>
          <p>Here you find the payment link for the quote.</p> 
          <p>Simply click on the button below to proceed with your payment:
            <a href="` +
    url +
    `" style="display: inline-block;
                                padding: 10px 20px;
                                margin: 10px;
                                text-align: center;
                                text-decoration: none;
                                font-size: 16px;
                                cursor: pointer;
                                color: #fff;
                                background-color: #e67e22;
                                border: 2px solid #d6731d;
                                border-radius: 17px;">Proceed Your Payment</a>
          </p>
          <p>Please ensure to complete the payment process at your earliest convenience to avoid any delays in your journey.</p> 
          <p>If you encounter any issues or have any questions regarding the payment process, feel free to reach out to our customer support team.</p>
          <p>Warm regards.</p>
        </td>
      </tr>
    </tbody>
  </table>
  <br />
  <fieldset
    style="
      width: 600px;
      margin: auto;
    "
  >
    <legend style="margin-left: 20%">
      <strong>Reference: </strong>02022024 <strong>Date: </strong>` +
    creationDate +
    `
    </legend>
      <table
        style="
          width: 600px;
          border: none;
          text-align: center;
          padding: 8px;
        "
      >
        <tbody>
          <tr>
              <td colspan="2" style="color: #000;">
                <b>QUOTE REQUEST</b>
              </td>
          </tr>
          <tr>
              <td
                style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                "
              >
                <b>Pickup</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc;">
                <label></label>
              </td>
            </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Date & Time</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.date  + `at` + quote.pickup_time +
    ` </label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Collection Address</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.start_point.placeName +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Destination Address</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.destination_point.placeName +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Luggage</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.luggage_details +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Number Of Passengers</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.passengers_number +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Vehicle Type</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label> ` +
    quote.vehicle_type +
    ` </label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Journey Type</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.journey_type +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Passenger Name</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    visitor.name +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Passenger Phone</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    visitor.phone +
    `</label>
            </td>
          </tr>
          <tr>
            <td
              style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              "
            >
              <b>Email</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>
                <a
                  style="
                    text-decoration: none !important;
                  "
                  >` +
    visitor.email +
    `</a
                >
              </label>
            </td>
          </tr>
        </tbody>
      </table>
  </fieldset>
  </body>
</html>

  `,
  becomePartnerDemand: (affiliate) =>
  `
  <html>
<body style="
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  ">
  <table style="
      width: 600px;
      height: 96px;
      margin: 0 auto;
      border: none;
      text-align: center;
      padding: 0;
      border-collapse: collapse;
      color: #000;
    ">
      <tbody style="font-family: 'Roboto'; font-size: 1rem;">
          <tr>
              <td>
                  <a href="">
                      <img src="cid:unique-image-id" alt="" />
                  </a>
              </td>
          </tr>
          <tr>
              <td style="text-align: left">
                  <p>Dear ` + affiliate.name + `</p>
                  <p>I hope this email finds you well.We have received your request to become a partner with us. We appreciate your interest in collaborating with our company</p>
                  <p>
                  Your partnership request has been received successfully, and we are currently reviewing the details you provided. We understand the importance of this opportunity and assure you that your request will be given the utmost attention it deserves.
                  </p>
                  <!-- <p>
                  Rest assured, our sales team is already in the process of reviewing your request thoroughly. They will be reaching out to you as soon as possible to discuss the potential partnership further and explore how we can mutually benefit from this collaboration.
        </p> -->
                  <!-- <p>
                  <p>
                  In the meantime, if you have any additional questions or need further assistance, please feel free to reach out to us at Bouden Coach Travel.
                  </p>
                  </p>
                  <p>
                  Once again, thank you for considering a partnership with us. We look forward to the possibility of working together and achieving mutual success.
                  </p>
                  <p>Warm regards,</p>
              </td>
          </tr>
      </tbody>
  </table>
  <br />
  <fieldset style="
    width: 600px;
    margin: auto;
  ">
      <legend style="margin-left: 20%">
          <strong>Reference: </strong>02022024 <strong>Date: </strong>`+
          affiliate.enquiryDate +`
      </legend>
      <table style="
        width: 600px;
        border: none;
        text-align: center;
        padding: 8px;
      ">
          <tbody>
              <tr>
                  <td colspan="2" style="color: #000;">
                      <b>BECOME PARTNER REQUEST RECEIVED</b>
                  </td>
              </tr>
              <tr>
                  <td style="
              width: 200px;
              text-align: right;
              vertical-align: top;
              padding-right: 15px;
              background-color: #555;
              color: #ffe605;
            ">
                      <b>Name</b>
                  </td>
                  <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                      <label>` + affiliate.name + ` </label>
                  </td>
              </tr>
              <tr>
                  <td style="
              width: 200px;
              text-align: right;
              vertical-align: top;
              padding-right: 15px;
              background-color: #555;
              color: #ffe605;
            ">
                      <b>Email</b>
                  </td>
                  <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                      <label>`+ affiliate.email +`</label>
                  </td>
              </tr>
              <tr>
                  <td style="
              width: 200px;
              text-align: right;
              vertical-align: top;
              padding-right: 15px;
              background-color: #555;
              color: #ffe605;
            ">
                      <b>Phone</b>
                  </td>
                  <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                      <label>`+ affiliate.phone +`</label>
                  </td>
              </tr>
              <tr>
                  <td style="
              width: 200px;
              text-align: right;
              vertical-align: top;
              padding-right: 15px;
              background-color: #555;
              color: #ffe605;
            ">
                      <b>Address</b>
                  </td>
                  <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                      <label>`+ affiliate.address +`</label>
                  </td>
              </tr>
              <tr>
                  <td style="
              width: 200px;
              text-align: right;
              vertical-align: top;
              padding-right: 15px;
              background-color: #555;
              color: #ffe605;
            ">
                      <b>Website</b>
                  </td>
                  <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                      <label>`+ affiliate.website +`</label>
                  </td>
              </tr>
          </tbody>
      </table>
  </fieldset>
</body>

</html>
`,
becomePartnerDemandRefused: (affiliate) =>
  `
  <html>
<body style="
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  ">
  <table style="
      width: 600px;
      height: 96px;
      margin: 0 auto;
      border: none;
      text-align: center;
      padding: 0;
      border-collapse: collapse;
      color: #000;
    ">
      <tbody style="font-family: 'Roboto'; font-size: 1rem;">
          <tr>
              <td>
                  <a href="">
                      <img src="cid:unique-image-id" alt="" />
                  </a>
              </td>
          </tr>
          <tr>
              <td style="text-align: left">
                  <p>Dear ` + affiliate.name + `</p>
                  <p>I hope this email finds you well. First of all, We appreciate your interest in collaborating with our company</p>
                  <p>
                  After careful consideration, we regret to inform you that we are unable to accept your partnership request at this time. Please know that this decision was not made lightly, and we genuinely appreciate the time and effort you put into your application.
                  </p>
                  <!-- <p>
                  Rest assured, our sales team is already in the process of reviewing your request thoroughly. They will be reaching out to you as soon as possible to discuss the potential partnership further and explore how we can mutually benefit from this collaboration.
        </p> -->
                  <!-- <p>
                  <p>
                  We understand that this news may be disappointing, and we want to assure you that your interest in partnering with us is valued. However, we are unable to move forward with your request at this time.
                  </p>
                  </p>
                  <p>We encourage you to continue exploring partnership opportunities that align more closely with your goals and objectives. While we may not be able to collaborate at this moment, we wish you all the best in your future endeavors.</p>
                  <pThank you for considering a partnership with us, and we sincerely apologize for any inconvenience this may cause. If you have any questions or would like further clarification on our decision, please feel free to reach out to us</p>
                  <p>
                  Once again, thank you for considering a partnership with us. We look forward to the possibility of working together and achieving mutual success.
                  </p>
                  <p>Warm regards,</p>
              </td>
          </tr>
      </tbody>
  </table>
  <br />
  <fieldset style="
    width: 600px;
    margin: auto;
  ">
      <legend style="margin-left: 20%">
          <strong>Reference: </strong>02022024 <strong>Date: </strong>`+
          affiliate.enquiryDate +`
      </legend>
      <table style="
        width: 600px;
        border: none;
        text-align: center;
        padding: 8px;
      ">
          <tbody>
              <tr>
                  <td colspan="2" style="color: #000;">
                      <b>BECOME PARTNER REQUEST RECEIVED</b>
                  </td>
              </tr>
              <tr>
                  <td style="
              width: 200px;
              text-align: right;
              vertical-align: top;
              padding-right: 15px;
              background-color: #555;
              color: #ffe605;
            ">
                      <b>Name</b>
                  </td>
                  <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                      <label>` + affiliate.name + ` </label>
                  </td>
              </tr>
              <tr>
                  <td style="
              width: 200px;
              text-align: right;
              vertical-align: top;
              padding-right: 15px;
              background-color: #555;
              color: #ffe605;
            ">
                      <b>Email</b>
                  </td>
                  <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                      <label>`+ affiliate.email +`</label>
                  </td>
              </tr>
              <tr>
                  <td style="
              width: 200px;
              text-align: right;
              vertical-align: top;
              padding-right: 15px;
              background-color: #555;
              color: #ffe605;
            ">
                      <b>Phone</b>
                  </td>
                  <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                      <label>`+ affiliate.phone +`</label>
                  </td>
              </tr>
              <tr>
                  <td style="
              width: 200px;
              text-align: right;
              vertical-align: top;
              padding-right: 15px;
              background-color: #555;
              color: #ffe605;
            ">
                      <b>Address</b>
                  </td>
                  <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                      <label>`+ affiliate.address +`</label>
                  </td>
              </tr>
              <tr>
                  <td style="
              width: 200px;
              text-align: right;
              vertical-align: top;
              padding-right: 15px;
              background-color: #555;
              color: #ffe605;
            ">
                      <b>Fleet Number</b>
                  </td>
                  <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                      <label>`+ affiliate.fleetNumber +`</label>
                  </td>
              </tr>
              <tr>
                  <td style="
              width: 200px;
              text-align: right;
              vertical-align: top;
              padding-right: 15px;
              background-color: #555;
              color: #ffe605;
            ">
                      <b>Region</b>
                  </td>
                  <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                      <label> `+ affiliate.region +` </label>
                  </td>
              </tr>
          </tbody>
      </table>
  </fieldset>
</body>

</html>
`,
  affiliateAcceptence: (id, login, password, url, affiliate, service_date, vehicle_type, coverageArea) =>
    `
    <html>
<body style="
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    ">
    <table style="
        width: 600px;
        height: 96px;
        margin: 0 auto;
        border: none;
        text-align: center;
        padding: 0;
        border-collapse: collapse;
        color: #000;
      ">
        <tbody style="font-family: 'Roboto'; font-size: 1rem;">
            <tr>
                <td>
                    <a href="">
                        <img src="cid:unique-image-id" alt="" />
                    </a>
                </td>
            </tr>
            <tr>
                <td style="text-align: left">
                    <p>Dear ` + affiliate.name + `</p>
                    <p>I hope this email finds you well.</p>
                    <p>
                    We are thrilled to inform you that your request to become a partner with us has been accepted.
                    </p>
                    <strong style="font-size: 1rem;">Congratulations and welcome aboard!</strong>.
                    <!-- <p>
          </p> -->
                    <!-- <p>
            To proceed with confirming your booking, please click on the button
            below: 
            <a href="` + url + `" style="display: inline-block;
                                padding: 10px 20px;
                                margin: 10px;
                                text-align: center;
                                text-decoration: none;
                                font-size: 16px;
                                cursor: pointer;
                                color: #fff;
                                background-color: #e67e22;
                                border: 2px solid #d6731d;
                                border-radius: 17px;">Confirm Your Booking</a>
          </p> -->
                    <p>
                    As a valued partner, you now have access to our partnership portal, where you can manage your account, access resources, and stay updated on relevant information.
                    <p>
                    Please note that for security purposes, we recommend changing your password upon your first login. Your portal provides a comprehensive platform where you can track your partnership activities, access marketing materials, and collaborate with our team seamlessly.
                    </p>
                    </p>
                    <p>
                    We believe that our partnership holds great potential for both parties, and we are excited to embark on this journey together. Our team is dedicated to supporting you every step of the way to ensure our mutual success.
                    </p>
                    <p>
                    If you have any questions or need assistance navigating the portal, please don't hesitate to contact us
                    </p>
                    <p>
                    Once again, congratulations on becoming our partner! We look forward to a fruitful collaboration ahead.
                    </p>
                    <p>Warm regards,</p>
                </td>
            </tr>
        </tbody>
    </table>
    <br />
    <fieldset style="
      width: 600px;
      margin: auto;
    ">
        <legend style="margin-left: 20%">
            <strong>Reference: </strong>02022024 <strong>Date: </strong>`+
            affiliate.enquiryDate +`
        </legend>
        <table style="
          width: 600px;
          border: none;
          text-align: center;
          padding: 8px;
        ">
            <tbody>
                <tr>
                    <td colspan="2" style="color: #000;">
                        <b>BECOME PARTNER REQUEST RECEIVED</b>
                    </td>
                </tr>
                <tr>
                    <td style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              ">
                        <b>Name</b>
                    </td>
                    <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                        <label>` + affiliate.name + ` </label>
                    </td>
                </tr>
                <tr>
                    <td style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              ">
                        <b>Email</b>
                    </td>
                    <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                        <label>`+ affiliate.email +`</label>
                    </td>
                </tr>
                <tr>
                    <td style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              ">
                        <b>Phone</b>
                    </td>
                    <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                        <label>`+ affiliate.phone +`</label>
                    </td>
                </tr>
                <tr>
                    <td style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              ">
                        <b>Address</b>
                    </td>
                    <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                        <label>`+ affiliate.address +`</label>
                    </td>
                </tr>
                <tr>
                    <td style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              ">
                        <b>Vehicle Type</b>
                    </td>
                    <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                        <label>`+ vehicle_type.join(" , ") +`</label>
                    </td>
                </tr>
                <tr>
                    <td style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              ">
                        <b>Coverage Area</b>
                    </td>
                    <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                        <label> `+ coverageArea.join(" , ") +`</label>
                    </td>
                </tr>
                <tr>
                    <td style="
            width: 200px;
            text-align: right;
            vertical-align: top;
            padding-right: 15px;
            background-color: #555;
            color: #ffe605;
          "></td>
                    <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc;">
                        <a href="` + url + `">Log in Now</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </fieldset>
    <fieldset style="
      width: 400px;
      margin: auto;
    ">
        <legend style="margin-left: 20%">
            <strong>Crediantilas</strong>
        </legend>
        <table style="
          width: 400px;
          border: none;
          text-align: center;
          padding: 8px;
        ">
            <tbody>
                <tr>
                    <td style="
                  width: 200px;
                  text-align: right;
                  vertical-align: top;
                  padding-right: 15px;
                  background-color: #555;
                  color: #ffe605;
                ">
                        <b>Username</b>
                    </td>
                    <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc;">
                        `+ login +`
                    </td>
                </tr>
                <tr>
                    <td style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              ">
                        <b>Password</b>
                    </td>
                    <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                        <label>`+ password +` </label>
                    </td>
                </tr>
                <tr>
                    <td style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              ">
                        <b>Click to Login</b>
                    </td>
                    <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                        <a href="` + url + `">Login NOW</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </fieldset>
</body>

</html>
  `,
};

module.exports = {
  emailTemplates,
};
