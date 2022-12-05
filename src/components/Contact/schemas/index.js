import * as yup from "yup";
import { i18n } from "../../../Translate/i18n";

export const formSchema = yup.object().shape({
  email: yup.string().email(i18n.t('yupValidation.emailValid')).required(i18n.t('yupValidation.emailRequired')),
  name: yup.string(),
  comments: yup.string().required(i18n.t('yupValidation.commentsRequired'))
})