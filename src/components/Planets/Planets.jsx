import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import Modal from 'react-modal';

import "./Planets.css";

import Grid from "../Grid";
import PlanetForm from './components/PlanetForm';

import { fetchPlanets } from "../../store/actions";

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function Planets({ fetchPlanets, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(undefined)

  const openModal = useCallback((row) => {
    setFormData(row)
    setIsOpen(true)
  }, [setIsOpen]) 

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <Grid data={data} onEditDetails={openModal} />
      <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          appElement={document.querySelector('#modal')}
          style={customStyles}
        >
          <PlanetForm onCloseClock={closeModal} formData={formData} />
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
