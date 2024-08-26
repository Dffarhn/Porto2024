// src/utils/auth/login.ts

import { DecryptResponse } from "../secureAPI/decrypt";
import { EncryptRequest } from "../secureAPI/encrypt";

// Define the structure of form data
export interface RegisterData {
  nama: string;
  password: string;
  retypepassword: string;
}

// Define the structure of the response data
interface RegisterResponseData {
  access_token: string;
}

// Define the structure of the full response object
interface RegisterResponse {
  statusCode?: number;
  message: string;
  data?: RegisterResponseData;
}

// Utility function to handle login
export async function registerUser(data: RegisterData): Promise<RegisterResponse> {
  try {
    const apiUrl = `${import.meta.env.PUBLIC_API_URL}/auth/register`;
    const EncryptData = EncryptRequest(data);
    console.log(EncryptData);
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: EncryptData,
    });

    if (response.ok) {
      const res = await response.json();
      const resData:RegisterResponse = DecryptResponse(res);
      console.log(resData)
      return resData;
    } else {
      const error = await response.json();
      return error
    }
  } catch (error) {
    console.error("Error:", error);

    const DataError:RegisterResponse ={
        statusCode:500,
        message:"Failed To Call The Server"
    }
    return DataError
  }
}
