import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        console.log(req.headers['authorization']);
        const token = req.headers.authorization.split(' ')[1];
        const isCustomToken = token.length<500;

        let decodedData;

        if (token && isCustomToken) {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        } 

        next();
    } catch (error) {
        console.error(error);
    }
}

export default auth;