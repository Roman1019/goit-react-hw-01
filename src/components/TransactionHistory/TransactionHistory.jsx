import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <section className="section">
      <div className="container">
        <table className={css.tableTaransaction}>
          <thead>
            <tr>
              <th className={css.tableHead}>Type</th>
              <th className={css.tableHead}>Amount</th>
              <th className={css.tableHead}>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr className={css.tableTr} key={item.id}>
                <td className={css.tableText}>{item.type}</td>
                <td className={css.tableText}>{item.amount}</td>
                <td className={css.tableText}>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
