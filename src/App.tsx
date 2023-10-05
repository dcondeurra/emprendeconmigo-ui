import { FieldValues, SubmitHandler } from "react-hook-form";

import { Button, Form, FormFieldType, FormModel, HelloWorld } from ".";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

// const payments: Payment[] = [
//   {
//     id: "728ed52f",
//     amount: 100,
//     status: "pending",
//     email: "m@example.com",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//   },
// ];

// const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "amount",
//     header: "Amount",
//   },
// ];

function App() {
  const initialValues = { name: "", lastName: "" };
  const model: FormModel = {
    fields: [
      {
        name: "name",
        title: "Nombre",
        placeholder: "Nombre",
        required: true,
        fieldType: FormFieldType.TEXT,
        disabled: true,
      },
      {
        name: "lastName",
        title: "Apellido",
        required: true,
      },
    ],
    name: "services",
  };
  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    console.log(values);
  };
  return (
    <div className="space-y-4 p-4">
      <div>Emprende conmigo UI library</div>
      <div>
        <HelloWorld />
        <Button>Button</Button>
        <div>Formulario</div>
        <Form {...{ initialValues, model, onSubmit }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div>Emprende conmigo UI table</div>
      {/* <DataTable columns={columns} data={payments} /> */}
    </div>
  );
}

export default App;
