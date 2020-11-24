// eslint-disable-next-line no-unused-vars
const nodemailer = require('nodemailer')

module.exports = function (app) {
    app.use('/mail-test', (req, res) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp-relay.sendinblue.com',
            port: 587,
            auth: {
                user: 'saiko.mizuki@gmail.com',
                pass: 'Qcm7DJEbjhHBUMRf'
            }
        })

        let mailOptions = {
            from: 'ikki@kymzk.com',
            to: 'saiko.mizuki@gmail.com',
            subject: 'Kiriman dari Nodemailer',
            text: 'Mencoba coba!'
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error)
                res.json('Pesan gagal dikirim D:')

            console.log('Pesan berhasil dikirimkan!')
        })
        res.json('Pesan berhasil dikirimkan!')
    })
};
