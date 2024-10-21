import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json()
      }
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
      } catch (error) {
        return res.status(401).json()
      }
    next();
};

export default auth