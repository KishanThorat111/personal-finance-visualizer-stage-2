Here is your **updated `README.md`** for **Stage 2** of the Personal Finance Visualizer — with all improvements documented and ready to push in your new Stage 2 GitHub repo.

---

```markdown
# 💸 Personal Finance Visualizer — Stage 2

A modern, responsive full-stack web application to **track personal expenses**. Built with **Next.js 14**, **MongoDB**, **Tailwind CSS**, **shadcn/ui**, **Recharts**, and animated with **Framer Motion** — it offers a sleek interface to manage transactions and visualize spending.

---

## 🚀 Features

### ✅ Stage 1: Basic Transaction Tracking

* ➕ Add / ✏️ Edit / ❌ Delete transactions (amount, date, description)
* 📃 List view of recent transactions
* 📊 Monthly expenses bar chart
* ✅ Form validation with error states
* 🌙 Dark mode + responsive UI
* 🔔 Toast notifications using `sonner`

### 🆕 Stage 2: Dashboard + Visual Analytics

* 🧾 **Category-based tagging** of transactions
* 🥧 **Top 10 Category-wise Expense Pie Chart** using `Recharts`
* 💠 Glassmorphism design with rounded cards & hover tooltips
* 🧮 Dashboard summary cards (Total, Most Recent)
* 🎯 Responsive layout improvements with better section separation
* 🧠 Hover-based tooltips and better font scaling for large data
* 🧊 Cards prepared for Stage 3 integration

> ✅ Fully functional and deployed live!

---

## 🌐 Live Demo

🔗 [Live App on Vercel](https://your-vercel-stage2-link.vercel.app)

📦 [GitHub Repository (Stage 2)](https://github.com/KishanThorat111/personal-finance-visualizer-stage2)

---

## 🧠 Tech Stack

![License](https://img.shields.io/github/license/KishanThorat111/personal-finance-visualizer-stage2?style=flat-square)
![Next.js](https://img.shields.io/badge/Built%20with-Next.js-000?logo=nextdotjs&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/UI-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-4EA94B?logo=mongodb&logoColor=white&style=flat-square)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&style=flat-square)
![Stage](https://img.shields.io/badge/Stage-2-blue?style=flat-square)

| Tech                | Usage                                    |
| ------------------- | ---------------------------------------- |
| **Next.js**         | Full-stack React framework               |
| **MongoDB**         | NoSQL database with Mongoose ORM         |
| **Tailwind CSS**    | Utility-first styling                    |
| **shadcn/ui**       | Styled components with accessibility     |
| **Framer Motion**   | Smooth component animations              |
| **Recharts**        | Interactive charting for expense visuals |
| **React Hook Form** | Simplified form handling + validation    |
| **Lucide Icons**    | Clean icons for actions                  |
| **Sonner**          | Toast notifications                      |

---

### 📊 Dashboard Charts & Summary Cards

| Component            | Description                                              |
|----------------------|----------------------------------------------------------|
| **MonthlyChart**     | Bar chart of daily expenses in selected month            |
| **CategoryPieChart** | Pie chart of top 10 categories with percent + tooltips   |
| **DashboardSummary** | Card with Total Expenses, Most Recent, and More          |

---

## 🧩 Project Structure

```

personal-finance-visualizer/
├── app/
│   ├── api/
│   │   └── transactions/route.ts       // POST + GET
│   │   └── transactions/\[id]/route.ts // PATCH + DELETE
│   └── page.tsx                       // Dashboard
├── components/
│   ├── TransactionForm.tsx
│   ├── TransactionList.tsx
│   ├── MonthlyChart.tsx
│   ├── DashboardSummary.tsx
│   ├── CategoryPieChart.tsx
│   └── ui/toaster.tsx
├── lib/categories.ts
├── lib/mongo.ts
├── models/Transaction.ts
├── .env.local

````

---

## ⚙️ Setup & Installation

### ✅ Step 1: Clone the repo

```bash
git clone https://github.com/KishanThorat111/personal-finance-visualizer-stage2.git
cd personal-finance-visualizer-stage2
````

### ✅ Step 2: Install dependencies

```bash
npm install
```

### ✅ Step 3: Setup MongoDB

Create `.env.local` in the root:

```env
MONGODB_URI="your_mongodb_connection_string"
```

### ✅ Step 4: Run the app

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📅 Development Timeline & Commit Log

```bash
git commit -m "feat: added category field to transactions and category list"
git commit -m "feat: category-based expense pie chart with top 10 categories"
git commit -m "style: applied glassmorphism UI to pie chart and dashboard"
git commit -m "fix: responsive issues for long category names and label overflows"
git commit -m "feat: dashboard summary card showing total and recent transactions"
git commit -m "chore: reorganize layout to separate pie chart from monthly chart"
git commit -m "refactor: fine-tune pie chart size, layout, and hover tooltips"
git commit -m "style: improved dark mode and UI consistency"
```

---

## 🧪 Coming Soon in Stage 3

* 📦 Budget planning card
* 📈 Savings vs Spending line chart
* 🧠 AI suggestions for overspending
* 🔍 Search and filter system
* 🔧 Settings and preferences card

---

## 📄 License

MIT License © 2025 [Kishan Thorat](https://github.com/KishanThorat111)

---

## 🤝 Connect

💼 [LinkedIn](https://linkedin.com/in/yourprofile)
💻 [GitHub](https://github.com/KishanThorat111)

---

> Built with ❤️ using Next.js, Tailwind, MongoDB, and Recharts

```
