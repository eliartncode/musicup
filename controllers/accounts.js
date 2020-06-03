const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Account = require('../models/account');

exports.loadLogin = (request, response, next) => {

    response.render('login', {

    })
}

exports.loadRegister = (request, response, next) => {

    response.render('signup', {

    })
}

exports.signupAction = (request, response, next) => {

    const first_name = request.body.first_name;
    const last_name = request.body.last_name;
    const email = request.body.email;
    const password = request.body.password;

    Account.findOne({ where: {email: email}})
    .then(account => {

        if(account){
            console.log('Account exist');
        } else {
            return bcryptjs.hash(password, 10)
            .then(hash_password => {
                Account.create({
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: hash_password
                })
                .then(new_account => {
                    console.log(new_account);
                    response.redirect('/account/login');
                })

            })
        }
    })
    .catch(error => {
        console.log(error);
    })
}

exports.loginAction = (request, response, next) => {

    const email = request.body.email;
    const password = request.body.password;
    Account.findOne({ where: {email: email}})
    .then(account => {
        if(account){

            bcryptjs.compare(password, account.password)
            .then(isPasswordMatch => {
                if(isPasswordMatch){

                    request.session.isLoggedIn = true;
                    response.redirect('/');

                } else {
                    console.log('Password not match');
                }
            })
        } else {
            console.log('Account not exist');
        }
    })
    .catch(error => {
        console.log(error);
    })
}