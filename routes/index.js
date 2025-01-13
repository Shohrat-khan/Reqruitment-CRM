const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.get('/', controller.index);

router.get('/tables', controller.tables);

router.get('/billing', controller.billing);

router.get('/virtual-reality', controller.virtualreality);

router.get('/RTL', controller.rtl);

router.get('/Notifications', controller.notifications);

router.get('/Profile', controller.profile);

router.get('/Sign-In', controller.siginin);

router.get('/Sign-Up', controller.signup);

router.get('/Icons', controller.icons);

router.get('/Maps', controller.maps);

router.get('/Template', controller.template);

router.get('/Typography', controller.typography);

router.get('/Register', controller.register);

router.get('/Verification', controller.verification);

router.get('/Login', controller.Login);

router.get('/forgetPassword', controller.forgetPassword);

router.get('/forgetPasswordChange', controller.forgetPasswordChange);

router.get('/forgetPasswordChanged', controller.forgetPasswordChanged);

router.get('/PasswordChangedOldNew', controller.PasswordChangedOldNew);

router.get('/PasswordChangedNew', controller.PasswordChangedNew);

router.get('/twofaEmailSmsOtp', controller.twofaEmailSmsOtp);


// router.get('/about', controller.about);
// router.get('/contact', controller.contact);
// router.post('/contact', controller.contact);

module.exports = router;
