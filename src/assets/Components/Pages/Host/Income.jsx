import React from 'react'
import IncomeGraph from '../../Images/IncomeGraph.png'
const Income = () => {
  const transactionsData = [
    { amount: 720, date: "Dec 15, '23", id: "1" },
    { amount: 560, date: "Dec 12, '23", id: "2" },
    { amount: 980, date: "Dec 3, '23", id: "3" },
]
  return (
    <section className="host-income">
            <h1>Income</h1>
            <p>
                Last <span>30 days</span>
            </p>
            <h2>$2,260</h2>
            <img
                className="graph"
                src={IncomeGraph}
                alt="Income graph"
            />
            <div className="info-header">
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
  )
}

export default Income