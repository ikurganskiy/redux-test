import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import Modal from 'react-modal';

import styles from './Planets.module.css';

import Grid from "../Grid";
import PlanetForm from './components/PlanetForm';

import { fetchPlanets } from "../../store/actions";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)"
  }
};

function Planets({ fetchPlanets, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(undefined)

  const openModal = useCallback((row) => {
    const {
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water
    } = row

    setFormData({
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain: terrain.split(', '),
      surface_water
    })
    setIsOpen(true)
  }, [setIsOpen])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onSubmit = useCallback(async (values) => {
    console.log('submitting values:', values)
    const errors = await new Promise(resolve => setTimeout(() => resolve({
      name: "Some server side error message"
    }), 1000))

    if (!errors) {
      closeModal()
    }
    else {
      return errors
    }
  }, [closeModal])

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  return (
    <div className={styles.container}>
      <h1>Star Wars Planets</h1>
      <Grid data={data} onEditDetails={openModal} />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        appElement={document.querySelector('#modal')}
        style={customStyles}
      >
        <PlanetForm onCloseClick={closeModal} formData={formData} onSubmit={onSubmit} />
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {
    planets: { header, planets, actions },
  } = state;
  return { data: { header, values: planets, actions } };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
