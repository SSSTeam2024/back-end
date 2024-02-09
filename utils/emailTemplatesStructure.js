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
            <p>Dear ` + visitor.name + `</p>
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
        <strong>Reference: </strong>02022024 <strong>Date: </strong>`+
        creationDate +`
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
                <label>` + quote.estimated_start_time + ` </label>
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
                <label>`+ quote.start_point.placeName +`</label>
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
                <label>`+ quote.destination_point.placeName +`</label>
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
                <label>`+ quote.luggage_details +`</label>
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
                <label>`+ quote.estimated_return_start_time + `</label>
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
                <label>`+ quote.destination_point.placeName +`</label>
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
                <label>`+ quote.start_point.placeName +`</label>
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
                <label><a href="https://www.google.com/maps/dir/?api=1&origin=`+ quote.start_point.coordinates.lat +`,`+ quote.start_point.coordinates.lon +`&destination=`+ quote.destination_point.coordinates.lat +`,`+ quote.destination_point.coordinates.lon +`&travelmode=driving">View Route</a></label>
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
                <label>`+ quote.luggage_details +`</label>
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
                <label>`+ quote.passengers_number +`</label>
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
                <label> `+ quote.vehicle_type +` </label>
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
                <label>`+ quote.journey_type +`</label>
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
                <label>` +visitor.name +`</label>
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
                <label>` + visitor.phone +`</label>
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
                    >` + visitor.email +`</a
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
            <p>Dear ` + visitor.name + `</p>
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
        <strong>Reference: </strong>02022024 <strong>Date: </strong>`+
        creationDate +`
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
                <label>` + quote.estimated_start_time + ` </label>
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
                <label>`+ quote.start_point.placeName +`</label>
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
                <label>`+ quote.destination_point.placeName +`</label>
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
                <label>`+ quote.luggage_details +`</label>
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
                <label>`+ quote.passengers_number +`</label>
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
                <label> `+ quote.vehicle_type +` </label>
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
                <label>`+ quote.journey_type +`</label>
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
                <label>` +visitor.name +`</label>
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
                <label>` + visitor.phone +`</label>
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
                    >` + visitor.email +`</a
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
  booking: (visitor, price, url) =>
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
    <tbody style="font-family: 'Roboto'; font-size: 1rem;color: #000;">
      <tr>
        <td>
          <a href="">
            <img src="cid:unique-image-id" alt="" />
          </a>
        </td>
      </tr>
      <tr>
        <td style="text-align: left">
          <p>Dear ` + visitor.name + `</p>
          <p>I hope this email finds you well.</p>
          <p>
            We are pleased to inform you that your quote request has been
            successfully processed, and we are excited to assist you with your
            arrangements.
          </p>
          <p>
            As per your request, the total price for the journey is <strong style="font-size: 1rem;">` + price
              +`</strong>.
          </p>
          <p>
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
          </p>
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

  `
};

module.exports = {
  emailTemplates,
};
