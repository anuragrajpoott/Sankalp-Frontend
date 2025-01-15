import { toast } from "react-hot-toast"
import { setUser } from "../../store/slices/userSlice"
import { apiConnector } from "../apiConnector"
import { authEndPoints } from "../apis"
import { setToken } from "../../store/slices/authSlice"




const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  SENDRESETPASSWORDLINK_API,
  RESETPASSWORD_API,
} = authEndPoints

export function sendOtp(email, setLoading,navigate) {
  return async (dispatch) => {
    
    try {

      const response = await apiConnector("POST", SENDOTP_API, { email })
      console.log("SENDOTP API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      
      toast.success("OTP Sent Successfully")

      navigate("/verify-email")
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    }

  }
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  newOtp,
  navigate
) {
  return async (dispatch) => {
    
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        newOtp,
      })

      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")

      

      navigate("/login")

    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/signup")
    }
  }
}

export function logIn(email, password,setLoading, navigate) {
  
  return async (dispatch) => {
    
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")

      dispatch(setToken(response.data.token))

      const userImage = response.data?.user?.image ? response.data.user.image : `https://api.dicebear.com/9.x/initials/svg?seed=${response.data.existingUser.firstName}%${response.data.existingUser.lastName}`

      dispatch(setUser({ ...response.data.existingUser, profileImage: userImage }))


      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.existingUser))

      navigate("/dashboard")

    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed due to invalid credentials")
    }
    setLoading(false)
  }
}

export function sendResetPasswordLink(email, setEmailSent) {
  return async (dispatch) => {
    
    try {
      const response = await apiConnector("POST", SENDRESETPASSWORDLINK_API, {
        email,
      })

      console.log("RESETPASSTOKEN RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Reset Email Sent")
      setEmailSent(true)
    } catch (error) {
      console.log("RESETPASSTOKEN ERROR............", error)
      toast.error("Failed To Send Reset Email")
    }
    
  }
}

export function resetPassword(password, token, setResetDone, navigate) {
  return async () => {
    
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        token,
      })

      console.log("RESETPASSWORD RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Password Reset Successfully")
      setResetDone(true)

      navigate("/login")

    } catch (error) {
      console.log("RESETPASSWORD ERROR............", error)
      toast.error("Failed To Reset Password")
    }
    
  }
}

export function logOut(navigate) {
  return (dispatch) => {
    
    dispatch(setToken(null))
    dispatch(setUser(null))

    localStorage.removeItem("token")
    localStorage.removeItem("user")

    toast.success("Logged Out")
    
    navigate("/")
  }
}
