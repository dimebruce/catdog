import React from "react";
import Template from "./Template";
import { Helmet } from "react-helmet";
import { calculateAge } from "../helpers/calculateAge";

const name = "Archie";
const birthDate = "10-06-2021";
const race = "Mixto";
const gender = "Male"
const owner = "Estefanía Lomelí Penn";
const socialMedia =
  "https://www.instagram.com/eslomelipenn/";
const whatsappNumber = "4433027526";
const profileImage = "/archie.png"; // Ruta de la imagen
const whatsappMessage = `Hola, ${owner}. Te contacto porque encontré a tu perro ${name}.`; // Mensaje personalizado
const observation =
"No tengo problemas de ningún tipo, soy de bajo mantenimiento y muy sociable🤪.";
const vaccines = [
  { date: "08-08-2023", substance: "Giardia" },
  { date: "08-08-2023", substance: "Bordetella" },
  { date: "02-03-2023", substance: "Sextuple" },
  { date: "13-07-2023", substance: "Desparacitante; ONE" },
  // Puedes agregar más objetos de vacuna aquí
];

const Archie = () => {
  const age = calculateAge(birthDate);
  const description = `Soy una alma tranquila y sociable, con ${age} años, pero siempre disfrutando de cada momento. 🐶🏠`;

  return (
    <>
        <Helmet>
            <title>Perfil de {name}</title>
            <meta name="description" content="Toda la información de Archie esta aquí 🐾"/>
            <meta property="og:image" content="/archie.png" />
        </Helmet>
        <Template
        profileImage={profileImage}
        name={name}
        birthDate={birthDate}
        race={race}
        gender={gender}
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

export default Archie;
