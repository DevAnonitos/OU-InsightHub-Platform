import nodemailer from 'nodemailer';

export const nodemailerConfigs = {

};

export const createNodeMailer = nodemailer.createTransport({
  service: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASSWORD,
  },
});