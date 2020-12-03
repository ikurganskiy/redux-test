import React from 'react';
import { Form, Field } from "react-final-form";

// name - text
// rotation_period - number
// orbital_period - number
// diameter - number
// climate - text
// gravity - text
// terrain - dropdown
// surface_water - number

function PlanetForm({formData, onCloseClick}) {
  return (
    <div>
      <span>PLANET FORM</span>
      <Form
          onSubmit={this.onSubmit}
          // validate={validate}
          render={({ handleSubmit, submitting, pristine, form }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="name"
                render={({ input, meta }) => (
                  <div>
                    <label>Name</label>
                    <input {...input} type="text"/>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <Field
                name="rotation_period"
                render={({ input, meta }) => (
                  <div>
                    <label>Rotation period</label>
                    <input {...input} type="number"/>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <Field
                name="orbital_period"
                render={({ input, meta }) => (
                  <div>
                    <label>Orbital period</label>
                    <input {...input} type="number"/>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <Field
                name="diameter"
                render={({ input, meta }) => (
                  <div>
                    <label>Diameter</label>
                    <input {...input} type="number"/>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </form>
          )}
        />
      <button onClick={onCloseClick}>close</button>
    </div>
  )
}

export default PlanetForm