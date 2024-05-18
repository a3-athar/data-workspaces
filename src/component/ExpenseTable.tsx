import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface ExpenseTableProps {
  tableData: any;
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ tableData }) => {
  const columns = [
    { field: "id", header: "Sl. No." },
    { field: "item", header: "Item" },
    { field: "amount", header: "Amount" },
  ];

  return (
    <div>
      {tableData.length > 0 && (
        <div className="card p-4">
          <div className="p-2">Expense Table : </div>
          <DataTable
            value={tableData}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: "10rem" }}
            size={"small"}
          >
            {columns.map((col, i) => (
              <Column key={col.field} field={col.field} header={col.header} />
            ))}
          </DataTable>
        </div>
      )}
    </div>
  );
};

export default ExpenseTable;
