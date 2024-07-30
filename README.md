# Node.js Dummy JSON Project

## Instructions to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/dakshkanaujia/rocketium-assignment.git
   cd rocketium-nodejs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   node src/app.js
   ```

4. Access the API at:
   ```
   http://localhost:4545/api/data
   ```

## API Endpoints

- `/api/data`: Get all data
- `/api/data/filter`: Filter and sort data
  - Query parameters:
    - `filterBy`: Filter by field
    - `filterValue`: Value to filter
    - `sortBy`: Sort by field

## Postman Collection

You can import the Postman collection to test the API endpoints. Download the collection from the link below and import it into Postman.

[Download Postman Collection](./postman_collection.json)

### How to Import the Collection

1. Open Postman.
2. Click on the **Import** button in the top left corner.
3. Choose the **File** tab.
4. Click on **Choose Files** and select the `postman_collection.json` file.
5. Click **Import**.

Now you should see the collection in your Postman with all the documented endpoints.
