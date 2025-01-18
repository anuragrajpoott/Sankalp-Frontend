
import { apiConnector } from "../apiConnector"
import { categoryEndPoints } from "../apis"

const {
    SHOWCATEGORY_API
} = categoryEndPoints

export function showAllCategories () {
    return async () => {
        try {
           const response = await apiConnector("GET", SHOWCATEGORY_API)
           console.log("showing category responce...",response)
           console.log(response.data.success)



      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      
        } catch (error) {
            console.log("SENDOTP API ERROR............", error)
        }
    }

}