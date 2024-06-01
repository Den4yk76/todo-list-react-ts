# Todo List Application

This is a simple Todo List application built with React and TypeScript.

## Setup Instructions

### Prerequisites

- Node.js (version >= 10)
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository:
    - `git clone <repository-url>`
    - `cd todo-list-app`

2. Install dependencies:
    - `npm install`
        or 
    - `yarn install`
 
### Running the Application

1. To start the development server, proceed to the cloned repository and run the following command:
    - `npm start`
        or 
    - `yarn start`

The application will be running at [http://localhost:3000](http://localhost:3000).

### Building for Production

1. To build the application for production, run:
    - `npm run build`
        or 
    - `yarn build`

### Thought Process on Design and Architectural Choices

- **Components**: I organized the application into reusable components such as TodoList, TodoItem, etc., to keep the codebase modular and maintainable.

- **State Management**: I used React's built-in useState hook to manage state within the components. For larger applications, I might consider using a state management library like Redux Toolkit or Context API.

- **Styling**: I used CSS modules to style the components, keeping the styles scoped to the respective components to avoid conflicts and maintain a clear separation of concerns.

- **Persistence**: I utilized localStorage to persist the todo list data locally in the browser. This ensures that the user's todo list remains intact even after refreshing the page or closing the browser.

- **Testing**: I included unit tests using the React Testing Library to ensure that components behave as expected and to catch any regressions during development.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.






