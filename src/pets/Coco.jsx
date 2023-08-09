import React from "react";
import Template from "./Template";
import { Helmet } from "react-helmet";
import { calculateAge } from "../helpers/calculateAge";

const name = "Coco";
const birthDate = "10-02-2012";
const race = "Maltés";
const owner = "Estefanía Lomelí Penn";
const socialMedia =
  "https://www.instagram.com/eslomelipenn/";
const whatsappNumber = "4433027526";
const profileImage = "/coco.png"; // Ruta de la imagen
const whatsappMessage = `Hola, ${owner}. Te contacto porque encontré a tu perro ${name}.`; // Mensaje personalizado
const observation =
"Soy ciega, sufro de alergias y tengo una condición en el corazón.";
const vaccines = [
    { date: "08-08-2023", substance: "Giardia" },
  { date: "08-08-2023", substance: "Bordetella" },
  { date: "02-03-2023", substance: "Sextuple" },
  { date: "13-07-2023", substance: "Desparacitante; ONE" },
  // Puedes agregar más objetos de vacuna aquí
];

const Coco = () => {
  const age = calculateAge(birthDate);
  const description = `Soy tranquila y amigable, tengo ${age} años y algunas alergias, pero eso no me impide disfrutar de la vida. 🐶🏠`;

  return (
    <>
        <Helmet>
            <title>Perfil de {name}</title>
            <meta name="description" content="Toda la información de Coco esta aquí 🐾"/>
            <meta property="og:image" content="/coco.png" />
        </Helmet>
        <Template
        profileImage={profileImage}
        name={name}
        birthDate={birthDate}
        race={race}
        description={description}
        owner={owner}
        socialMedia={socialMedia}
        vaccines={vaccines}
        observation={observation}
        whatsappNumber={whatsappNumber}
        whatsappMessage={whatsappMessage}
        />
    </>
  );
};

export default Coco;
