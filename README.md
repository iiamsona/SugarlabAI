# Sugarlab Navigation UI

A responsive, modern, and accessible navigation menu system built with **Next.js**, **React**, **Tailwind CSS**, and **Radix UI**. This UI adapts based on user authentication (logged in, premium, or not), device (desktop or mobile), and screen width. It includes support for user-specific features such as premium tokens, settings, and more.

---

The UI includes:
- Dynamic navigation menus for different user states (guest, logged-in, premium)
- Responsive behavior with full support for mobile and desktop
- Collapsible sidebar
- Icon-based navigation with tooltips
- Token display and upgrade call-to-actions

> _Note: Language selector was intentionally excluded from the implementation._

---

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Zustand](https://github.com/pmndrs/zustand) for state management
- [Radix UI](https://www.radix-ui.com/)
- [Iconify](https://iconify.design/) for scalable icons

---

## 📦 Installation

```bash
git clone https://github.com/your-username/sugarlab.git
cd sugarlab
npm install
````

---

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🏗 Build

```bash
npm run build
npm start
```

---

## 🧪 Lint

```bash
npm run lint
```

---

## ✨ Features

* [x] Responsive mobile & desktop sidebar
* [x] Conditional UI based on user state
* [x] Interactive buttons and tooltips
* [x] Icon-based bottom navigation bar for mobile
* [x] Premium features call-to-action (e.g., "Get Premium")
* [x] Clean, dark UI theme

---

## 📁 Project Structure

```
.
├── components/
├── constants/
├── store/              # Zustand store
├── styles/
├── public/
└── pages/
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

Special thanks to:

* [Radix UI](https://www.radix-ui.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [Iconify](https://iconify.design/)

---
