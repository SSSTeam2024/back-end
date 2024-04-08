const express = require('express');
const companyController = require("../../controllers/companyControllers/companyController")

const router = express.Router();
router.post('/newCompany', companyController.addNewCompany);
router.get('/getAllCompanies', companyController.getCompanies);
router.get("/getCompany/:id",companyController.getCompanyById)
router.post("/getCompanyByEmail",companyController.getCompanyByEmail)
router.delete("/deleteCompany/:id",companyController.deleteCompany)
router.put("/updateCompany/:id",companyController.updateCompany)
router.post("/loginCompany",companyController.loginCompany)
router.post("/logoutCompany/:id",companyController.logoutCompany)
router.put("/updatePassword/:id",companyController.updatePassword)
router.post('/getCompanyByToken', companyController.getCompanyByJwtToken);


module.exports = router;