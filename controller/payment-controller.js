import PaytmChecksum from "../paytm/PaytmChecksum"
import { paytmParams, paytmMerchantKey } from './../index';


export const addPaymentGateway = async (req, res) =>{
    try {
        let paytmChecksum = await PaytmChecksum.generateSignature(paytmParams, paytmMerchantKey);
        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmChecksum
        };
        res.status(200).json(params);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}