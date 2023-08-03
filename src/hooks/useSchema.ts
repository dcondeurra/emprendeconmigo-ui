import * as yup from "yup";
import { Field } from "..";

type UseSchemaProps = { fields: Field[] };

export const useSchema = ({ fields }: UseSchemaProps) => {
  let schema = yup.object();

  fields.forEach(({ name, required }) => {
    schema = schema.shape({
      [name]: required
        ? yup
            .string()
            .required(
              typeof required === "string" ? required : "Campo requerido",
            )
        : yup.string(),
    });
  });
  return [schema];
};
