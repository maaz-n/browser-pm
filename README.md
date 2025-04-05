


# BrowserPM 🔐

**BrowserPM** is a simple password manager built with **React** and **Redux**, designed to run entirely in your browser. It allows you to securely store and manage your passwords using the browser's `localStorage`.

## Features

- Add and manage website login credentials.
- Edit existing password records.
- Delete saved records with confirmation.
- Copy usernames and passwords to clipboard.
- Password visibility toggle.
- Data is stored locally in `localStorage` (no server needed).
- Redux is used for state management.

## Technologies Used

- React
- Redux Toolkit
- Font Awesome Icons
- React Toastify
- Tailwind CSS

## Screenshots

Coming soon...

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/browserpm.git
cd browserpm
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the development server:

```bash
npm start
```

The app will run at `http://localhost:3000`.

## Folder Structure

- `/components/AddPassword.js` – Add new records with form validation.
- `/components/AllPasswords.js` – Display, edit, delete, and copy records.
- `/store/slice.js` – Redux slice handling all CRUD operations.

## Data Persistence

All password records are stored in the browser’s `localStorage`. Your data will stay saved even if you refresh or close the tab, unless you manually delete it.

> **Note:** This is a client-side app only. Do not use it to store real passwords.

## License

This project is open-source and free to use.

---

Made with ❤️ using React.