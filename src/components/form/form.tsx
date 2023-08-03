import { PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "./input";

import { useSchema } from "../../hooks";
import { getValueForIndexer } from "../../utils";

import { Field, FormFieldType, FormModel } from "./interfaces";

type FormProps = PropsWithChildren<{
  initialValues: FieldValues;
  model: FormModel;
  onSubmit: SubmitHandler<FieldValues>;
}>;
export function Form({ children, initialValues, model, onSubmit }: FormProps) {
  const [schema] = useSchema({ fields: model.fields });
  type Schema = yup.InferType<typeof schema>;

  const methods = useForm<Schema>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: initialValues,
  });

  const wrapperField = (field: Field) => {
    return {
      [FormFieldType.TEXT]: <Input key={field.name} {...field} />,
    };
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="space-y-4"
          name={model.name}
          onSubmit={methods.handleSubmit(onSubmit)}
          noValidate={true}
        >
          {model.fields.map((f) => {
            const { type = FormFieldType.TEXT } = f;
            return getValueForIndexer(wrapperField(f), type);
          })}
          {children}
        </form>
      </FormProvider>
    </>
  );
}
