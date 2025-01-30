# Humble Superhero API 🚀

A simple API to manage superheroes based on their humility. Users can add superheroes with a name, superpower, and humility score (1-10) and retrieve a sorted list. Built with NestJS and a React frontend.

## Features

-   Add a new superhero with a name, superpower, and humility score.
-   Retrieve all superheroes sorted by humility score in descending order.
-   Input validation to ensure correct data submission.
-   Basic testing with Jest.
-   Frontend built with React.

## Tech Stack

-   **Backend**: NestJS (Node.js)
-   **Frontend**: React
-   **Testing**: Jest

## Installation & Usage

### Backend

1. Clone the repository:
    ```sh
    git clone https://github.com/hectoremanuelpc/Humbe-Superhero.git
    cd humble-superhero/backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Run the server:
    ```sh
    npm run start
    ```

### Frontend (Optional)

1. Navigate to the frontend folder:
    ```sh
    cd ../frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Run the development server:
    ```sh
    npm run dev
    ```

## API Endpoints

-   **POST /superheroes**: Add a new superhero (requires name, superpower, and humility score).
-   **GET /superheroes**: Fetch the list of superheroes sorted by humility score.

## If I had more time

-   Persistent database storage instead of in-memory storage.
-   Authentication & authorization for managing superhero data.
-   More advanced filtering and sorting options.

## License

This project is open-source and available under the MIT License.
