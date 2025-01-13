const nodemailer = require('nodemailer');
const db = require('./db');

exports.index = async (req, res) => {

    // await db.query(

    //     `CREATE TABLE User (
    //             id INT AUTO_INCREMENT PRIMARY KEY,       -- Unique ID for each user
    //             full_name VARCHAR(255) NOT NULL,         -- Full name of the user
    //             email VARCHAR(255) NOT NULL UNIQUE,      -- Email (must be unique)
    //             phone VARCHAR(15) NULL,                  -- Phone number (optional)
    //             password_hash VARCHAR(255) NOT NULL,     -- Password hash for authentication
    //             avatar_url VARCHAR(255) NULL,            -- URL for user's avatar image
    //             gender ENUM('Male', 'Female', 'Other') DEFAULT 'Other', -- Gender
    //             date_of_birth DATE NULL,                 -- Date of birth (optional)
    //             address TEXT NULL,                       -- Address (optional)
    //             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Record creation timestamp
    //             updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Record update timestamp
    //     );  

    //     `
    // )


    // await db.query(`
        
    //     INSERT INTO User (full_name, email, phone, password_hash, avatar_url, gender, date_of_birth, address)
    //     VALUES (
    //         'John Doe',
    //         'johndoe@example.com',
    //         '1234567890',
    //         '$2b$10$7j6H.fB8ZoaX5gE7N7rWY.qcI3EdG3dG6KuQPRYHxMdZ1kfbHBhCm', -- Example hashed password
    //         'https://example.com/avatar/johndoe.jpg',
    //         'Male',
    //         '1990-01-15',
    //         '123 Main Street, Springfield, USA'
    //     );
        
    //     `)

      const [allUsers] = await db.query('SELECT * FROM User');

      console.log(allUsers);



    res.render('dashboard',{ title : 'Home', allUsers : allUsers})
}

exports.tables = (req, res) => {
    res.render('tables', { title : 'Table'})
}

exports.billing = (req, res) => {
    res.render('billing', {title : 'Billing'})
}


exports.virtualreality = (req, res) => {
    res.render('virtual-reality', {title : 'Virtual Reality'})
}

exports.rtl = (req, res) => {
    res.render('rtl', {title : 'RTL'})
}

exports.notifications = (req, res) => {
    res.render('notifications', {title : 'Notifications'})
}

exports.profile = (req, res) => {
    res.render('profile', {title : 'Profile'})
}
exports.siginin = async (req, res) => {

    const [rows] = await db.query('SELECT * FROM user');
    console.log('users ' + rows);

    res.render('sign-in', {title : 'Sign In'})
}

exports.signup = (req, res) => {
    res.render('sign-up',{title : 'Sign Up'} )
}

exports.icons = (req, res) => {
    res.render('icons',{title : 'Icons'} )
}

exports.maps = (req, res) => {
    res.render('map',{title : 'Maps'} )
}

exports.template = (req, res) => {
    res.render('template',{title : 'Template'} )
}

exports.typography = (req, res) => {
    res.render('typography',{title : 'Typography'} )
}

exports.register = (req, res) => {
    res.render('Authentication/register',{title : 'Register'} )
}

exports.verification = (req, res) => {
    res.render('Authentication/verification',{title : 'Verification'} )
}
exports.Login = (req, res) => {
    res.render('Authentication/Login',{title : 'Login'} )
}

exports.forgetPassword = (req, res) => {
    res.render('Authentication/forget-password',{title : 'forgetPassword'} )
}

exports.forgetPasswordEmailSms = (req, res) => {
    res.render('Authentication/Forgot Password-email -sms',{title : 'forgetPasswordSms'} )
}
exports.forgetPasswordChange = (req, res) => {
    res.render('Authentication/Forgot Password - Password change',{title : 'forgetPasswordChange'} )
}
exports.forgetPasswordChanged = (req, res) => {
    res.render('Authentication/Forgot-Password - Password-changed',{title : 'forgetPasswordChanged'} )
}
exports.PasswordChangedOldNew = (req, res) => {
    res.render('Authentication/Password-Change-Screen-Old-new',{title : 'PasswordChangedOldNew'} )
}

exports.PasswordChangedNew = (req, res) => {
    res.render('Authentication/Password-changed-new',{title : 'PasswordChangedNew'} )
}


exports.twofaEmailSmsOtp = (req, res) => {
    res.render('Authentication/2fa-otp-emial-sms',{title : 'twofaEmailSmsOtp'} )
}

