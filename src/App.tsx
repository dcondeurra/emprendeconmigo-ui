import { FieldValues, SubmitHandler } from "react-hook-form";

import { Button, Form, FormFieldType, FormModel, HelloWorld } from ".";

function App() {
  const initialValues = { name: "", lastName: "" };
  const model: FormModel = {
    fields: [
      {
        name: "name",
        title: "Nombre",
        required: true,
        fieldType: FormFieldType.TEXT,
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
          <Button variant="primary" className="bg-blue-500" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
