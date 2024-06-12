const driverEmailTemplates = {
  reset_password_verification_code: (driver_name, code) =>
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
    driver_name +
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
  driverEmailTemplates,
};
