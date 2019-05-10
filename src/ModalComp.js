import React, { Component } from 'react'
import './App.css';
import {Button, Modal} from 'react-bootstrap'

class ModalComp extends Component{

    render(){

        const { formState, handleClose } = this.props;

        console.log('insured?', formState.insured)

        console.log('age range?', formState.ageRange)

        let modalDialogue = (formState) => {
            if(formState.insured === 'No'){
                return 'Sorry, no rates available'
            } else if(formState.insured === 'Yes' && formState.ageRange === '34'){
                return 'Coming soon!'
            } else if(formState.insured === 'Yes' && formState.ageRange === '35'){
                return 'Yes, we have great rates available!'
            } else {
                return 'Please complete form'
            }
        };

        return(
            <Modal.Dialog >
                    <p>{modalDialogue(this.props.formState)}</p>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Dialog>
        )
    }
}

export default ModalComp