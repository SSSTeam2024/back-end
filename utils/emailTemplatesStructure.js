const emailTemplates = {
  with_return_quote_received: (
    visitor,
    quote,
    creationDate,
    return_time,
    return_date
  ) =>
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
        <strong>Reference: </strong>` +
    quote.quote_ref +
    `<strong>Date: </strong>` +
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
    quote.date +
    `<strong> at </strong>` +
    quote.pickup_time +
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
    return_date +
    `<strong> at </strong>` +
    return_time +
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
        <strong>Reference: </strong>` +
    quote.quote_ref +
    ` <strong>Date: </strong>` +
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
    quote.date +
    `<strong> at </strong>` +
    quote.pickup_time +
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
  bookingOneWay: (
    visitor,
    price,
    deposit_percentage,
    url,
    quote,
    creationDate
  ) =>
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
      <strong>Reference: </strong>` +
    quote.quote_ref +
    ` <strong>Date: </strong>` +
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
    quote.date +
    `<strong> at </strong>` +
    quote.pickup_time +
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
  bookingWithReturn: (
    visitor,
    price,
    deposit_percentage,
    url,
    quote,
    creationDate,
    return_date,
    return_time
  ) =>
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
      <strong>Reference: </strong>` +
    quote.quote_ref +
    ` <strong>Date: </strong>` +
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
    quote.date +
    `<strong> at </strong>` +
    quote.pickup_time +
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
                <b>Retrurn</b>
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
    return_date +
    `<strong> at </strong>` +
    return_time +
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
  bookingWithPaymentModal: (quote, price, visitor, creationDate) =>
    `
  <!doctype html>
<html lang="zxx">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Bootstrap Min CSS -->
  <link rel="stylesheet" href="assets/css/bootstrap.min.css">
  <!-- Responsive CSS -->
  <link rel="stylesheet" href="assets/css/responsive.css">
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
  <!-- Map -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <!-- Title -->
  <title>Coach Hire, Minibus Hire & Chauffeured Car Hire | Bouden Coach Travel</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif
    }

    .container {
      margin: 30px auto;
    }

    .container .card {
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      background: #fff;
      border-radius: 0px;
    }

    body {
      background: #eee
    }



    .btn.btn-primary {
      background-color: #ddd;
      color: black;
      box-shadow: none;
      border: none;
      font-size: 20px;
      width: 100%;
      height: 100%;
    }

    .btn.btn-primary:focus {
      box-shadow: none;
    }

    .container .card .img-box {
      width: 80px;
      height: 50px;
    }

    .container .card img {
      width: 100%;
      object-fit: fill;
    }

    .container .card .number {
      font-size: 24px;
    }

    .container .card-body .btn.btn-primary .fab.fa-cc-paypal {
      font-size: 32px;
      color: #3333f7;
    }

    .fab.fa-cc-amex {
      color: #1c6acf;
      font-size: 32px;
    }

    .fab.fa-cc-mastercard {
      font-size: 32px;
      color: red;
    }

    .fab.fa-cc-discover {
      font-size: 32px;
      color: orange;
    }

    .c-green {
      color: green;
    }

    .box {
      height: 40px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ddd;
    }

    .btn.btn-primary.payment {
      background-color: #1c6acf;
      color: white;
      border-radius: 0px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
    }


    .form__div {
      height: 50px;
      position: relative;
      margin-bottom: 24px;
    }

    .form-control {
      width: 100%;
      height: 45px;
      font-size: 14px;
      border: 1px solid #DADCE0;
      border-radius: 0;
      outline: none;
      padding: 2px;
      background: none;
      z-index: 1;
      box-shadow: none;
    }

    .form__label {
      position: absolute;
      left: 16px;
      top: 10px;
      background-color: #fff;
      color: #80868B;
      font-size: 16px;
      transition: .3s;
      text-transform: uppercase;
    }

    .form-control:focus+.form__label {
      top: -8px;
      left: 12px;
      color: #1A73E8;
      font-size: 12px;
      font-weight: 500;
      z-index: 10;
    }

    .form-control:not(:placeholder-shown).form-control:not(:focus)+.form__label {
      top: -8px;
      left: 12px;
      font-size: 12px;
      font-weight: 500;
      z-index: 10;
    }

    .form-control:focus {
      border: 1.5px solid #1A73E8;
      box-shadow: none;
    }
  </style>
</head>

<body>
  <!-- Start Track Area -->
  <section class="track-area mt-minus-70 pb-100" style="margin-top: 18px; margin-bottom: 150px;">
    <div class="container">
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
      <fieldset style="
      width: 600px;
      margin: auto;
    ">
        <legend style="margin-left: 20%">
          <strong>Reference: </strong>` +
    quote.quote_ref +
    `<strong>Date: </strong>` +
    creationDate +
    `
        </legend>
        <table style="
          width: 600px;
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
                <b>Pickup</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc;">
                <label></label>
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
                <b>Date & Time</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.date +
    ` at ` +
    quote.pickup_time +
    ` </label>
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
                <b>Collection Address</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.start_point.placeName +
    `</label>
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
                <b>Destination Address</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.destination_point.placeName +
    `</label>
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
                <b>Luggage</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.luggage_details +
    `</label>
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
                <b>Number Of Passengers</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.passengers_number +
    `</label>
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
                <label> ` +
    quote.vehicle_type +
    ` </label>
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
                <span style="color: #000">£` +
    price +
    `</span>
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
                <b>Journey Type</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.journey_type +
    `</label>
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
                <b>Passenger Name</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    visitor.name +
    `</label>
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
                <b>Passenger Phone</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    visitor.phone +
    `</label>
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
                <label>
                  <a style="
                    text-decoration: none !important;
                  ">` +
    visitor.email +
    `</a>
                </label>
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
          <strong>PAYMENT</strong>
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
                <b>Vehicle Price</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc;">
                £` +
    price +
    `
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
                <b>VAT</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>£` +
    price * 0.2 +
    ` </label>
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
                <b>Total Price</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>£` +
    (Number(price) + Number(price) * 0.2) +
    `</label>
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
                <b>Deposit Amount</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>£` +
    ((Number(price) + Number(price) * 0.2) * 0.3).toFixed(2) +
    `</label>
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
                <b>Current Balance</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>£` +
    (Number(price) + Number(price) * 0.2) +
    `</label>
              </td>
            </tr>
            <!-- <tr>
              <td style="
                width: 200px;
                text-align: right;
                vertical-align: top;
                padding-right: 15px;
                background-color: #555;
                color: #ffe605;
              ">
                <b>Balance Due Date</b>
              </td>
              <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                <label>` +
    quote.estimated_start_time +
    `</label>
              </td>
            </tr> -->
            <tr>
              <td>
                <button type="button" class="btn btnNext text-white" data-toggle="modal" style="margin-top: 20px; background-color: #e5d222; width: 150px; height: 50px; font-size: 20px;"
                data-target="#alertModal" onclick="getPaymentMode('all')">All Amount</button>
              </td>
              <td>
                <button type="button" class="btn btnNext text-white" data-toggle="modal" style="margin-top: 20px; background-color: #e5d222; width: 130px; height: 50px; font-size: 20px;"
                data-target="#alertModal" onclick="getPaymentMode('deposit')">Deposit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  </section>
  <!-- End Track Area -->

  <!-- Modal -->
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </symbol>
    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
      <path
        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </symbol>
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path
        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </symbol>
  </svg>
  <div class="modal fade" id="alertModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header bg-warning">
          <h4 class="modal-title text-white" id="exampleModalLabel"><svg class="bi flex-shrink-0 me-2" width="24"
              height="24" role="img" aria-label="Success:">
              <use xlink:href="#check-circle-fill" />
            </svg>Quote Payment</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 mt-4">
              <div class="card p-3">
                <p class="mb-0 fw-bold h4">Payment Methods</p>
              </div>
            </div>
            <div class="col-12">
              <div class="card p-3">
                <div class="card-body border p-0">
                  <p>
                    <a class="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                      data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                      aria-controls="collapseExample">
                      <span class="fw-bold">PayPal</span>
                      <span class="fab fa-cc-paypal">
                      </span>
                    </a>
                  </p>
                  <div class="collapse p-3 pt-0" id="collapseExample">
                    <div class="row">
                      <div class="col-8">
                        <p class="h4 mb-0">Summary</p>
                        <p class="mb-0"><span class="fw-bold">Quote:</span><span class="c-green">: 
                          ` +
    quote.quote_ref +
    `</span></p>
                        <p class="mb-0"><span class="fw-bold">Price:</span><span class="c-green" id="dynamicPaypalPrice">:</span></p>
                        <p class="mb-0">Pay easily and securely with PayPal. Use your PayPal account to quickly complete your purchase without sharing your financial information.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body border p-0">
                  <p>
                    <a class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                      data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                      aria-controls="collapseExample">
                      <span class="fw-bold">Credit Card</span>
                      <span class="">
                        <span class="fab fa-cc-amex"></span>
                        <span class="fab fa-cc-mastercard"></span>
                        <span class="fab fa-cc-discover"></span>
                      </span>
                    </a>
                  </p>
                  <div class="collapse show p-3 pt-0" id="collapseExample">
                    <div class="row">
                      <div class="col-lg-5 mb-lg-0 mb-3">
                        <p class="h4 mb-0">Summary</p>
                        <p class="mb-0"><span class="fw-bold">Quote:</span><span class="c-green">: ` +
    quote.quote_ref +
    `</span>
                        </p>
                        <p class="mb-0">
                          <span class="fw-bold">Price:</span>
                          <span class="c-green" id="dynamicCreditCardPrice">:</span>
                        </p>
                        <p class="mb-0">Complete your quote payment with confidence. We offer secure and easy payment options to ensure your information is protected. Simply enter your details below to finalize your payment.

                          Thank you for choosing us!</p>
                      </div>
                      <div class="col-lg-7">
                        <form action="" class="form">
                          <div class="row">
                            <div class="col-12">
                              <div class="form__div">
                                <input type="text" class="form-control" placeholder=" ">
                                <label for="" class="form__label">Card Number</label>
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="form__div">
                                <input type="text" class="form-control" placeholder=" ">
                                <label for="" class="form__label">MM / yy</label>
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="form__div">
                                <input type="password" class="form-control" placeholder=" ">
                                <label for="" class="form__label">cvv code</label>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form__div">
                                <input type="text" class="form-control" placeholder=" ">
                                <label for="" class="form__label">name on the card</label>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="btn btn-primary w-100">Sumbit</div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="btn btn-primary payment close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">Make Payment</span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-secondary" data-dismiss="modal" onclick="olLoadPage()">Close</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script>
    function getPaymentMode(mode){
      if(mode === 'all'){
        console.log("show total price");
        let paypal_price = document.getElementById("dynamicPaypalPrice");
        let credit_card_price = document.getElementById("dynamicCreditCardPrice");
        paypal_price.innerHTML = "£1240";//quote.total_price;
        credit_card_price.innerHTML = "£1240";//quote.total_price;
      }
      if(mode === 'deposit'){
        console.log("show deposit price");
        let paypal_price = document.getElementById("dynamicPaypalPrice");
        let credit_card_price = document.getElementById("dynamicCreditCardPrice");
        paypal_price.innerHTML = "£` +
    quote.deposit_amount +
    `";
        credit_card_price.innerHTML = "£` +
    quote.deposit_amount +
    `";
      }
    }
  </script>
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
      <strong>Reference: </strong>` +
    quote.quote_ref +
    ` <strong>Date: </strong>` +
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
    quote.date +
    `at` +
    quote.pickup_time +
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
                  <p>Dear ` +
    affiliate.name +
    `</p>
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
        <strong>Date: </strong>` +
    affiliate.enquiryDate +
    `
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
                      <label>` +
    affiliate.name +
    ` </label>
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
                      <label>` +
    affiliate.email +
    `</label>
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
                      <label>` +
    affiliate.phone +
    `</label>
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
                      <label>` +
    affiliate.address +
    `</label>
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
                      <label>` +
    affiliate.website +
    `</label>
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
                  <p>Dear ` +
    affiliate.name +
    `</p>
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
        <strong>Date: </strong>` +
    affiliate.enquiryDate +
    `
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
                      <label>` +
    affiliate.name +
    ` </label>
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
                      <label>` +
    affiliate.email +
    `</label>
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
                      <label>` +
    affiliate.phone +
    `</label>
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
                      <label>` +
    affiliate.address +
    `</label>
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
                      <label>` +
    affiliate.fleetNumber +
    `</label>
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
                      <label> ` +
    affiliate.region +
    ` </label>
                  </td>
              </tr>
          </tbody>
      </table>
  </fieldset>
</body>

</html>
`,
  affiliateAcceptence: (
    id,
    login,
    password,
    url,
    affiliate,
    service_date,
    vehicle_type,
    coverageArea
  ) =>
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
                    <p>Dear ` +
    affiliate.name +
    `</p>
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
         <strong>Date: </strong>` +
    affiliate.enquiryDate +
    `
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
                        <label>` +
    affiliate.name +
    ` </label>
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
                        <label>` +
    affiliate.email +
    `</label>
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
                        <label>` +
    affiliate.phone +
    `</label>
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
                        <label>` +
    affiliate.address +
    `</label>
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
                        <label>` +
    vehicle_type.join(" , ") +
    `</label>
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
                        <label> ` +
    coverageArea.join(" , ") +
    `</label>
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
                        <a href="` +
    url +
    `">Log in Now</a>
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
                        ` +
    login +
    `
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
                        <label>` +
    password +
    ` </label>
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
                        <a href="` +
    url +
    `">Login NOW</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </fieldset>
</body>

</html>
  `,
  affiliateJobAcceptence: (
    affiliate,
    url,
    quote,
    on_site_before,
    formattedCreationDate
  ) =>
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
        <td>
            <a href="" style="display: flex; justify-content: start; margin-bottom: 10px; font-size: larger; color: #555;">
                Click here to take this job for £ ` +
    quote.pushed_price +
    `
            </a>
        </td>
      </tr>
      <tr>
        <td>
            <a href="" style="display: flex; justify-content: start; margin-bottom: 10px; font-size: larger; color: #555;">
                Click here to provide a quote for this job
            </a>
        </td>
      </tr>
      <tr>
        <td>
            <a href="" style="display: flex; justify-content: start; margin-bottom: 20px; font-size: larger; color: #555;">
                Click here if you are not available for this job.
            </a>
        </td>
      </tr>
      <tr>
        <td style="text-align: left">
          <p>Dear ` +
    affiliate.name +
    `</p>
          <p>I hope this email finds you well.</p>
          <p>
            Please could you provide a quotation for our customer  who has the requirements set out below:
          </p>
          <p>
            Please state the vehicle and the driver that the quotation is based on and please mention and extra vehicle features that may help us take your quote. 
          <p>
            Many thanks.
          </p>  
          </p>
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
      <strong>Reference: </strong>` +
    quote.quote_ref +
    ` <strong>Date: </strong>` +
    formattedCreationDate +
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
                <b>Journey info</b>
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
                <b>Journey 1</b>
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
                  <b>On Site Before</b>
                </td>
                <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
                  <label>` +
    on_site_before +
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
              <b>Date & Time</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>` +
    quote.date +
    ` at ` +
    quote.pickup_time +
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
              <b>Extra Details</b>
            </td>
            <td style="text-align: left; padding-left: 15px; border-bottom: 1px solid #ccc; color: #000;">
              <label>
                <a
                  style="
                    text-decoration: none !important;
                  "
                  >` +
    quote.notes +
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
  newEmail: (body) =>
    `
    <html>
  <body
    style="
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    "
  >
  ` +
    body +
    `
  </body>
</html>

  `,
  reset_password_verification_code: (user_name, code) =>
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
            <p>Hi ` +
    user_name +
    `</p>
            <p>
              We're sending you this email because you requested a password
              reset.
            </p>
            <p>Verification code: ` +
    code +
    `</p>
            <p>
              If you didn't request a password reset, you can ignore this email.
              Your password will not be changed
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`,
};

module.exports = {
  emailTemplates,
};
