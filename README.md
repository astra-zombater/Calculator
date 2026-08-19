# 🧮 Dark Grid Calculator

A sleek, minimalistic web-based calculator featuring a **modern dark grid aesthetic** [cite: 1] and a **robust state machine tracker** [cite: 2] to handle flawless sequence processing. 

Built with clean, vanilla JavaScript [cite: 2], custom CSS variables [cite: 1], and smooth interaction layers.

---
 
## ✨ Features

*   **Sleek Dark Theme:** Engineered with modern, high-contrast visual hierarchies (`#121315` and `#1e2024`) featuring card layouts, hover tracks, and custom background layers [cite: 1].
*   **Intelligent Token Parsing:** Automatically segments raw problem strings down to safely isolate decimal point inclusion across complex multivariable sequences [cite: 2].
*   **Operator Protection Safety:** Active state tracking limits inputs to ensure users cannot stack expressions errantly (e.g., automatically transforms `5++3` to `5+3`) [cite: 2].
*   **Floating-Point Safety:** Restricts floating precision lengths up to 8 decimal thresholds to dynamically wipe out standard computer arithmetic calculation anomalies [cite: 2].
*   **Context Isolation Handling:** Custom built-in evaluation layers safely handle paren tracks `( )`, percentage conversions `%`, and immediate clear flags `AC` [cite: 1, 2].

---

## 🛠️ Technology Stack

*   **Frontend Layer:** HyperText Markup Language (HTML5) semantic structures [cite: 1].
*   **Style Framework:** Custom CSS3 Grid Architecture (`display: grid` repetitions tracking 4 distinct target tracks) [cite: 1].
*   **Logical Engine:** Native Vanilla JavaScript (ES6 State Tracking Automata) [cite: 2].

---

## 📂 File Structure

*   `index.html` - The structural markup housing layout card positions and functional click hooks [cite: 1].
*   `style.css` - Custom sleek dark layouts, visual anchor gaps, responsive card frames, and interaction layers [cite: 1].
*   `script.js` - Stateful logical track processing equations, execution controllers, and safety catch matrices [cite: 2].

---

## 🚀 Live Demo

Check out the live app running on GitHub Pages:
👉 **[https://github.com/astra-zombater/calculater](https://astra-zombater.github.io/calculater/)**

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/astra-zombater/calculator.git
   ```
2. **Launch the application:**
   Simply double-click or run your `index.html` file inside any modern workspace browser environment to interact with the device grid [cite: 1].

---

## 🔒 Logic Highlights (State Machine Tracking)

The calculator relies heavily on inline lookback checks (`slice(-1)`) and functional segmentation checks (`.split(/[\+\-\*\/]/)`) to make sure calculations never crash [cite: 2]:

```javascript
// Example: Smarter continuous chaining of calculations
if (['+', '-', '*', '/'].includes(lastChar)) {
    currentExpression = currentExpression.slice(0, -1) + op; // Swaps out operator safely
}
```

Made with 🖤 by Astra Zombater
