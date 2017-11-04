import React, { Component } from 'react';

import GoogleMaps from '../../components/googleMaps/GoogleMaps.jsx';
import FormInput from '../../components/formElements/FormInput';
import TextArea from '../../components/formElements/TextArea';

export default class Contact extends Component {
  render() {
    return (

      <div className="_content">
        <h1 className="title-base">Contatos e horários</h1>
        <div className="capitalize">
          <br />
          <h2 className="title-small">
            loja Online
          </h2>

          <p className="_paragraph">
            <span className="_breakout">
              para outras informações, envie sua mensagem através do formulário,
              que responderemos brevemente.
            </span>
            horários de atendimento online: <br />
            <span>
              segunda-feira - sexta-feira: 9:00 AM - 9:00 PM (UTC-03:00 / brasília)
            </span>
            <br />
            <span>
              sábado - domingo: 9:00 AM - 4:00 PM (UTC-03:00 / brasília)
            </span>
          </p>
        </div>

        <div className="form-contatos">
          <form>
            <FormInput name="contact_firstname"
                       label="nome"
                       type="text"
                       minLength={3}
                       message="por favor digite seu primeiro nome"
                       isRequired/>

            <FormInput name="contact_lastname"
                       label="sobrenome"
                       type="text"
                       minLength={3}
                       message="por favor digite seu ultimo nome"
                       isRequired/>

            <FormInput name="contact_email"
                       label="Email"
                       type="email"
                       message="Digite seu email"
                       isRequired/>

            <FormInput name="contact_tel"
                       label="telefone"
                       type="tel"
                       message="digite um telefone para contato"/>

            <TextArea name="contact_message"
                      label="mensagem"
                      minLength={10}
                      isRequired/>

            <div className="form_control">
              <button type="submit" className="btn-other"> ok </button>
            </div>
          </form>
        </div>

        <div className="capitalize">
          <h2 className="title-small">
            loja física
          </h2>

          <p className="_breakout">
            cnpj: 00.000/0001-00 <br />
            r. comendador araújo, 268, loja ca06 - shopping omar
            00000-000, curitiba - paraná, brasil
          </p>
          <p className="_breakout">
            horários de atendimento loja física: <br />
            <span>
              segunda-feira - sexta-feira: 9:00 AM - 8:00 PM (UTC-03:00 / brasília)
            </span>
            <br />
            <span>
              sábado: 9:00 AM - 6:00 PM (UTC-03:00 / brasília)
            </span>
          </p>

        </div>

        <GoogleMaps></GoogleMaps>

      </div>

    );
  }
}
