import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import {API} from 'aws-amplify';
import config from "../config";
import {s3Upload} from '../lib/awsLib';
import "./Signup.css";

export default class Newnote extends Component {
  constructor(props) {
    super(props);
    this.file = null;// using a class property because file does not change or impact rendering
    this.state = {
      isLoading: null,
      content: ""
    };
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleFileChange = event => {
    this.file = event.target.files[0];
  };

  handleSubmit = async event => {
    event.preventDefault();

    if (this.file && this.file.size > config.MAX_ATTACHEMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHEMENT_SIZE /
          1000} MB.`
      );
      return;
    }
    this.setState({ isLoading: true });
    try{
        const attachment = this.file ? await s3Upload(this.file) : null;
        const response = await this.createNote({content: this.state.content, attachment});
        console.log('response', response)
        this.props.history.push('/');
    }catch(e){
        alert(e);
        this.setState({isLoading: false});
    }
  };

  createNote(note){
      return API.post("notes", "/notes", {
          body: note
      });
  }

  render() {
    return (
      <div className="NewNote">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="content">
            <FormControl
              componentClass="textarea"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="file">
          <ControlLabel>Attachment</ControlLabel>
            <FormControl              
              type="file"
              onChange={this.handleFileChange}
            />
          </FormGroup>

          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Add Note"
            loadingText="Adding your note..."
          />          
        </form>
      </div>
    );
  }
}
