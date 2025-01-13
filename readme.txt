project-team-matcher/
├── client/                           # Frontend React app (using Create React App)
│   ├── node_modules/                 # Dependencies for React
│   ├── public/                       # Static assets like index.html, images, etc.
│   │   ├── index.html
│   │   ├── favicon.ico
│   ├── src/                          # React components, pages, hooks, etc.
│   │   ├── assets/                   # Images, icons, etc.
│   │   ├── components/               # Reusable components (Button, Card, etc.)
│   │   ├── pages/                    # Different views of the app (Dashboard, Profile, etc.)
│   │   ├── hooks/                    # Custom hooks for handling logic
│   │   ├── App.js                    # Main React app component
│   │   ├── index.js                  # Entry point for React app
│   │   ├── api.js                    # API request utilities (fetch, axios)
│   ├── .gitignore                    # Git ignore file
│   ├── package-lock.json             # Node package lock for frontend
│   ├── package.json                  # Frontend dependencies and scripts
├── server/                           # Backend Node.js Express server
│   ├── node_modules/                 # Dependencies for server
│   ├── config/                       # Configuration files (e.g., DB, JWT secrets)
│   │   ├── db.js                     # MongoDB connection logic
│   │   ├── jwtConfig.js              # JWT configuration (secret, expiration)
│   ├── controllers/                  # Express controllers handling requests
│   │   ├── authController.js         # Authentication logic (register, login)
│   │   ├── userController.js         # User CRUD operations
│   │   ├── projectController.js      # Project CRUD and matching
│   │   ├── teamController.js         # Team CRUD and member operations
│   ├── middlewares/                  # Middlewares for authentication, validation, etc.
│   │   ├── authMiddleware.js         # Auth check middleware
│   │   ├── validateMiddleware.js     # Input validation middleware
│   ├── models/                       # MongoDB models (Schema definitions)
│   │   ├── User.js                   # User model
│   │   ├── Project.js                # Project model
│   │   ├── Team.js                   # Team model
│   │   ├── UserSkill.js              # UserSkill model
│   │   ├── ProjectSkill.js           # ProjectSkill model
│   │   ├── TeamMember.js             # TeamMember model
│   ├── routes/                       # Express route definitions
│   │   ├── authRoutes.js             # Routes for authentication
│   │   ├── userRoutes.js             # Routes for user management
│   │   ├── projectRoutes.js          # Routes for project management
│   │   ├── teamRoutes.js             # Routes for team management
│   ├── server.js                     # Entry point for the Node.js server
│   ├── .env                          # Environment variables (DB URI, JWT secret, etc.)
├── .gitignore                        # Git ignore file for the root
└── README.md                         # Project description and setup instructions
