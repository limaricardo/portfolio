import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Campo obrigatório"),
  name: yup.string(),
  comment: yup.string().required("Por favor, insira algum comentário antes de enviar.")
})