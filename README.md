GroceryStock

A modern, dark-themed React application to manage and track grocery inventory. Built with React and Tailwind CSS, GroceryStock provides an intuitive interface for searching, filtering, and managing products.

Demo
Features
Dark-themed, responsive UI with appealing colors.
Search products by name.
Filter products by stock availability.
Dynamic product grid with categories, pricing, and stock status.
Easy-to-extend structure for adding more features.

Technologies Used
React – Frontend library for building interactive UI.
Tailwind CSS – Utility-first CSS framework for fast, modern styling.
JavaScript (ES6+) – Core logic and state management.

Project Structure
src/
├─ App.jsx             # Main app component
├─ components/
│  ├─ Navbar.jsx       # Top navigation bar
│  ├─ Hero.jsx         # Hero section
│  ├─ Footer.jsx       # Footer component
│  └─ FilterableProductGrid.jsx  # Product grid with search & filter
├─ index.css           # Tailwind CSS imports
└─ main.jsx            # React DOM rendering

Getting Started
Prerequisites
Node.js >= 18.x
npm or yarn

Installation
# Clone the repo
git clone https://github.com/yourusername/grocerystock.git

# Navigate to project folder
cd grocerystock

# Install dependencies
npm install
# or
yarn install

# Run the project
npm start
# or
yarn start

The app will run locally at http://localhost:3000

Customization
Products: Modify the PRODUCTS array in App.jsx to add/remove products.
Colors & Themes: Update Tailwind CSS classes to adjust the color palette or dark mode styling.

Contributing
Fork the repository.
Create a new branch: git checkout -b feature/YourFeature.
Commit your changes: git commit -m "Add new feature".
Push to the branch: git push origin feature/YourFeature.
Open a Pull Request.

License
This project is licensed under the MIT License.
