import axios from 'axios';
import { toast } from 'react-toastify';

// TODO: setup the function for better UX handling both on success and error when backend is ready
export function signInWthGoogle() {
   axios
      .get(`${process.env.BASE_API_URL}/auth/google`)
      .then((res) => {
         toast.success('Google sign in successful');
      })
      .catch((err) => {
         toast.error('Google sign in failed');
      });
}

export function signInWithFacebook() {
   axios
      .get(`${process.env.BASE_API_URL}/auth/facebook`)
      .then((res) => {
         toast.success('Facebook sign in successful');
      })
      .catch((err) => {
         toast.error('Facebook sign in failed');
      });
}

export async function signInWithEmail(email, password) {
   console.log(`${process.env.BASE_API_URL}/login`);
   
   await axios
      .post(`${process.env.BASE_API_URL}/login`, {
         email,
         password,
      })
      .then((res) => {
         console(res);
      })
      .catch((err) => {
         console.log(err);
      });
}

export async function ForgotPassword(email) {
   try {
      const res = await axios.post(
         `${process.env.BASE_API_URL}/auth/forgot-password`,
         {
            email,
         }
      );

      toast.success('Check your email for OTP');
   } catch (err) {
      console.log(err);
      toast.error('Please try again');
   }
}

export function ResendOTP() {
   axios
      .get(`${process.env.BASE_API_URL}/auth/resend-otp`)
      .then((res) => {
         toast.success('OTP sent successfully');
      })
      .catch((err) => {
         toast.error('OTP sending failed');
      });
}

export async function VerifyOTP(otp) {
   try {
      const res = await axios.post(
         `${process.env.BASE_API_URL}/auth/verify-otp`,
         {
            otp,
         }
      );

      toast.success('OTP verified');
   } catch (err) {
      console.log(err);
      toast.error('OTP verification failed');
   }
}

export async function setNewPassword(newPassword, confirmPassword) {
   if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
   }

   try {
      const res = await axios.post(
         `${process.env.BASE_API_URL}/auth/set-new-password`,
         {
            newPassword,
         }
      );

      toast.success('Password changed successfully');
   } catch (err) {
      console.log(err);
      toast.error('Password change failed');
   }
}

export async function signOut() {
   try {
      const res = await axios.get(`${process.env.BASE_API_URL}/auth/sign-out`);
      toast.success('Sign out successful');
      return true;
   } catch (err) {
      console.log(err);
      toast.error('Sign out failed');
   }
}

export async function signUp(email, password, confirmPassword) {
   if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
   }

   try {
      const res = await axios.post(`${process.env.BASE_API_URL}/auth/sign-up`, {
         email,
         password,
      });

      toast.success('Sign up successful');
      return true;
   } catch (err) {
      console.log(err);
      toast.error('Sign up failed');
   }
}
