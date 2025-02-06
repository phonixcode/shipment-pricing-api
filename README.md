# Shipment Pricing API

This is a RESTful API that calculates shipping costs based on weight, distance, and cargo type. It uses **Node.js, Express.js, MongoDB, and TypeScript** and follows **SOLID principles, DRY, and KISS**.

---

## **Setup Instructions**

### **1. Prerequisites**
Ensure you have the following installed:
- [Node.js (v18+)](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Docker (Optional)](https://www.docker.com/get-started)

---

## **Setup Without Docker**

1. **Clone the repository**
   ```sh
   git clone https://github.com/phonixcode/shipment-pricing-api.git
   cd shipment-pricing-api
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Create a `.env` file** in the root directory and add:
   ```env
   PORT=9000
   MONGO_URI=mongodb://localhost:27017/shipmentDB
   ```

4. **Start MongoDB** (if not already running):
   ```sh
   mongod --dbpath=/data/db
   ```

5. **Run the application**
   ```sh
   npm run dev
   ```

6. **API is now running at**
   ```sh
   http://localhost:9000
   ```

---

## **Setup Using Docker**

1. **Clone the repository**
   ```sh
   git clone https://github.com/phonixcode/shipment-pricing-api.git
   cd shipment-pricing-api
   ```

2. **Create a `.env` file**
   ```env
   PORT=9000
   MONGO_URI=mongodb://mongo:27017/shipmentDB
   ```

3. **Run Docker Compose**
   ```sh
   docker-compose up --build -d
   ```

4. **Check running containers**
   ```sh
   docker ps
   ```

5. **API is now running at**
   ```sh
   http://localhost:9000
   ```

---

## **API Endpoints** 
| Method | Endpoint            | Description                       |
|--------|---------------------|-----------------------------------|
| GET    | `/`                 | Get all shipments                 |
| POST   | `/calculate`        | Calculate & store shipment cost   |

[Check Documentation](https://documenter.getpostman.com/view/12340995/2sAYX6q2ht)

---

## **Testing the API**
Use **Postman** or **cURL** to test the endpoints:

**Retrieve All Shipments:**
```sh
curl -X POST http://localhost:9000/api/shipments/calculate \
-H "Content-Type: application/json" \
-d '{ "weight": 10, "distance": 50, "cargoType": "fragile" }'
```
**Calculate Shipping Cost and Save:**
```sh
curl -X GET http://localhost:9000/api/shipments \
-H "Content-Type: application/json" \
```
---

## **Stopping the Application**
- **Without Docker**:
  ```sh
  Ctrl + C (in terminal where app is running)
  ```
- **With Docker**:
  ```sh
  docker-compose down
  ```
---


