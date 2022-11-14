import React from "react"
import Whatsapp from "../../images/whatsapp.png"
import Instagram from "../../images/instagram.png"
//import Site from "../../images/site.png"
import Profile from "../../images/profile.png"
import Zoom from "../../images/zoom.png"
import NA from "../../images/nalogo.png"

//import WhatsAppButton from "../WhatsAppButton"

export default function Content() {
  return (
    <>
      <div
        id="wrapper"
        className="container mb-2 animate__animated animate__fadeIn"
      >
        <div className="row">
          <div id="block-1" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="box-1 box-content_primary_1  ">
              <div className="img-profile-center">
                <div id="main-box">
                  <h1
                    className="text-center"
                    style={{
                      letterSpacing: "-0.065625rem",
                      width: "100%",
                      fontSize: "2.5em",
                      lineHeight: "1.25",
                      color: "#182E68",
                      fontWeight: "600",
                    }}
                  >
                    Grupo Copacabana de Narcóticos Anônimos
                  </h1>
                  <br />
                  <h3
                    style={{
                      letterSpacing: "-0.065625rem",
                      width: "100%",
                      fontSize: "2.5em",
                      lineHeight: "1.25",
                      color: "rgba(40,40,43,0.6)",
                      fontWeight: "500",
                    }}
                  >
                    Reunião Hibrida (Presencial / Online)
                    <br />
                    <small style={{ fontWeight: "500" }}>
                      DIA 26/11/22 17:30 AS 19:30{" "}
                    </small>
                  </h3>
                  <img
                    className="img-profile img-thumbnail"
                    src={Profile}
                    alt="Foto perfil"
                  />
                  <div className="container" style={{}}>
                    <p
                      className="text-center"
                      style={{
                        letterSpacing: "-0.021875rem",
                        width: "100%",
                        fontSize: "0.8em",
                        lineHeight: 1.5,
                        color: "rgba(0, 0, 0, 0.4)",
                        fontWeight: "600",
                        textAlign: "justify",
                      }}
                    ></p>
                    <p
                      className="text-center"
                      style={{
                        letterSpacing: "-0.021875rem",
                        width: "100%",
                        fontSize: "0.8em",
                        lineHeight: 1.5,
                        color: "#5C5C5C",
                        fontWeight: "600",
                        textAlign: "",
                        opacity: "0.8",
                      }}
                    ></p>
                    <hr className="solid"></hr>
                  </div>

                  <div className="social-icons">
                    <a
                      className="btn btn-services mb-1 mt-2"
                      href="https://us04web.zoom.us/j/3776684337"
                      target="_blank"
                      title="Zoom"
                      alt="Zoom"
                    >
                      <img
                        className="animate__animated animate__heartBeat"
                        src={Zoom}
                        style={{ marginRight: "" }}
                        width="32"
                        height="32"
                      />
                      <span className="animate__animated animate__heartBeat">
                        Acesse a Reunião pelo aplicativo Zoom<br/>
                        ID: 377 668 4337 Senha: 000000
                      </span>
                    </a>
                    <p
                      className="text-center mt-4"
                      style={{
                        letterSpacing: "-0.021875rem",
                        width: "100%",
                        fontSize: "0.8em",
                        lineHeight: 1.5,
                        color: "#5C5C5C",
                        fontWeight: "600",
                        textAlign: "",
                        opacity: "0.8",
                        marginTop: "2rem",
                      }}
                    >
                     
                    </p>

                    {/*} <a
                      className="btn btn-services mb-1"
                      href="https://www.instagram.com/alcinir_terapeuta/"
                      target="_blank"
                      title="Instagram"
                      alt="Instagram"
                    >
                      <img
                        className="animate__animated animate__heartBeat"
                        src={Instagram}
                        style={{ marginRight: "" }}
                        width="32"
                        height="32"
                      />
                      <span className="">Instagram</span>
                    </a>
                    <a
                      className="btn btn-services mb-1"
                      href="tel:+5521995501309"
                      target="_blank"
                      title="Telefone"
                      alt="Telefone"
                    >
                      <img
                        className="animate__animated animate__heartBeat"
                        src={Phone}
                        style={{ opacity: "0.5" }}
                        width="28"
                        height="28"
                      />
                      <span className="">Ligar</span>
                    </a>

                    {/* <a
                      className="btn btn-services mb-1"
                      href="https://ocariocaweb.gatsbyjs.io/"
                      target="_blank"
                      title="Site"
                      alt="Site"
                    >
                      <img
                        className="animate__animated animate__heartBeat"
                        src={Site}
                        style={{ marginRight: "" }}
                        width="32"
                        height="32"
                      />
                      <span className="">Website</span>
                    </a>

                    <a
                      className="btn btn-services mb-1"
                      href="https://nubank.com.br/pagar/15ajnc/muKBO0sUBV"
                      target="_blank"
                    >
                      <img
                        className="animate__animated animate__heartBeat"
                        src={Pix}
                        style={{ marginRight: "" }}
                        width="42"
                      />

                      <span className="">Pagamento</span>
                    </a>*/}
                  </div>
                  <p
                    className="text-center mt-4"
                    style={{
                      letterSpacing: "-0.021875rem",
                      width: "100%",
                      fontSize: "0.8em",
                      lineHeight: 1.5,
                      color: "#5C5C5C",
                      fontWeight: "600",
                      textAlign: "",
                      opacity: "0.8",
                      marginTop: "2rem",
                    }}
                  >
                      <img src={NA}/>
                    <br />
                    NS. DE COPACABANA, 435 / 913 - Tel: 2543-5015
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
