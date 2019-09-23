export const ACCOUNT_FIELDS = {
  Account: {
    Name: {
      formName: 'name',
      isRequired: true,
      maxLength: 10,
      minLength: 2,
      type: 'text'
    },
    Password: {
      formName: 'password',
      isRequired: true,
      maxLength: 6,
      minLength: 2,
      type: 'password'
    },
    Submit: {
      type: 'submit'
    }
  }
};
