# Login Registration App
Simple user login and registration app leveraging i18next and react-i18next that allows multi-lingual web app.

### English
![image](https://github.com/desmondtong/Java-backend/assets/107420497/beea0b62-5187-4169-bcb8-790d422d3ee6)
### Mandarin
![image](https://github.com/desmondtong/Java-backend/assets/107420497/eff11bb2-7dfb-42e2-85b1-0cbeea427c44)

---
## Setup

### Java Backend
All the backend code is in the JWTAuth directory. Run all backend commands from inside that directory.

### Create Database
Create database using this [sql](https://github.com/desmondtong/Login-Registration-App/blob/main/JWTAuth/_user.sql) file.

### Setup application.yml
Configure .yml to connect to the database:

```
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/registration
    username: ""
    password: ""
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: false
    properties:
      hibernate:
        format_sql: true
    database: postgresql
    database-platform: org.hibernate.dialect.PostgreSQLDialect
```

### React Front-end
All the frontend react code is in the Frontend directory. Run all frontend commands from inside that directory.

### Setup .env for Front-end
Create a new .env file in the front-end directory and add the following lines:
```
VITE_SERVER=http://localhost:8080
```

### Run the app
```
npm i
npm run dev
```
---
## Languages and Technologies Used

### Front-end
- React
- TypeScript
- CSS
- Material UI

### Back-end
- Java
- Spring Boot
- Spring Security
- JWT
- Database: PostgreSQL
- Driver: Node-progres (pg)

### Others
- React i18next

---
## References
1. [React i18next Tutorial](https://www.youtube.com/watch?v=kGFEvphB5G0)
2. [Spring Boot 3 + Spring Security 6 - JWT Authentication and Authorisation](https://www.youtube.com/watch?v=KxqlJblhzfI&t=4208s)
3. [React i18next](https://react.i18next.com)
