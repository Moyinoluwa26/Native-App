const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: 'Token is required' });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });

    }
}

module.exports = verifyToken;