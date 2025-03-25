# WeWantWaste App

The _WeWantWaste_ application is a modern web application built with React and TypeScript, leveraging a component-driven architecture and Vite as the build tool. This project is designed with scalability, maintainability, and performance in mind.

The app also supports dark and light themes.

## Approach and Technology Stack

1. **Configuration:**
   - **.env** – Contains environment-specific configuration variables (e.g., the API URL).

2. **Efficient Development Environment:**
   - **Vite** is used as the build tool, offering fast hot-module replacement (HMR) and an optimized development experience.
   - The project is configured to support both development and production environments.

3. **Component-Driven Architecture:**
   - Reusable components make the UI modular and maintainable.
   - Each component (buttons, cards, toggles, etc.) is self-contained with its own logic and styling.

4. **Custom Hooks for Data Management:**
   - Custom React hooks abstract data fetching, state management, and side effects, leading to cleaner and more focused components.

5. **API Integration and Data Fetching:**
   - Network calls are abstracted using Axios and the react-query client to manage caching and asynchronous operations efficiently.

6. **Type Safety and Code Quality:**
   - **TypeScript** ensures type safety across the entire codebase.
   - **ESLint** enforces coding standards, helping catch errors early and maintain high-quality code.

7. **Static Assets and Routing:**
   - Static files are served from the **public/** folder.
   - The application uses a routing solution (e.g., React Router) to navigate between pages, ensuring a smooth user experience.

## Getting Started

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd wewantwaste-app
yarn install 
```
### Running The App

```bash
yarn dev 
```
