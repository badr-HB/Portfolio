"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (sendfrom,sub,text,user) => {
    try{
    await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: 'badrsama200@gmail.com',
        replyTo : sendfrom,
        subject: sub,
        html: `${text} ,this is from ${user}`
    });}
    catch(err){
        console.log("this is the error "+err);
        
    }
}