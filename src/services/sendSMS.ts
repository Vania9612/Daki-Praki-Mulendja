import { Twilio } from "twilio";
import authConfig from "../config/authConfig";

class sendSMS {
    async sendMessage(to: string, body: string){
        const client = new Twilio(authConfig.twilio.accountSid, authConfig.twilio.authToken);

        try {
            const message = await client.messages.create({
                body: body,
                from: '(205) 793-4323',
                to: to
            })
            return message;
        } catch (error) {
            return error;
            ;
            
        }
    }
}

export default new sendSMS();