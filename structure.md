#### Directory structure

```
.
├── config
│   └── config.json
│ 
├── models
│   ├── users.js
│   ├── trip.js
│   └── index.js
│
├── public (TBD)
│   ├── index.html
│   ├── signup.html
│   ├── login.html
│   ├── dashboard.html
│   ├── tripsview.html
│   │
│   └── assets
│       ├── css
│       │   └── style.css
│       ├── js
│       │   ├── users.js
│       │   ├── trips.js
│       │   └── cms.js (cms=content management system)
│       │
│       └── img
│           └── burger.png
├── routes
│   ├── user-api-routes
│   ├── trip-api-routes
│   └── html-routes.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql (dummy data)
│ 
├── node_modules
│ 
├── package.json
│   
├── server.js
│
└── *views (if we choose to use handlebars)
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```