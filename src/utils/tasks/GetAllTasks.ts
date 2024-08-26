// Define the structure of a single task
export interface TaskData {
  id: string;
  isi_task: string;
}

// Define the structure of the full response object
export interface TaskResponse {
  statusCode?: number;
  message?: string;
  data?: TaskData[];
}

// Utility function to handle login
// Utility function to get all tasks
export async function GetAllTasks(Token: string): Promise<TaskResponse> {
    try {
      const apiUrl = `${import.meta.env.PUBLIC_API_URL}/tasks`; // Update URL as needed
  
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Token}`  
        },
      });
  
      if (response.ok) {
        const res: TaskResponse = await response.json();
        return res;
      } else {
        const error = await response.json();
        // Ensure the error conforms to the TaskResponse interface
        const DataError: TaskResponse = {
          statusCode: error.statusCode || 500,
          message: error.message || "Failed to retrieve tasks",
          data: [] // Assuming data will be empty in case of error
        };
        return DataError;
      }
    } catch (error) {
      console.error("Error:", error);
      const DataError: TaskResponse = {
        statusCode: 500,
        message: "Failed To Call The Server",
        data: [] // Ensure data is an empty array on error
      };
      return DataError;
    }
  }
  