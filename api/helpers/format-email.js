module.exports = {

  friendlyName: 'Format email',
  description: 'Format email to lower case and remove spaces.',

  inputs: {
    email: {
      type: 'string',
      example: 'myemail@site.com',
      description: 'The email of the user.',
      required: true
    }

  },

  fn: async function (inputs) {
    return inputs.email.toLowerCase().trim();
  },

  exits: {
    success: {
      description: 'All done.',
    },

  }

};
