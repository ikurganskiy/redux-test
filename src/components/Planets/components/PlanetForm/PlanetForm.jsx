import React from 'react';
import { Form, Field } from "react-final-form";

import styles from './PlanetForm.module.css'

import { makeTitle } from '../../../../utils';

function FormInput({ name, type = "text" }) {
  return (
    <Field
      name={name}
      render={({ input, meta }) => (
        <div className={styles.formElement}>
          <label className={styles.formElementLabel}>{makeTitle(name)}</label>
          <input {...input} type={type} className={styles.formInput} />
          {meta.touched && (meta.error || meta.submitError) && <span className={styles.formErrorLabel}>{meta.error || meta.submitError}</span>}
        </div>
      )}
    />
  )
}

function validate(values) {
  console.log(values)
  const errors = {}

  if (!values.name) {
    errors.name = "Name should not be empty";
  }

  if (values.rotation_period == null || values.rotation_period <= 0) {
    errors.rotation_period = "Rotation period should be positive";
  }

  if (values.orbital_period == null || values.orbital_period <= 0) {
    errors.orbital_period = "Orbital period should be positive";
  }

  if (values.diameter == null || values.diameter <= 0) {
    errors.diameter = "Planet diameter should be positive";
  }

  if (!values.climate) {
    errors.climate = "Climate should be specified";
  }

  if (!values.gravity) {
    errors.gravity = "Gravity should be specified as based on standard value";
  }

  if (!values.terrain) {
    errors.terrain = "Terrain should have at least one value";
  }

  if (values.surface_water == null || values.surface_water <= 0) {
    errors.surface_water = "Surface water should be positive";
  }

  return errors;
}

function PlanetForm({ formData, onCloseClick, onSubmit }) {
  return (
    <div className={styles.formContainer}>
      <Form
        onSubmit={onSubmit}
        initialValues={formData}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, form, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <span>EDIT PLANET DETAILS</span>
              <button onClick={onCloseClick} className={styles.closeButton} disabled={submitting}>X</button>
            </div>

            <FormInput name="name" />
            <FormInput name="rotation_period" type="number" />
            <FormInput name="orbital_period" type="number" />
            <FormInput name="diameter" type="number" />
            <FormInput name="climate" />
            <FormInput name="gravity" />
            <Field
              name="terrain"
              type="select"
              render={({ select, meta }) => (
                <div className={styles.formElement}>
                  <label className={styles.formElementLabel}>Terrain</label>
                  <select {...select} multiple>
                    <option value="desert">Desert</option>
                    <option value="grasslands">Grasslands</option>
                    <option value="mountains">Mountains</option>
                    <option value="jungle">Jungle</option>
                    <option value="forests">Forests</option>
                    <option value="ocean">Ocean</option>
                    <option value="lakes">Lakes</option>
                    <option value="cityscape">Cityscape</option>
                    <option value="grassy hills">Grassy hils</option>
                    <option value="rainforests">Rainforests</option>
                    <option value="tundra">Tundra</option>
                    <option value="ice caves">Ice caves</option>
                    <option value="swamp">Swamp</option>
                    <option value="gas giant">Gas giant</option>
                  </select>
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
            <FormInput name="surface_water" type="number" />

            <div className={styles.buttonsBlock}>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
                className={styles.actionButton}
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={submitting || pristine || Object.keys(errors).length > 0}
                className={styles.actionButton}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </div>
  )
}

export default PlanetForm