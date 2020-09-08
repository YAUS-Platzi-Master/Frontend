import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { urlUser } from '../actions';
import '../assets/styles/container/home.scss';

const Home = (props) => {
  const [form, setValues] = useState({
    long_url: '',
    custom_url: false,
  });

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.urlUser(form);
  };
  return (
    <div className='home_url'>
      <form className='creating_url' onSubmit={handleSubmit}>
        <h3>Sólo ingresa tu URL y clickea "Acortar"</h3>
        <input
          name='long_url'
          className='inputUrl'
          type='text'
          placeholder='url'
          onChange={updateInput}
        />
        <br />
        <button type='submit' className='corte'><span className='btn-text'>Acortar</span></button>
      </form>
      <div className='col-xs-12 info'>
        <h3 className='lighter smaller'>¿Que significa las siglas de YAUS ?</h3>
        <p>Yet Another Url Shortener.</p>
        <h3 className='lighter smaller'>¿Por qué usar un acortador de URL con HTTPS ?</h3>
        <p>Una de las más grandes razones al elegir un acortador con seguridad HTTPS (SSL/TLS) es dar seguridad a los usuarios en el momento de utilizar el link, permitiendo mayor confianza en el transporte a tu sitio web.</p>
        <p>A continuación te contaremos qué son los acortadores de enlaces y qué es HTTPS, para qué sirve y sus ventajas.</p>
        <h3 className='lighter smaller'>Pero, ¿Qué es un acortador de URL o acortador de enlaces o Link Shortener (en inglés) ?</h3>
        <p>Un acortador de URL es una herramienta que convierte enlaces muy largos en otros con un largo menor, disminuyendo la cantidad de caracteres de estos.</p>
        <p>Para este proceso lo que se hace es tomar el enlace o link y reemplazarlo con caracteres aleatorios, alojándolo en un dominio con un nombre más pequeño como YAUS.</p>
        <p>Los acortadores se pusieron de moda con el auge de las redes sociales, siendo su principal impulsor Twitter, ya que esta red social sólo permitía escribir 140 caracteres, por lo que si tenias un enlace o link demasiado largo, se te hacia difícil acompañarlo de un texto que reflejara lo que querías plasmar en la plataforma.</p>
        <h3 className='lighter smaller'>Y, ¿Qué es un página HTTPS ?</h3>
        <p>HTTPS es un protocolo de transferencia de información de forma segura, tiene esta sigla por su nombre en ingles Hypertext Transfer Protocol Secure.</p>
        <p>Al usar el acortador de YAUS, éste toma el enlace que ingresas y lo lleva de forma segura al servidor donde es reducido y devuelto para usarlo, este proceso entre tu navegador y el servidor no puede ser entendido, ya que es cifrado con SSL/TLS, si un atacante tuviera acceso de alguna forma a la comunicación, éste solo vería datos cifrados imposibles de descifrar.</p>
        <h3 className='lighter smaller'>Bueno y para qué sirve el acortador de enlaces YAUS</h3>
        <p>Este te puede permitir reducir el largo de una publicación en tu red social favorita, memorizar un enlace de forma más sencilla, usarlo para marketing digital y otras muchas posibilidades. YAUS es usado a diario por muchas personas de todo el mundo, buscando una forma fácil de reducir sus links sin necesidad de un registro o pagar algo por ello.</p>
        <h3 className='lighter smaller'>Ventajas de usar el acortador YAUS</h3>
        <p>Disminuir el largo de un enlace, reduciendo el número de caracteres.</p>
        <p>En YAUS puedes llevar un historial de tus links acortados.</p>
        <p>YAUS no cobra nada a sus usuarios, entrega un servicio 100% gratis.</p>
        <p>Obtendrás un enlace seguro, YAUS usa HTTPS por lo que el link resultante también tendrá HTTPS.</p>
        <p>Poder usar enlaces más cortos en tus redes sociales favoritas.</p>
        <p>Para quienes hagan campañas de Ads como Google Ads, Facebook Ads u otras al usar un acortador para reducir el enlace a tu producto u oferta te permitirá utilizar ese espacio para describir mejor tu producto.</p>
        <p>Estéticamente los enlaces clásicos contienen números, fechas, datos y símbolos que no son importantes, al usar YAUS esto no será un problema.</p>
        <h3 className='lighter smaller'>Conclusión</h3>
        <p>Los acortadores de enlaces o Link Shortener son grandes herramientas que te ayudan día a día generando de forma más fácil, rápida y gratis los enlaces en los largos óptimos y acordes a las necesidades actuales.</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  urlUser,
};

Home.propTypes = {
  urlUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Home);
