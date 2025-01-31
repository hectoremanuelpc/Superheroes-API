# Superheroes API 🚀

A simple API for managing superheroes. Users can create superheroes by specifying a name, type, superpower, and additional attributes depending on the superhero type. Built with NestJS for the backend and React for the frontend.

## Features

-   Create different types of superheroes.
-   Retrieve all superheroes.
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
    git clone https://github.com/hectoremanuelpc/Superheroes-API.git
    cd superheroes-api/api
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Run the server:
    ```sh
    npm run start
    ```

### Frontend

1. Navigate to the frontend folder:
    ```sh
    cd superheroes-api/frontend
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

-   **POST /superheroes**: Add a new superhero. Requires `name`, `type`, and `superpower`. Additionally, requires `humilityScore` for humble superheroes.
-   **GET /superheroes**: Fetch the list of superheroes.
-   **GET /superheroes?type=humble**: Fetch the list of humble superheroes sorted by humility score.

## If I had more time

-   Persistent database storage instead of in-memory storage.
-   More superhero types and customization.
-   Authentication & authorization for managing superhero data.
-   More advanced filtering and sorting options.

## Collaboration Notes

To improve or expand this task, collaboration with a teammate can be approached in the following ways:

1. **Code Reviews**: Regularly review each other's code to ensure quality and share knowledge about best practices.
2. **Pair Programming**: Work together on complex features to enhance understanding and foster creativity.
3. **Task Division**: Split tasks based on strengths and interests, allowing each team member to focus on what they do best.
4. **Feedback Sessions**: Schedule regular meetings to discuss ideas, gather feedback, and brainstorm new features or improvements.

## License

This project is open-source and available under the MIT License.
