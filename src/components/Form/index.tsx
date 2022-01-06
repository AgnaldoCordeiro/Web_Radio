import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "./styles.module.scss";
import { TextareaAutosize } from "@material-ui/core";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup.string("Enter you Name").required("Name is required"),
  telefone: yup.string("Enter your telefone").required("Telefone is required"),
});
export function FormularioContato() {
  const formik = useFormik({
    initialValues: {
      email: "",
      telefone: "",
      name: "",
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
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="telefone"
          name="telefone"
          label="Telefone"
          type="text"
          value={formik.values.telefone}
          onChange={formik.handleChange}
          error={formik.touched.telefone && Boolean(formik.errors.telefone)}
          helperText={formik.touched.telefone && formik.errors.telefone}
        />
        <TextareaAutosize
          maxRows={500}
          aria-label="maximum height"
          placeholder="Deixe sua Menssagem"
          defaultValue=""
          style={{ width: 1000, height: 100 }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
