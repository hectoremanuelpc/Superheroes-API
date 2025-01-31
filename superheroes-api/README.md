# Humble Superhero API

This is a backend application for managing superheroes. The application is built using TypeScript and provides an API to retrieve superheroes based on their types.

## Features

- Retrieve all superheroes
- Retrieve superheroes by type

## Superhero Types

- `HUMBLE`: Humble superheroes with a humility score
- New superhero types coming soon!

## Design Patterns Used

- **Factory Pattern**: Creates objects without specifying the exact class of object that will be created. This pattern is used to prepare the code for further implementations of new superhero types. By using the Factory Pattern, the code is more flexible and scalable, allowing for easy addition of new superhero types without modifying the existing codebase.

### Running the Application

To start the application, run:

```bash
npm start
```
