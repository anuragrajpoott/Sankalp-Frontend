const BASE_URL = "http://localhost:4000/api/v1"

export const authEndPoints = {
  SENDOTP_API: BASE_URL + "/auth/send-otp",
  SIGNUP_API: BASE_URL + "/auth/sign-up",
  LOGIN_API: BASE_URL + "/auth/log-in",
  SENDRESETPASSWORDLINK_API: BASE_URL + "/auth/forgot-password/token",
  RESETPASSWORD_API: BASE_URL + "/auth/forgot-password",
}


export const categoryEndPoints = {
    CATEGORY_API : BASE_URL + "/course/showAllCategories"
}