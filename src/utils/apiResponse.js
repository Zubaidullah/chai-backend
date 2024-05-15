// apiResponse.js is a class that is used to format the response of the API. It takes three parameters: message, data, and statusCode. It returns an object with the following properties:
class apiResponse {
  constructor(message = "Success", data, statusCode) {
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
  }
}
