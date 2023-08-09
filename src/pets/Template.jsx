import React, { useState, useEffect } from "react";

import "../App.css";

function Template({
  profileImage,
  name,
  race,
  owner,
  description,
  vaccines,
  observation,
  whatsappNumber,
  whatsappMessage,
  socialMedia,
}) {
  const encodedMessage = encodeURIComponent(whatsappMessage); // Codificar el mensaje para la URL
  return (
    <div className="App">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <h1 className="text-white mb-3">
                catDog Perfil <i className="bi bi-qr-code"></i>
              </h1>
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src={profileImage}
                      className="rounded-circle img-fluid shadow"
                      style={{ width: "200px" }}
                      alt="Profile Avatar"
                    />
                  </div>
                  <h4 className="mb-1">Hola, soy {name}</h4>
                  <h6 className="text-muted">{race}</h6>
                  <p className="text-muted mt-3 shado">{description}</p>
                  {/* Data General */}
                  <div
                    className="accordion accordion-flush mb-3"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Últimas vacunas
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div className="row pt-1">
                            <div className="col-md-12 d-flex">
                              <div className="w-50">
                                <h6>Fecha</h6>
                                {vaccines.map((vaccine, index) => (
                                    <p key={index} className="text-muted">
                                        {vaccine.date}
                                    </p>
                                ))}
                              </div>
                              <div className="w-50">
                                <h6>Vacuna</h6>
                                {vaccines.map((vaccine, index) => (
                                    <p key={index} className="text-muted word-wrap">
                                        {vaccine.substance}
                                    </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Observaciones
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">{observation}</div>
                      </div>
                    </div>
                  </div>
                  <h6>
                    Contacta a mi humano <br />
                    <span className="fs-5 shado">{owner}</span>
                  </h6>
                  <div className="container mt-3">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-auto">
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`} // Generar la URL con número y mensaje
                          className="btn btn-outline-custom"
                          target="_blank"
                        >
                          <i className="bi bi-whatsapp fs-3"></i>
                        </a>
                      </div>
                      <div className="col-auto">
                        <a
                          href={socialMedia}
                          className="btn btn-outline-custom"
                          target="_blank"
                        >
                          <i className="bi bi-instagram fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <footer className="my-4">
                      <ul className="nav justify-content-center border-bottom pb-3 mb-3"></ul>
                      <p className="text-center text-muted">
                        © 2023 Creado por{" "}
                        <a href="https://www.instagram.com/dimebruce" 
                          target="_blank">
                          dimebruce
                        </a>{" "}
                      </p>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Template;
