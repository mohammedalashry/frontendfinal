export const RequestDemoIS = {
  RD: [],
  loadingRD: false,

  RDCategories: [],
  loadingRDCategories: false,

  RDForm: {
    first_name: {
      value: "",
      valid: false,
      validation: {
        required: true,
      },
      validationError: "Required.",
      touched: false,
    },
    last_name: {
      value: "",
      valid: false,
      validation: {
        required: true,
      },
      validationError: "Required.",
      touched: false,
    },
    email: {
      value: "",
      valid: false,
      validation: {
        required: true,
        isEmail: true,
      },
      validationError: "Required must be valid Email.",
      touched: false,
    },
    phoneNumber: {
      value: "",
      valid: false,
      validation: {
        required: true,
        minLength: 11,
      },
      validationError: "Required must be at least 11 Nums.",
      touched: false,
    },
    company: {
      value: "",
      valid: false,
      validation: {
        required: true,
      },
      validationError: "Required.",
      touched: false,
    },
    interests: {
      value: [],
    },
    property: {
      value: [],
    },
    message: {
      value: "",
      valid: false,
      validation: {
        required: true,
      },
      validationError: "Required.",
      touched: false,
    },
  },
  loadingSendingRD: false,
};
