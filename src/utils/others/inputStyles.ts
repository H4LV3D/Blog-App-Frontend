export const inputStyles = {
  input: {
    minHeight: "3rem",
    padding: "0.85rem 1.5rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    backgroundColor: "#F1F6EE",
    border: "0px #D0D0D0 solid",
    borderRadius: "1.25rem",
    color: "black",
    "&::placeholder": {
      color: "#7B908B",
      fontSize: "o.85rem",
      // fontWeight: "500",
    },
    "&:focus": {
      border: "1px #15994B solid",
    },
  },
  //   invalid: {
  //     border: "2px red solid",
  //   },
  select: {
    backgroundColor: "#fff",
    border: "1px #000 solid",
    borderRadius: "0.6rem",
    color: "black",

    "&:focus": {
      border: "1px #15994B solid",
    },
  },
  item: {
    fontSize: "1rem",
  },
};

export const inputStyles2 = {
  input: {
    minHeight: "2.5rem",
    padding: "0.85rem 1.5rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    backgroundColor: "#F1F6EE",
    border: "0px #D0D0D0 solid",
    // borderRadius: "1.25rem",
    borderRadius: "0.25rem",
    color: "black",
    "&::placeholder": {
      color: "#7B908B",
      fontSize: "o.85rem",
      // fontWeight: "500",
    },
    "&:focus": {
      border: "1px #15994B solid",
    },
  },
  //   invalid: {
  //     border: "2px red solid",
  //   },
  item: {
    fontSize: "1rem",
  },
};

export const selectInputStyles = {
  input: {
    minHeight: "3rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    width: "100%",
    backgroundColor: "#F1F6EE",
    border: "0px #D0D0D0 solid",
    borderRadius: "1.25rem",
    color: "black",

    "&:focus": {
      border: "1px #15994B solid",
    },
  },
  //   invalid: {
  //     border: "2px red solid",
  //   },
  // dropdown: {
  //   border: "1px rgba(255, 255, 255, 0.08) solid",
  //   backgroundColor: "#181919",
  // },

  item: {
    fontSize: "0.875rem",
    // color: "white",

    "&:hover": {
      backgroundColor: "#262626",
    },

    // Mouse out
    "&:not(:hover)": {
      backgroundColor: "white",
      color: "black",
    },

    // Selected item from mantine select give it a background color
    "&[aria-selected=true]": {
      backgroundColor: "#15994B",
      color: "white",

      "&:hover": {
        backgroundColor: "#15994B",
      },
    },
  },
};

export const selectInputStyles2 = {
  input: {
    minHeight: "3rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    width: "100%",
    backgroundColor: "#F1F6EE",
    border: "0px #D0D0D0 solid",
    borderRadius: "0.5rem",
    color: "black",

    "&:focus": {
      border: "1px #15994B solid",
    },
  },
  //   invalid: {
  //     border: "2px red solid",
  //   },
  // dropdown: {
  //   border: "1px rgba(255, 255, 255, 0.08) solid",
  //   backgroundColor: "#181919",
  // },

  item: {
    fontSize: "0.875rem",
    // color: "white",

    "&:hover": {
      backgroundColor: "#262626",
    },

    // Mouse out
    "&:not(:hover)": {
      backgroundColor: "white",
      color: "black",
    },

    // Selected item from mantine select give it a background color
    "&[aria-selected=true]": {
      backgroundColor: "#15994B",
      color: "white",

      "&:hover": {
        backgroundColor: "#15994B",
      },
    },
  },
};

export const multiSelectInputStyles = {
  searchInput: {
    fontSize: "0.935rem",
  },
  input: {
    minHeight: "52px",
    fontSize: "1rem",
    backgroundColor: "#F1F6EE",
    // border: "1.2px rgba(0, 0, 0, 0.2) solid",
    color: "white",
    border: "0px #D0D0D0 solid",

    "&:focus": {
      border: "1.2px rgba(17, 149, 72, 0.7) solid",
      outline: "none",
    },
  },
  invalid: {
    border: "2px red solid",
  },
  dropdown: {
    // border: "1px rgba(255, 255, 255, 0.08) solid",
    backgroundColor: "#fff",
  },
  value: {
    backgroundColor: "transparent",
    border: "1px #e6e6e6 solid",
    color: "#000",
    fontSize: "0.85rem",
    height: "1.8rem",
    minWidth: "5rem",
    borderRadius: "0.3rem",
  },

  item: {
    fontSize: ".9375rem",
    color: "#646464",

    "&:hover": {
      color: "#000",
      backgroundColor: "#fff",
    },

    // Mouse out
    "&:not(:hover)": {
      backgroundColor: "#fff",
    },

    // Selected item from mantine select give it a background color
    "&[aria-selected=true]": {
      backgroundColor: "#fff",

      "&:hover": {
        backgroundColor: "#F1F6EE",
      },
    },
  },
};

export const dateInputStyles = {
  input: {
    height: "3rem",
    minHeight: "3rem",
    fontSize: "1rem",
    backgroundColor: "#F1F6EE",
    // backgroundColor: "transparent",
    border: "0px #D0D0D0 solid",
    borderRadius: "0.35rem",
    color: "black",

    "&:focus": {
      border: "1px #15994B solid",
    },
  },

  calendar: {
    // border: "1px rgba(255, 255, 255, 0.08) solid",
    // backgroundColor: "#181919",
  },

  item: {
    fontSize: "1rem",
    color: "white",

    // "&:hover": {
    //   backgroundColor: "#262626",
    // },

    // // Mouse out
    // "&:not(:hover)": {
    //   backgroundColor: "#181919",
    // },

    // // Selected item from mantine select give it a background color
    // "&[aria-selected=true]": {
    //   backgroundColor: "rgba(0, 240, 197, 0.3)",

    //   "&:hover": {
    //     backgroundColor: "rgba(0, 240, 197, 0.3)",
    //   },
    // },
  },
  day: {
    "&:focus": {
      backgroundColor: "#15994B",
    },
    "&:hover": {
      backgroundColor: "#15994B",
    },
    "&[aria-selected=true]": {
      backgroundColor: "#15994B",
      color: "white",

      "&:hover": {
        backgroundColor: "#15994B",
      },
    },
  },
};
