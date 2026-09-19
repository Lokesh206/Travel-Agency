# 🛺 Travel India — Bharat Open Mobility & Tours

An open-mobility tour booking web application inspired by **Mana Yatri** (Hyderabad) and **Namma Yatri** (Bengaluru), built with clean HTML5, CSS3, and JavaScript.

---

## 🚀 How to Run the Project

You can run this project using **any** of the following simple methods:

### Method 1: Instant Double-Click (Easiest)
1. Double-click the file [`run.bat`](./run.bat) in the project folder.
2. It will automatically start the local server and open the webpage in your default browser at `http://localhost:3000`.

*Alternatively, you can simply double-click [`index.html`](./index.html) to open it directly in Chrome, Edge, or Firefox.*

---

### Method 2: Using Node.js / NPM (Recommended for Developers)
Open your terminal in this folder and run:

```bash
npm start
```

or:

```bash
node server.js
```

This starts the built-in zero-dependency server and automatically launches your web browser at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

### Method 3: Using Python
If you prefer Python:

```bash
python -m http.server 3000
```
Then open your browser and visit:
👉 **[http://localhost:3000](http://localhost:3000)**

---

### Method 4: In VS Code / Antigravity IDE
- Press **`F5`** or click **Run > Start Debugging** (configured in `.vscode/launch.json`).
- Or right-click [`index.html`](./index.html) and select **"Open with Live Server"**.

---

## ⚠️ Why did you see an error before?
If you clicked the **"Play / Run"** button in VS Code while `index.html` was open, or typed `node index.html`, Node tried to execute HTML tags as JavaScript code, resulting in:
`SyntaxError: Unexpected token '<'`.

HTML files are meant to be viewed in a web browser or served via an HTTP server (`npm start` or `node server.js`), not executed directly by Node.

