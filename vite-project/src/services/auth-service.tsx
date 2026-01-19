export class AuthService {
  async isAuthenticated(): Promise<boolean> {
    try {
      const response = await fetch("http://localhost:3000/verify-token", {
        method: "GET",
        credentials: "include",
      });

      return response.ok; // Return true if the response is okay, otherwise false
    } catch (error) {
      console.error("An error occurred:", error);
      return false; // Return false if there is an error
    }
  }
}
