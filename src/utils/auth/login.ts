// src/utils/auth/login.ts

import { DecryptResponse } from "../secureAPI/decrypt";
import { EncryptRequest } from "../secureAPI/encrypt";

// Define the structure of form data
export interface LoginData {
  nama: string;
  password: string;
}

// Define the structure of the response data
interface LoginResponseData {
  access_token: string;
}

// Define the structure of the full response object
interface LoginResponse {
  statusCode?: number;
  message?: string;
  data?: LoginResponseData;
}

// Utility function to handle login
export async function loginUser(data: LoginData): Promise<LoginResponse> {
  try {
    const apiUrl = `${import.meta.env.PUBLIC_API_URL}/auth/login`;
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
      const resData:LoginResponse = DecryptResponse(res);
      return resData;
    } else {
      const error = await response.json();
      return error
    }
  } catch (error) {
    console.error("Error:", error);

    const DataError:LoginResponse ={
        statusCode:500,
        message:"Failed To Call The Server"
    }
    return DataError
  }
}
