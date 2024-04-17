const express = require('express');
const authTeam = require('../../controllers/teamController/teamController');

const router = express.Router();

router.post('/registerTeam', authTeam.registerTeam);

router.get('/getTeamById/:id', authTeam.getTeamById);
router.get('/getAllTeams', authTeam.getAllTeams);
router.get('/getTeamByEmail/:email', authTeam.getTeamByEmail);

router.post('/loginTeam', authTeam.login);

router.post('/logoutTeam', authTeam.logout);

router.delete('/deleteTeam/:id', authTeam.deleteTeam);

router.put('/updateTeam/:id', authTeam.updateProfile);

router.put('/updatePassword/:id', authTeam.updatePassword);

module.exports = router;