const BASE_URL = "http://localhost:4000/api/v1"

export const authEndPoints = {
  SENDOTP_API: BASE_URL + "/auth/send-otp",
  SIGNUP_API: BASE_URL + "/auth/sign-up",
  LOGIN_API: BASE_URL + "/auth/log-in",
  SENDRESETPASSWORDLINK_API: BASE_URL + "/auth/forgot-password/token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  CONTACT_API : BASE_URL + "/auth/contact"
}


export const categoryEndPoints = {
    SHOWCATEGORY_API : BASE_URL + "/category/showAllCategories"
}

export const profileEndPoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/additionalDetails/changeProfileImage",
  UPDATE_PROFILE_API: BASE_URL + "/additionalDetails/updateAdditionalDetails",
  CHANGE_PASSWORD_API: BASE_URL + "/additionalDetails/change-password",
  DELETE_PROFILE_API: BASE_URL + "/additionalDetails/deleteAccount",
}