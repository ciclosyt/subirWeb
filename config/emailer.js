const nodemailer = require('nodemailer');

const plantilla = ``



const createTrans = () => {
    const transport = nodemailer.createTransport({

    });
    return transport;
}

const sendMail = async ( registro ) => {
    const transporter = createTrans()
    const info = await transporter.sendMail({

    });

    console.log('mensaje enviado');

    return
    
}

const sendMailPropio = async ( registro ) => {
    const transporter = createTrans()
    const info = await transporter.sendMail({

    });

    console.log('mensaje enviado');

    return
    
}






exports.sendMail = (registro) => sendMail(registro);
exports.sendMailPropio = (registro) => sendMailPropio(registro);