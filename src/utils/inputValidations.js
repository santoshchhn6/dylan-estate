export const reqired_validation = {
  validation: {
    required: "This field is Empty",
  },
};

export const text_validation = {
  type: "text",
  validation: {
    required: "This field is Empty",
    maxLength: {
      value: 50,
      message: "50 characters max",
    },
  },
};
export const name_validation = {
  name: "name",
  type: "text",
  label: "Your Name",
  placeholder: "Name",
  validation: {
    required: "Please enter your name",
    maxLength: {
      value: 50,
      message: "50 characters max",
    },
  },
};

export const otp_validation = {
  name: "otp",
  type: "text",
  label: "Enter OTP sent on 999-999-9999",
  placeholder: "00000",
  validation: {
    required: "Please enter OTP",
    maxLength: {
      value: 5,
      message: "Must have 5 digit",
    },
    minLength: {
      value: 5,
      message: "Must have 5 digit",
    },
  },
};

export const email_validation = {
  name: "email",
  type: "email",
  label: "Email",
  placeholder: "Email",
  validation: {
    required: "Please enter email address",
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email address",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const username_validation = {
  name: "username",
  type: "text",
  placeholder: "Username",
  validation: {
    required: "Please enter username",
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const password_validation = {
  id: "password",
  name: "password",
  type: "password",
  placeholder: "Password",
  validation: {
    required: "Please enter password",
    minLength: {
      value: 8,
      message: "minimum 8 characters",
    },
  },
};

export const term_validation = {
  type: "checkbox",
  name: "acceptTerms",
  label: "Accept Terms & Conditions",
  validation: {
    required: "Please accept term and condition",
  },
};
