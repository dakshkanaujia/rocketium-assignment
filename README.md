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

3. Run the script to initialise Data from Dummy API
   ```bash
   node src/data/data_init.js
   ```

4. Run the server:
   ```bash
   node src/app.js
   ```

5. Access the API at:
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


## API DOCUMENTATION
# Rocketium Node.js Assignment API Documentation

Base URL: `https://rocketium-assignment-xxeq.onrender.com/`

## Endpoints

| **Method** | **URL**                                                         | **Query Params**                  | **Description**                                 |
|------------|-----------------------------------------------------------------|----------------------------------|-------------------------------------------------|
| GET        | `/api/data`                                                     |                                  | Get all the data from the Dummy JSON Data      |
| GET        | `/api/data/filter?sortBy=version`                               | `sortBy=version`                 | Sort the data using the `version` attribute    |
| GET        | `/api/data/filter?filterBy=language&filterValue=hindi`          | `filterBy=language`<br>`filterValue=hindi` | Filter the data using the `language` attribute |
| GET        | `/api/data/filter?filterBy=name&filterValue=preeti`             | `filterBy=name`<br>`filterValue=preeti` | Filter the data using the `name` attribute     |



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


