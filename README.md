# 🚀 Express Request Logging Middleware

This project demonstrates how to implement a custom request logging middleware in a Node.js and Express application. The middleware logs important details for every incoming HTTP request such as method, URL, IP address, timestamp, status code, and response time.

---

## 📂 Project Structure

```

express-logging-middleware/
├── requestLogger.js      # Custom logging middleware
├── server.js             # Main Express server
├── package.json

````

---

## 📌 Features

- Logs request method, URL, and client IP.
- Captures timestamps for each request.
- Calculates response duration.
- Logs status code after the response is sent.
- Works globally across all routes.
- Uses Express middleware concept.
- Optionally replaceable with libraries like Morgan.

---

## 🧠 Key Concepts

- **Middleware**: Functions that run before reaching route handlers.
- **Logging**: Useful for debugging, performance monitoring, and security.
- **`res.on('finish')`**: Hook to log response status after sending it to the client.

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/express-logging-middleware.git
cd express-logging-middleware
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node server.js
```

The server will start on `http://localhost:3000`

---

## 🧪 Example Requests

### GET `/`

```bash
curl http://localhost:3000/
```

### POST `/submit`

```bash
curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{"name": "John"}'
```

### Sample Terminal Output

```
[2025-06-03T13:45:23.000Z] GET / - IP: ::1
[2025-06-03T13:45:23.000Z] GET / - Status: 200 - Time: 2ms

[2025-06-03T13:45:30.123Z] POST /submit - IP: ::1
[2025-06-03T13:45:30.123Z] POST /submit - Status: 200 - Time: 3ms
```

---

## 🧰 Optional: Use Morgan for Logging

```bash
npm install morgan
```

Replace the custom logger with:

```js
const morgan = require('morgan');
app.use(morgan('combined'));
```

---

## 👨‍💻 Author

**Naveen Kumar J**