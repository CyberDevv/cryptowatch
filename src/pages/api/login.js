import axios from 'axios';

export default async function loginAPI(req, res) {
   const { email, password } = req.body;

   console.log(`${process.env.BASE_API_URL}/login`);

   await axios
      .post(`${process.env.BASE_API_URL}/login`, {
         email,
         password,
      })
      .then((res) => {
         return res;
      })
      .catch((err) => {
         const response = {
            status: err.response.status,
            message: err.response.data,
         };

         res.status(response.status).json(response);
      });
}
