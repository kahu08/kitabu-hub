import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: true,

  emailAddress: '',
  /enables invitation button if email is valid/
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid')

  actions: {
    saveInvitation() {
      alert('saving of the following email is in progress: ${this.get('
        emailAddress ')}');
      this.set('responseMessage', 'Thank you! Email has been saved: ${this.get('
        emailAddress ')}');
      this.set('emailAddress', '');
    }
  }
});
