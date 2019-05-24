import React, { Component } from 'react';

class Form extends Component {
    render(){
        return (
            <div class="row">
            <div class="col s12">
              <div class="row">
                <div class="input-field col s3">
                  <i class="material-icons prefix">textsms</i>
                  <input type="text" id="autocomplete-input" class="autocomplete" />
                  <label for="autocomplete-input">City</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s3">
                  <i class="material-icons prefix">textsms</i>
                  <input type="text" id="autocomplete-input" class="autocomplete" />
                  <label for="autocomplete-input">Country</label>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Form;