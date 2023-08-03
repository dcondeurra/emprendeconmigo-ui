export enum FormFieldType {
  ID = "id",
  LABEL = "label",
  LOCAL_SELECT = "localSelect",
  NOMENCLATOR = "nomenclator",
  NUMBER = "number",
  PASSWORD = "password",
  SEPARATOR = "separator",
  SWITCH = "switch",
  TEXT = "text",
  TEXTAREA = "textArea",
}

export type FormModel = { name: string; fields: Field[] };

export type Field = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    name: string;
    allowClear?: boolean;
    description?: string;
    fieldType?: FormFieldType;
    format?: string;
    items?: { key: React.Key; value: string; label: string }[];
    relationalModel?: string;
    required?: boolean;
    requiredRuleMsg?: string;
  };
