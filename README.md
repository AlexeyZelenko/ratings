Here’s an example of a `README.md` file for your project in English:

---

# Vue SPA Task

This project is a Single Page Application (SPA) built with Vue 3, Vite, and TypeScript. It includes an adaptive component that fetches data from a mock API and implements additional functionality such as buttons for external redirection and modal display.

## Features

- **Adaptive Component**: A responsive component that displays product ratings and reviews.
- **API Integration**: Fetches data from a mock API (e.g., MockAPI) to display product ratings and review counts.
- **Interactive Buttons**:
    - Button 1: Redirects to an external resource (e.g., Google).
    - Button 2: Opens a modal or performs a custom action.
- **Optional Features**:
    - Universalization of the component to accept different titles/data.
    - Language switching (e.g., English and Ukrainian).

## Technologies Used

- **Vue 3**: The core framework for building the SPA.
- **Vite**: Fast build tool for modern web development.
- **TypeScript**: Adds type safety to the project.
- **SCSS**: Used for styling the components.
- **Axios**: For making API requests.
- **MockAPI**: A mock API service for fetching data.

## Project Structure

```
vue-spa-task/
├── public/
├── src/
│   ├── assets/
│   │   └── fonts
│   ├── components/
│   │   └── GoogleReviews.vue
│   │   └── ReviewButton.vue
│   │   └── ReviewCard.vue
│   │   └── ReviewHeader.vue
│   │   └── ReviewStars.vue
│   ├── views/
│   │   └── HomeView.vue
│   ├── App.vue
│   ├── main.ts
│   ├── styles/
│   │   └── main.scss
│   └── api/
│       └── mockApi.ts
├── index.html
├── vite.config.ts
└── package.json
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AlexeyZelenko/ratings.git
   cd vue-spa-task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## API Integration

This project uses a mock API to fetch product data. The API endpoint is configured in `src/api/mockApi.ts`. You can use services like [MockAPI](https://mockapi.io/) to create your own mock API.

Example API response:
```json
[
  {
    "id": 1,
    "rating": 3.8,
    "review": "Super!"
  },
  {
    "id": 2,
    "rating": 4.7,
    "review": "Very good!"
  },
  {
    "id": 3,
    "rating": 4.5,
    "review": "Дуже сподобалось!"
  }
]
```

5. Push your branch and submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---
