import { useState } from "react";
import {BASE_URL} from "../variable";
import styles from "../styles/Requestdemo.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  onChangeRequestDemoCheckBoxInput,
  onChangeRequestDemoInput,
  onSendingRequestDemo,
} from "../redux/3actions/RequestDemoActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Requestdemo() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { RDForm } = useSelector((state) => state.RD);
  console.log(9, RDForm);
  return (
    <>
      <ToastContainer />
      <div className={`container-fluid ${styles.container}`}>
        <ToastContainer />
        <div className="container">
          <div className={styles.title}>Request a DEMO or a QUOTE</div>
          <div className={styles.close} onClick={() => router.back()}>
            <img
              className={styles.buttonClose}
              src="/button_close.svg"
              alt="Card image cap"
            />
          </div>

          <div className={styles.header}>Please complete the form</div>

          <form
            className={styles.form}
            onSubmit={(e) => dispatch(onSendingRequestDemo(e, RDForm))}
          >
            <div className="row">
              <div className="col-12 col-md-6">
                <div className={styles.label}>First Name</div>
                <input
                  type="text"
                  className={styles.input}
                  name="fname"
                  onChange={(e) =>
                    dispatch(
                      onChangeRequestDemoInput(e.target.value, "first_name")
                    )
                  }
                  value={RDForm.first_name.value}
                  style={RDForm.first_name.valid ? {} : { borderColor: "red" }}
                />
                {RDForm.first_name.valid ? null : (
                  <div style={{ color: "red" }}>
                    {RDForm.first_name.validationError}
                  </div>
                )}
              </div>

              <div className="col-12 col-md-6">
                <div className={styles.label}>Last Name:</div>
                <input
                  type="text"
                  className={styles.input}
                  name="lname"
                  onChange={(e) =>
                    dispatch(
                      onChangeRequestDemoInput(e.target.value, "last_name")
                    )
                  }
                  value={RDForm.last_name.value}
                  style={RDForm.last_name.valid ? {} : { borderColor: "red" }}
                />
                {RDForm.last_name.valid ? null : (
                  <div style={{ color: "red" }}>
                    {RDForm.last_name.validationError}
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <div className={styles.label}>Email:</div>
                <input
                  type="email"
                  className={styles.input}
                  name="email"
                  onChange={(e) =>
                    dispatch(onChangeRequestDemoInput(e.target.value, "email"))
                  }
                  value={RDForm.email.value}
                  style={RDForm.email.valid ? {} : { borderColor: "red" }}
                />
                {RDForm.email.valid ? null : (
                  <div style={{ color: "red" }}>
                    {RDForm.email.validationError}
                  </div>
                )}
              </div>

              <div className="col-12 col-md-6">
                <div className={styles.label}>Phone Number:</div>
                <input
                  type="text"
                  className={styles.input}
                  name="phone"
                  onChange={(e) =>
                    dispatch(
                      onChangeRequestDemoInput(e.target.value, "phoneNumber")
                    )
                  }
                  value={RDForm.phoneNumber.value}
                  style={RDForm.phoneNumber.valid ? {} : { borderColor: "red" }}
                />
                {RDForm.phoneNumber.valid ? null : (
                  <div style={{ color: "red" }}>
                    {RDForm.phoneNumber.validationError}
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <div className={styles.label}>Company:</div>
                <input
                  type="text"
                  className={styles.input}
                  name="company"
                  onChange={(e) =>
                    dispatch(
                      onChangeRequestDemoInput(e.target.value, "company")
                    )
                  }
                  value={RDForm.company.value}
                  style={RDForm.company.valid ? {} : { borderColor: "red" }}
                />
                {RDForm.company.valid ? null : (
                  <div style={{ color: "red" }}>
                    {RDForm.company.validationError}
                  </div>
                )}
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 col-md-5">
                <div className={styles.label}>
                  What are you interested in learning more about? Select all
                  that apply.
                </div>
              </div>

              <div className="col-6 col-md-6 pt-3">
                <label className={styles.containerInputCheckbox}>
                  Asset Control
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      dispatch(
                        onChangeRequestDemoCheckBoxInput(
                          e.target.checked,
                          "Asset Control",
                          "interests"
                        )
                      )
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.containerInputCheckbox}>
                  Asset Protection
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      dispatch(
                        onChangeRequestDemoCheckBoxInput(
                          e.target.checked,
                          "Asset Protection",
                          "interests"
                        )
                      )
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.containerInputCheckbox}>
                  Community App
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      dispatch(
                        onChangeRequestDemoCheckBoxInput(
                          e.target.checked,
                          "Community App",
                          "interests"
                        )
                      )
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.containerInputCheckbox}>
                  Parking Management
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      dispatch(
                        onChangeRequestDemoCheckBoxInput(
                          e.target.checked,
                          "Parking Management",
                          "interests"
                        )
                      )
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.containerInputCheckbox}>
                  Option
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      dispatch(
                        onChangeRequestDemoCheckBoxInput(
                          e.target.checked,
                          "Option",
                          "interests"
                        )
                      )
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.containerInputCheckbox}>
                  Option
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      dispatch(
                        onChangeRequestDemoCheckBoxInput(
                          e.target.checked,
                          "Option",
                          "interests"
                        )
                      )
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.containerInputCheckbox}>
                  Option
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      dispatch(
                        onChangeRequestDemoCheckBoxInput(
                          e.target.checked,
                          "Option",
                          "interests"
                        )
                      )
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-md-5">
                <div className={styles.label}>
                  What type of property do you own, operate, build or develop?
                </div>
              </div>
              <div className="col-6 col-md-6 pt-3">
                <label className={styles.containerInputCheckbox}>
                  Residential
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      dispatch(
                        onChangeRequestDemoCheckBoxInput(
                          e.target.checked,
                          "Residential",
                          "property"
                        )
                      )
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.containerInputCheckbox}>
                  Commercial
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      dispatch(
                        onChangeRequestDemoCheckBoxInput(
                          e.target.checked,
                          "Commercial",
                          "property"
                        )
                      )
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.containerInputCheckbox}>
                  Other
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      dispatch(
                        onChangeRequestDemoCheckBoxInput(
                          e.target.checked,
                          "Other",
                          "property"
                        )
                      )
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className={styles.message}>Leave a message:</div>
                <textarea
                  className={styles.textarea}
                  onChange={(e) =>
                    dispatch(
                      onChangeRequestDemoInput(e.target.value, "message")
                    )
                  }
                  value={RDForm.message.value}
                  style={RDForm.message.valid ? {} : { borderColor: "red" }}
                />
                {RDForm.message.valid ? null : (
                  <div style={{ color: "red" }}>
                    {RDForm.message.validationError}
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <button
                  type="submit"
                  onClick={(e) => submitRequest(e)}
                  className={styles.button}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let data = [];
  let catogrisTypes = [];

  await axios
    .get(`${BASE_URL}/categories`)
    .then((response) => {
      data = response.data;
    });
  /*
    await axios
    .get(`${BASE_URL}/request-demos`)
    .then((response) => {
      catogrisTypes = response.data;
    });
  */
  return {
    props: {
      data,
     // catogrisTypes,
    },
  };
}
