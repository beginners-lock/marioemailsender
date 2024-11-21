import * as emailjs from '@emailjs/nodejs';

export async function sendOTPemail(otp, name, email){
    const templateParams = {
        'username': 'HookupFinderNG Admin',
        'to_email': email,
        'to_name': name,
        'from_name': 'HookupFinderNG Admin',
        'from_email': 'hookupfinderng@gmail.com',
        'message': otp
    };

    const answer = await emailjs.send(process.env.EMAILJS_SERVICEID, process.env.EMAILJS_TEMPLATEID, templateParams, {
        publicKey: process.env.EMAILJS_PUBLICKEY,
        privateKey: process.env.EMAILJS_PRIVATEKEY
    }).then(
        (response)=>{
            console.log('SUCCESS!', response.status, response.text);
            return(true);
        },
        (err) => {
            console.log('FAILED...', err);
            return(false);
        }
    );

    return(answer);
}