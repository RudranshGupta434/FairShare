// Dummy data for monthly expenditure (for demo purposes)
const monthlyExpenditure = [
    { category: "Rent", amount: 800 },
    { category: "Groceries", amount: 200 },
    { category: "Utilities", amount: 150 },
    { category: "Entertainment", amount: 100 },
    { category: "Transport", amount: 50 }
  ];
  
  // Expenditure Analysis (simple summary)
  const expenditureChart = document.getElementById('expenditure-chart');
  const expenditureSummary = document.getElementById('expenditure-summary');
  
  function showExpenditureAnalysis() {
    let totalExpenditure = 0;
    let summaryHTML = "<ul>";
  
    monthlyExpenditure.forEach(item => {
      totalExpenditure += item.amount;
      summaryHTML += `<li>${item.category}: $${item.amount}</li>`;
    });
  
    summaryHTML += "</ul>";
    expenditureChart.innerHTML = `<strong>Total Expenditure: $${totalExpenditure}</strong>`;
    expenditureSummary.innerHTML = summaryHTML;
  }
  
  showExpenditureAnalysis();
  
  // Group Payment Splitting
  const groupSplitForm = document.getElementById('group-split-form');
  const groupResult = document.getElementById('group-result');
  
  groupSplitForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const members = document.getElementById('group-members').value.split(',');
    const totalAmount = parseFloat(document.getElementById('total-amount').value);
    const amountPerPerson = (totalAmount / members.length).toFixed(2);
  
    groupResult.innerHTML = `<p>Each member (${members.join(', ')}) pays: $${amountPerPerson}</p>`;
  });
  
  // One-to-One Transaction Management
  const oneToOneForm = document.getElementById('one-to-one-form');
  const transactionHistory = document.getElementById('transaction-history');
  let transactions = [];
  
  oneToOneForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const payer = document.getElementById('payer').value;
    const payee = document.getElementById('payee').value;
    const transactionAmount = parseFloat(document.getElementById('transaction-amount').value);
  
    const transaction = {
      payer,
      payee,
      amount: transactionAmount
    };
  
    transactions.push(transaction);
    updateTransactionHistory();
  });
  
  function updateTransactionHistory() {
    let historyHTML = "<ul>";
  
    transactions.forEach(transaction => {
      historyHTML += `<li>${transaction.payer} paid ${transaction.payee} $${transaction.amount}</li>`;
    });
  
    historyHTML += "</ul>";
    transactionHistory.innerHTML = historyHTML;
  }
  