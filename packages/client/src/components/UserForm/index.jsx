import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createUserAction } from './../../actions';

function UserForm (props) {
  const { createUser } = props;

  const initialUserValues = {
    name: '',
    telNumber: '',
    isBanned: false,
  };
  const submitHandler = (values, formikBag) => {
    createUser(values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
      {formikProps => {
        return (
          <Form>
            <Field name='name' />
            <Field name='telNumber' />
            <button type='submit'>Add</button>
          </Form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createUser: user => {
    dispatch(createUserAction(user));
  },
});

export default connect(null, mapDispatchToProps)(UserForm);
