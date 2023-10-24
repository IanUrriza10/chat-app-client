import { TextTransformer } from "@/utils";
import { ChangeEvent, useState } from "react";

interface FormState {
  [key: string]: string;
}

const useForm = () => {
  const [formData, setFormData] = useState<FormState>({});

  const onChange = (input: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [input]: e.target.value,
    }));
  };

  const register = (input: string) => {
    return {
      placeholder: new TextTransformer(input).convertUndToSpace().capitalize()
        .text,
      onChange: onChange(input),
      name: input,
      value: formData[input],
    };
  };

  const reset = () => {
    setFormData((prevData) => {
      return Object.keys(prevData).reduce((a, v) => ({ ...a, [v]: "" }), {});
    });
  };

  return { register, reset };
};
export default useForm;
