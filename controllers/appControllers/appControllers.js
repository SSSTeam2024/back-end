const appService = require("../../services/appServices/appServices");
const globalFunctions = require("../../utils/globalFunctions");

const createApp = async (req, res) => {
  try {
    const {
      trading_name,
      registred_name,
      company_number,
      tax_number,
      driver_app_code,
      billing_profile,
      prefix,
      copy_customer_details,
      address,
      tel,
      mobile,
      sales_email,
      op_email,
      color,
      currency_symbol,
      symbol_position,
      balance_due,
      default_deposit_type,
      default_deposit_amount,
      auto_pricing_type,
      auto_pricing_amount,
      enquiry_email,
      booking_email,
      regular_email,
      mobile_sms,
      bcc_email,
      logoBase64Strings,
      logoExtension,
      show_journey_price,
      show_journey,
    } = req.body;

    const logoPath = "files/appFiles/";

    let logo = globalFunctions.generateUniqueFilename(logoExtension, "appLogo");

    let documents = [
      {
        base64String: logoBase64Strings,
        extension: logoExtension,
        name: logo,
        path: logoPath,
      },
    ];

    const app = await appService.createApp(
      {
        trading_name,
        registred_name,
        company_number,
        tax_number,
        driver_app_code,
        billing_profile,
        prefix,
        copy_customer_details,
        address,
        tel,
        mobile,
        sales_email,
        op_email,
        color,
        currency_symbol,
        symbol_position,
        balance_due,
        default_deposit_type,
        default_deposit_amount,
        auto_pricing_type,
        auto_pricing_amount,
        enquiry_email,
        booking_email,
        regular_email,
        mobile_sms,
        bcc_email,
        logo,
        show_journey_price,
        show_journey,
      },
      documents
    );
    res.json(app);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateApp = async (req, res) => {
  try {
    const appId = req.params.id;
    const {
      trading_name,
      registred_name,
      company_number,
      tax_number,
      driver_app_code,
      billing_profile,
      prefix,
      copy_customer_details,
      address,
      tel,
      mobile,
      sales_email,
      op_email,
      color,
      currency_symbol,
      symbol_position,
      balance_due,
      default_deposit_type,
      default_deposit_amount,
      auto_pricing_type,
      auto_pricing_amount,
      enquiry_email,
      booking_email,
      regular_email,
      mobile_sms,
      bcc_email,
      logoBase64Strings,
      logoExtension,
      show_journey_price,
      show_journey,
    } = req.body;

    const logoPath = "files/appFiles/";

    let appBody = {
      trading_name,
      registred_name,
      company_number,
      tax_number,
      driver_app_code,
      billing_profile,
      prefix,
      copy_customer_details,
      address,
      tel,
      mobile,
      sales_email,
      op_email,
      color,
      currency_symbol,
      symbol_position,
      balance_due,
      default_deposit_type,
      default_deposit_amount,
      auto_pricing_type,
      auto_pricing_amount,
      enquiry_email,
      booking_email,
      regular_email,
      mobile_sms,
      bcc_email,
      show_journey_price,
      show_journey,
    };
    let documents = [];

    if (logoBase64Strings) {
      let logo = globalFunctions.generateUniqueFilename(
        logoExtension,
        "appLogo"
      );

      documents.push({
        base64String: logoBase64Strings,
        extension: logoExtension,
        name: logo,
        path: logoPath,
      });

      appBody.logo = logo;
    }

    console.log("app body", appBody);
    const updatedApp = await appService.updateApp(appId, appBody, documents);
    if (!updatedApp) {
      return res.status(404).send("App not found");
    }
    res.json(updatedApp);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// const getNoteById = async (req, res) => {
//   try {
//     const noteId = req.params.id;

//     const getNote = await appService.getNoteById(noteId);

//     if (!getNote) {
//       return res.status(404).send("Note not found");
//     }
//     res.json(getNote);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

const getApps = async (req, res) => {
  try {
    const apps = await appService.getApps();
    res.json(apps);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteApp = async (req, res) => {
  try {
    const appId = req.params.id;

    const deletedApp = await appService.deleteApp(appId);

    if (!deletedApp) {
      return res.status(404).send("App not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// const getNotesByIdCompany = async (req, res) => {
//   try {
//     const id_corporate = req.body.id_corporate;
//     const getNotesByIdCompany =
//       await appService.getNotesByIdCompany(id_corporate);
//     if (!getNotesByIdCompany) {
//       res.status(404).send("employee not found");
//     }
//     res.json({ getNotesByIdCompany });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

module.exports = {
  createApp,
  updateApp,
  getApps,
  deleteApp,
};
