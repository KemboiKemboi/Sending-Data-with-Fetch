# Sending-Data-with-Fetch
# Simple POST Request with Fetch

This project demonstrates how to send a POST request to a JSON server using the `fetch()` function in JavaScript. The data includes a user's name and email, which are sent to a server and the response is displayed on the page.

## How to Use

1. **Set up JSON Server:**
   - Make sure you have [JSON Server](https://github.com/typicode/json-server) running on `http://localhost:3000` with a `users` endpoint. 

2. **Run the Project:**
   - Open `index.html` in your browser.

3. **Call the `submitData` function:**
   - Open the browser's developer console.
   - Call the function like this:  
     `submitData('John Doe', 'john.doe@example.com')`

4. **View the result:**
   - The new user's ID will be displayed on the page. If there is an error, an error message will be shown instead.

## Example

```javascript
submitData('John Doe', 'john.doe@example.com');
