import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "./styles.module.scss";
import TextFieldMask from "../inputs/TextFieldMask/TextFieldMask";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup.string().required("Name is required"),
  telefone: yup.string().required("Telefone is required"),
  mensagem: yup.string().required("Mensagem is required"),
});
export function FormularioContato() {
  const formik = useFormik({
    initialValues: {
      email: "",
      telefone: "",
      name: "",
      mensagem: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.title}>Contato</h1>
      <form onSubmit={formik.handleSubmit} className={styles.FormContainer}>
        <TextField
          variant="outlined"
          fullWidth
          id="outlined-basic"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          variant="outlined"
          fullWidth
          id="outlined-basic"
          name="name"
          label="Name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextFieldMask
          variant="outlined"
          mask={"(99)9.9999-9999"}
          label="Telefone"
          fullWidth
          id="outlined-basic"
          name="telefone"
          type="text"
          value={formik.values.telefone}
          onChange={formik.handleChange}
          error={formik.touched.telefone && Boolean(formik.errors.telefone)}
          helperText={formik.touched.telefone && formik.errors.telefone}
        />
        <TextField
          variant="outlined"
          id="mensagem"
          label="Mensagem"
          multiline
          maxRows={300}
          value={formik.values.mensagem}
          onChange={formik.handleChange}
          error={formik.touched.mensagem && Boolean(formik.errors.mensagem)}
          helperText={formik.touched.mensagem && formik.errors.mensagem}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
