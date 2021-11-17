import React from "react";

import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { fetchSinToken } from "../helpers/fetch";


  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
          .required("Requerido"),
    email: Yup.string()
          .email("Email invalido")
          .required("Requerido"),
    password: Yup.string()
          .min(3,"Mas de 3 caracteres")
          .required("Requerido"),
    password2: Yup.string()
          .required("Por favor confirma tu contraseña")
          .oneOf([Yup.ref('password'), null], "Las contraseñas no coinciden")
  });

const RegisterPage = ({history}) => {

  return (
    <Formik
    initialValues={{
      name:"",
      email: "",
      password: "",
      password2:""
    }}
    validationSchema={RegisterSchema}
    onSubmit={async(values, { setSubmitting }) => {
      const {name,email, password} = values;
      try{
        const resp = await fetchSinToken("auth/register", {name, email, password}, "POST");
        const body = await resp.json();
        if(body.ok){
          console.log(body.msg);
          history.replace("/auth/login")
        }
      }
      catch(error){
        console.log(error);
      }
      setSubmitting(false);
    }}
  >
    {(formik, isSubmitting) => (
      <Form>
        <div className="form-group">
          <Field
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Nombre y Apellido"
            className={`form-control ${formik.touched.name && formik.errors.name && "is-invalid"}`
            }
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="invalid-feedback">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-group">
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
          <Field
            name="password2"
            placeholder="Confirme contraseña"
            className={
              formik.touched.password2 && formik.errors.password2
                ? "form-control is-invalid"
                : "form-control"
            }
            type="password"
          />

          {formik.touched.password2 && formik.errors.password2 ? (
            <div className="invalid-feedback">{formik.errors.password2}</div>
          ) : null}
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "espere..." : "Registrarte"}
          </button>
        </div>

        <div className="form-group d-flex justify-content-center">
          <Link
            to="/auth/login"
            type="button"
            className="btn btn-success w-70"
          >
            Iniciar sesión
          </Link>
        </div>
      </Form>
    )}
  </Formik>
  );
};

export default RegisterPage;
