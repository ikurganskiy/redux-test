import React, { useCallback } from 'react';
import { Form, Field } from "react-final-form";

import styles from './PlanetForm.module.css'

import { makeTitle } from '../../../../utils';

const terrainValues = [
  "desert",
  "grasslands",
  "mountains",
  "jungle",
  "forests",
  "ocean",
  "lakes",
  "cityscape",
  "grassy hills",
  "rainforests",
  "tundra",
  "ice caves",
  "swamp",
  "gas giant",
]

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

  if (!values.terrain || values.terrain.length === 0) {
    errors.terrain = "Terrain should have at least one value";
  }

  if (values.surface_water == null || values.surface_water <= 0) {
    errors.surface_water = "Surface water should be positive";
  }

  return errors;
}

function PlanetForm({ formData, onCloseClick, onSubmit }) {
  const handleSubmit = useCallback((values) => {
    const { terrain, ...rest } = values;
    onSubmit({ ...rest, terrain: terrain.join(',') })
  }, [onSubmit])

  return (
    <div className={styles.formContainer}>
      <Form
        onSubmit={handleSubmit}
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
              render={({ input, meta }) => {
                return (
                  <div className={styles.formElement}>
                    <label className={styles.formElementLabel}>Terrain</label>
                    <select {...input} multiple>
                      {terrainValues.map(item => (<option key={item} value={item}>{makeTitle(item)}</option>))}
                    </select>
                    {meta.touched && (meta.error || meta.submitError) && <span className={styles.formErrorLabel}>{meta.error || meta.submitError}</span>}
                  </div>
                )
              }}
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