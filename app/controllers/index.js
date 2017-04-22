import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: true,

  emailAddress: '',
  /enables invitation button if email is valid/
  isValid: Ember.computed.match('emailAddress', /^.+@.\..+$/),
  isDisabled: Ember.computed.not('isValid')
});
