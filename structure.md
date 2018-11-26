#### Directory structure

```
.
├── config
│   └── config.json
│ 
├── models
│   ├── user.js
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
│       
├── routes
│   ├── user-api-routes.js
│   ├── trip-api-routes.js
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
├── views - testing user inputs (signup, profile, trip plans) 
│   ├── user-data.html -- geting user inputs
│   ├── user-data.js 
│   ├── trip-data.html -- geting trip info
│   └── trip-data.js
│ 
└── *views (if we choose to use handlebars)
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
