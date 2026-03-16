## About

Personal Finance Dashboard is a web-based expense management application that helps users track their pocket money, record transactions, and analyze spending patterns. The application allows users to set an initial balance, add income or expense transactions, categorize spending, and visualize expenses through interactive charts.

The project demonstrates the use of frontend web technologies to build a dynamic financial tracking tool with persistent data storage and real-time analytics.

---

## Objectives

- Allow users to set their monthly pocket money or starting balance
- Track income and expense transactions dynamically
- Categorize expenses into predefined categories
- Maintain transaction history with deletion capability
- Automatically calculate total income, expenses, and remaining balance
- Visualize expense distribution using charts
- Store transaction data using browser LocalStorage
- Provide a dark mode interface for better user experience

---

## Features

- Starting balance input for monthly pocket money tracking
- Add transactions with description, amount, category, and date
- Income and expense classification for accurate calculations
- Dynamic balance, income, and expense summary updates
- Transaction history with delete option
- Category-based expense tracking
- Pie chart visualization of expense distribution using Chart.js
- Dark mode interface for improved usability
- LocalStorage support for persistent data

---

## Expense Categories

- Food
- Travel
- Shopping
- Bills
- Entertainment
- Other

---

## Dashboard Components

**Balance Overview**
Displays the current remaining balance after all transactions.

**Income Summary**
Shows the total money received.

**Expense Summary**
Shows the total money spent.

**Transaction History**
Displays all transactions including description, category, date, and amount.

**Expense Distribution Chart**
Pie chart showing the distribution of expenses across categories.

---

## Technologies Used

| Category      | Technology           |
| ------------- | -------------------- |
| Frontend      | HTML5                |
| Styling       | CSS3                 |
| Programming   | JavaScript           |
| Data Storage  | Browser LocalStorage |
| Visualization | Chart.js             |

---

## How the Application Works

1. The user first sets an initial monthly balance representing pocket money or starting funds.
2. Each transaction is recorded as either income or expense along with a category.
3. The system dynamically updates the balance based on all transactions.
4. Expenses are grouped by category and visualized through a chart.
5. All data is stored in LocalStorage so the information remains available after refreshing the page.

---

## Project Structure

```
Expense-Tracker-Dashboard
│
├── index.html        Main application interface
├── style.css         Styling and dark mode implementation
├── script.js         Application logic and data handling
└── README.md         Project documentation
```

---

## Requirements

A modern web browser such as Chrome, Edge, Firefox, or Safari.

No external backend or server is required.

---

## How to Run

**Option 1 - Local Execution**

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. The application will start immediately.

**Option 2 - GitHub Pages Deployment**

1. Upload the project to GitHub.
2. Enable GitHub Pages from the repository settings.
3. Access the live application through the generated GitHub Pages link.

---

## Sample Usage

Example starting balance:

```
5000
```

Example transactions:

```
Food     - 200
Travel   - 300
Gift received +1000
```

Result:

```
Income            : 1000
Expense           : 500
Remaining Balance : 5500
```

---

## Author Note

This project was developed as a frontend web application to demonstrate financial data tracking, visualization, and client-side data storage using JavaScript. It highlights the practical use of web technologies to create an interactive and functional personal finance tool.

**Ayushi Nishita Ekka**

---

## License

This project is open for educational and academic purposes only.
