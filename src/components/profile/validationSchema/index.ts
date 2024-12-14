import * as yup from "yup";

export const profileSchema = yup.object().shape({
  firstNameGe: yup
    .string()
    .required("სახელი ქართულად სავალდებულოა")
    .min(2, "სახელი ძალიან მოკლეა")
    .max(50, "სახელი ძალიან გრძელია"),
  lastNameGe: yup
    .string()
    .required("გვარი ქართულად სავალდებულოა")
    .min(2, "გვარი ძალიან მოკლეა")
    .max(50, "გვარი ძალიან გრძელია"),
  firstNameEn: yup
    .string()
    .required("Name is required")
    .min(2, "Name is too short")
    .max(50, "Name is too long"),
  lastNameEn: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name is too short")
    .max(50, "Last name is too long"),
  phoneNumber: yup
    .string()
    .required("ტელეფონის ნომერი სავალდებულოა")
    .matches(
      /^[0-9]+$/,
      "ტელეფონის ნომერი უნდა შეიცავდეს მხოლოდ ციფრებს"
    )
    .min(9, "ტელეფონის ნომერი ძალიან მოკლეა")
    .max(15, "ტელეფონის ნომერი ძალიან გრძელია"),
});

export default profileSchema;
