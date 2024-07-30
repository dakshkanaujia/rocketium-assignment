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
