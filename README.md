E-Commerce User Authentication System (JWT)
A functional, secure login system built with React and Vite, utilizing JSON Web Tokens (JWT) for stateless authentication. This project demonstrates a complete authentication flow using a real-world API (DummyJSON).

🚀 Objective
To implement a secure e-commerce login system where user sessions are managed via JWT, stored locally, and used to protect private routes.

🛠️ Technical Implementation
1. Frontend Framework
Built using React 18 and Vite for optimized development and fast bundling. The project uses a component-based architecture for high maintainability.

2. JWT Authentication Flow
Authentication: The app sends a POST request to /auth/login. On successful credentials (e.g., username emilys), the server returns an accessToken (JWT).

Token Storage: The JWT is stored in the browser's Local Storage, allowing the user to remain logged in even after closing the tab.

Global State: A React Context API (AuthContext) manages the user state globally, making login/logout actions accessible from any component.

3. Axios Interceptor (The "Secret Sauce")
To avoid manually adding headers to every API call, a global Axios Interceptor is implemented. It automatically detects if a token exists in Local Storage and attaches it to the Authorization header as a Bearer token.

4. Protected Routes
The Dashboard is guarded by a ProtectedRoute component.

If a user is authenticated, it renders the Dashboard.

If unauthenticated, it automatically redirects the user back to the /login page, preventing unauthorized access to user data.

5. Error Handling
The system gracefully handles authentication errors:

Invalid Credentials: Displays a user-friendly error message if the username or password is incorrect.

Visual Feedback: Uses state-based UI updates to show error banners without refreshing the page.

📂 Project Structure
Plaintext

src/
├── api/
│   └── axiosConfig.js      # Centralized API logic & Interceptors
├── components/
│   └── ProtectedRoute.jsx  # Route guard for private pages
├── context/
│   └── AuthContext.jsx     # Global Authentication state
├── pages/
│   ├── Login.jsx           # Login UI and credential logic
│   └── Dashboard.jsx       # Private user profile display
├── App.jsx                 # Routing and Provider setup
└── App.css                 # Professional UI styling
📦 How to Run
Install Dependencies:

Bash

npm install
Start Development Server:

Bash

npm run dev
Test Credentials:

Username: emilys

Password: emilyspass
