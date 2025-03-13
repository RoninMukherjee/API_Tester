# API Tester

## Overview

API Tester is a lightweight and user-friendly tool for testing REST APIs. It provides an interactive interface where users can configure API requests, including query parameters, headers, authentication methods, and request bodies. This tool enables developers to quickly send requests and view responses in an organized format.

## Features

- **Supports Multiple HTTP Methods**: GET, POST, PUT, PATCH, DELETE
- **Customizable Headers and Query Parameters**
- **Authentication Options**: Basic Auth, Bearer Token, and API Key
- **JSON Request Body Support**
- **Formatted API Response Display**
- **Responsive UI with Bootstrap**

## Technologies Used

### **Frontend:**

- **HTML, CSS, JavaScript**: The core technologies for building the user interface.
- **Bootstrap**: Used for styling and responsive design to ensure a clean UI.
- **Axios**: A promise-based HTTP client used for making API requests asynchronously.
- **Highlight.js**: Used for syntax highlighting of API responses in the UI.

### **Backend:**

- **Node.js**: A JavaScript runtime used to run the backend server.
- **Express.js**: A lightweight framework for building API endpoints and handling HTTP requests.
- **Axios**: Used for making API requests on behalf of the client.
- **dotenv**: Manages environment variables securely.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/RoninMukherjee/API_Tester.git
   ```
2. Navigate to the project directory:
   ```bash
   cd API_Tester
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open a browser and go to:
   ```
   http://localhost:3000
   ```

## Usage

1. Select an HTTP method (GET, POST, etc.).
2. Enter the API endpoint URL.
3. Add optional query parameters and headers.
4. Choose authentication if required.
5. Enter the request body (for POST/PUT/PATCH requests).
6. Click **SEND** to execute the API request.
7. View the response and headers in the formatted display section.

## Key Highlights

- **User-Friendly Interface**: Intuitive and easy to use for making API calls.
- **Multiple Authentication Methods**: Supports Basic Auth, Bearer Tokens, and API Keys.
- **Dynamic Query Parameters & Headers**: Allows users to customize API requests on the go.
- **Error Handling**: Displays errors in an easy-to-read format.
- **Fast and Lightweight**: Uses Express.js for quick response times.

## File Structure

```
API_Tester/
├── public/
│   ├── index.html  # Frontend UI
│   ├── script.js   # Handles UI interactions and API calls
│   ├── style.css   # Styling for the UI
├── server.js       # Backend Express server
├── .env            # Environment variables (if needed)
├── package.json    # Project dependencies
└── README.md       # Documentation
```

## Contribution

Contributions are welcome! If you’d like to improve this tool, feel free to fork the repository, make changes, and submit a pull request.


Developed by **Ronin Mukherjee** 🚀

