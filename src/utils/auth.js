import axios from 'axios';
import { toast } from 'react-toastify';

// TODO: setup the function for better UX handling both on success and error when backend is ready
export function signInWthGoogle() {
   axios
      .get(`${process.env.NEXT_APP_API_URL}/auth/google`)
      .then((res) => {
         console.log(res);
         toast.success('Google sign in successful');
      })
      .catch((err) => {
         console.log(err);
         toast.error('Google sign in failed');
      });
}

export function signInWithFacebook() {
   axios
      .get(`${process.env.NEXT_APP_API_URL}/auth/facebook`)
      .then((res) => {
         console.log(res);
         toast.success('Facebook sign in successful');
      })
      .catch((err) => {
         console.log(err);
         toast.error('Facebook sign in failed');
      });
}

export async function signInWithEmail(email, password, rememberMe) {
   try {
      const res = await axios.post(
         `${process.env.NEXT_APP_API_URL}/auth/email`,
         { email, password, rememberMe }
      );
      console.log(res);
      toast.success('Sign in successful');
   } catch (err) {
      console.log(err);
      toast.error('Sign in failed');
   }
}

export async function ForgotPassword(email) {
   try {
      const res = await axios.post(
         `${process.env.NEXT_APP_API_URL}/auth/forgot-password`,
         {
            email,
         }
      );
      console.log(res);
      toast.success('Check your email for OTP');
   } catch (err) {
      console.log(err);
      toast.error('error');
   }
}

export function ResendOTP() {
   axios
      .get(`${process.env.NEXT_APP_API_URL}/auth/resend-otp`)
      .then((res) => {
         console.log(res);
         toast.success('OTP sent successfully');
      })
      .catch((err) => {
         console.log(err);
         toast.error('OTP sending failed');
      });
}

export async function VerifyOTP(otp) {
   try {
      const res = await axios.post(
         `${process.env.NEXT_APP_API_URL}/auth/verify-otp`,
         {
            otp,
         }
      );
      console.log(res);
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
         `${process.env.NEXT_APP_API_URL}/auth/set-new-password`,
         {
            newPassword,
         }
      );
      console.log(res);
      toast.success('Password changed successfully');
   } catch (err) {
      console.log(err);
      toast.error('Password change failed');
   }
}
