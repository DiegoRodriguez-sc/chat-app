import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { startLogin } from "../actions/auth";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
        .email("Email invalido")
        .required("Requerido"),
  password: Yup.string()
        .min(3,"Mas de 3 caracteres")
        .required("Requerido")
});

const LoginPage = () => {

  const dispatch = useDispatch();
  
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(startLogin(values.email,values.password));
        setSubmitting(false);
      }}
    >
      {(formik, isSubmitting) => (
        <Form>
          <div className="form-group form-floating">
            <Field
              type="email"
              name="email"
              id="floatingInputEmail"
              autoComplete="off"
              placeholder="Correo electrónico"
              className={`form-control ${formik.touched.email && formik.errors.email && "is-invalid"}`
              }
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group">
            <Field
              name="password"
              placeholder="Contraseña"
              className={
                formik.touched.password && formik.errors.password
                  ? "form-control is-invalid"
                  : "form-control"
              }
              type="password"
            />

            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
            </button>
          </div>

          <div className="form-group d-flex justify-content-center">
            <Link
              to="/auth/register"
              type="button"
              className="btn btn-success w-70"
            >
              Crear cuenta nueva
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
