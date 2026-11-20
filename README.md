# PayPal India Clone 

A frontend clone of the PayPal India website, built using React and CSS. This project recreates key website interfaces, including the homepage, Contact Sales page, and Login page, with responsive layouts and interactive elements.

## 🚀 Features

### 1. Homepage
- PayPal-inspired navigation bar.
- Login and Sign Up buttons.
- Business and Personal page toggle.
- Hero section with action buttons.
- Contact Sales navigation.
- Custom footer with navigation links.

### 2. Contact Sales Page
- Dedicated Contact Sales page.
- Two-column layout with business information and sales enquiry form.
- Form fields with input validation.
- Error messages for invalid or missing inputs.
- Clickable telephone number.
- Hover effects on the call button.
- Help Centre link.

### 3. Login Page
- Standalone login interface inspired by PayPal.
- Email address input field.
- Email format validation.
- Error messages for empty or invalid email addresses.
- Next button redirects to the homepage after valid email input.
- Sign Up button.
- Forgotten your email text (currently non-functional).

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Language:** JavaScript (JSX)
- **Styling:** CSS3
- **Routing:** React Router DOM
- **Version Control:** Git and GitHub

## 📁 Project Structure

```text
PayPalClone_Assignment/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── PageToggle.jsx
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── ContactSales/
│   │   │   ├── ContactSales.jsx
│   │   │   ├── ContactSales.css
│   │   │   ├── SalesForm.jsx
│   │   │   ├── SalesForm.css
│   │   │   ├── CallButton.jsx
│   │   │   └── CallButton.css
│   │   │
│   │   └── Login/
│   │       ├── Login.jsx
│   │       └── Login.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites
- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/tanvisharma252031/PayPalClone_Assignment.git
```

### 2. Navigate to the Project Directory

```bash
cd PayPalClone_Assignment
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## 🧭 Application Routes

| Route | Page |
|---|---|
| `/` | Homepage |
| `/contact-sales` | Contact Sales |
| `/login` | Login |

## 🔮 Future Enhancements

- Complete Sign Up page.
- Password entry and login flow.
- Backend integration.
- User authentication.
- Improved form handling and validation.
- Additional PayPal-inspired pages and interactions.
- Enhanced mobile responsiveness.


---

**Developed as a frontend development project using React and Vite.**