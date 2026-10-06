# MAHARent

**MAHARent** es una plataforma **SaaS + Marketplace de renting de vehículos** desarrollada como proyecto dentro de VISUAL.

El objetivo principal de MAHARent es conectar a **empresas de renting** con **clientes** a través de una plataforma web en la que las empresas pueden gestionar su flota y publicar sus vehículos, mientras que los clientes pueden consultar el catálogo disponible y realizar solicitudes de renting.

La plataforma busca centralizar en un único entorno la gestión de vehículos, las publicaciones y las solicitudes de renting.

---

## 🚗 ¿Qué es MAHARent?

MAHARent está planteado como una solución digital para empresas dedicadas al renting de vehículos.

Las empresas disponen de un **panel de gestión** desde el que pueden administrar su flota, introducir la información de cada vehículo, establecer sus condiciones de renting y decidir qué vehículos se publican en el Marketplace.

Por otra parte, los clientes disponen de un **Marketplace público** donde pueden consultar los vehículos disponibles, conocer sus características y condiciones y solicitar un renting.

El flujo principal de la plataforma es:

```text
Empresa
   ↓
Registra sus vehículos
   ↓
Añade información y fotografías
   ↓
Establece precio y condiciones
   ↓
Publica el vehículo
   ↓
Cliente encuentra el vehículo
   ↓
Consulta la información
   ↓
Realiza una solicitud de renting
   ↓
Empresa gestiona la solicitud
   ↓
Renting activo
```

La idea general de MAHARent es, por tanto, conectar la **gestión interna de las empresas de renting** con un **Marketplace accesible para los clientes**.

---

## 🎯 Objetivos del proyecto

Los principales objetivos de MAHARent son:

* Digitalizar la gestión de vehículos de las empresas de renting.
* Centralizar la información de la flota.
* Facilitar la publicación de vehículos.
* Crear un Marketplace especializado en renting.
* Permitir a los clientes consultar vehículos y sus condiciones.
* Facilitar el envío y gestión de solicitudes de renting.
* Proporcionar una interfaz sencilla y clara tanto para empresas como para clientes.
* Ofrecer una plataforma preparada para futuras ampliaciones.

---

## 🏢 Panel de empresa

Las empresas de renting disponen de un espacio privado desde el que pueden gestionar su actividad dentro de MAHARent.

Entre las principales acciones se encuentran:

* Registrar la empresa.
* Gestionar los datos de la empresa.
* Gestionar los vehículos de la flota.
* Crear nuevos vehículos.
* Editar la información de los vehículos.
* Añadir fotografías.
* Establecer el precio mensual.
* Indicar la disponibilidad.
* Establecer la duración del renting.
* Publicar vehículos en el Marketplace.
* Gestionar los vehículos publicados.
* Consultar las solicitudes recibidas.
* Gestionar los rentings activos.
* Consultar cuánto tiempo lleva cada vehículo en renting.

De esta forma, el panel funciona como el centro de gestión de la empresa dentro de MAHARent.

---

## 🚘 Gestión de vehículos

Cada empresa puede administrar los vehículos que forman parte de su flota.

La información de un vehículo puede incluir:

* Marca y modelo.
* Información general.
* Descripción.
* Fotografías.
* Precio mensual.
* Disponibilidad.
* Duración del renting.
* Condiciones del renting.

Los vehículos pueden mantenerse dentro de la gestión privada de la empresa o publicarse en el Marketplace para que los clientes puedan consultarlos.

---

## 🛒 Marketplace

El Marketplace constituye la parte pública de MAHARent.

En él se muestran los vehículos publicados por las diferentes empresas de renting.

Los clientes pueden:

* Consultar el catálogo de vehículos.
* Ver los vehículos disponibles.
* Consultar sus características.
* Visualizar fotografías.
* Consultar el precio mensual.
* Consultar la disponibilidad.
* Consultar la duración del renting.
* Consultar las condiciones.
* Acceder a la ficha individual de un vehículo.
* Realizar una solicitud de renting.

Cada vehículo cuenta con una ficha propia con toda la información necesaria para que el cliente pueda conocer la oferta antes de realizar una solicitud.

---

## 📩 Solicitudes de renting

MAHARent permite que los clientes interesados en un vehículo puedan enviar una solicitud de renting.

Las solicitudes quedan vinculadas al vehículo y a la empresa correspondiente.

Desde su panel, la empresa puede:

* Recibir solicitudes.
* Consultar las solicitudes.
* Gestionar las solicitudes.
* Consultar los vehículos asociados.
* Gestionar los rentings activos.

Esto permite conectar directamente la oferta publicada en el Marketplace con la gestión interna de la empresa.

---

## 📊 Gestión de rentings

Una vez iniciado un renting, la empresa puede realizar su seguimiento desde el panel.

La información disponible permite consultar:

* Vehículos actualmente en renting.
* Estado de los vehículos.
* Tiempo que lleva cada vehículo en renting.

De esta manera, la empresa puede tener una visión general de la situación de su flota y de sus vehículos actualmente alquilados.

---

## 👤 Tipos de usuario

MAHARent diferencia principalmente entre dos perfiles:

### Empresa de renting

Utiliza MAHARent como herramienta de gestión.

Puede:

* Gestionar su perfil.
* Gestionar su flota.
* Crear vehículos.
* Editar vehículos.
* Publicar vehículos.
* Gestionar publicaciones.
* Recibir solicitudes.
* Gestionar rentings.

### Cliente

Utiliza MAHARent principalmente desde el Marketplace.

Puede:

* Explorar vehículos.
* Consultar sus características.
* Consultar precios y condiciones.
* Consultar disponibilidad.
* Acceder a las fichas de vehículos.
* Solicitar un renting.

---

## 🎨 Identidad visual

La identidad visual de MAHARent está planteada para transmitir **seguridad, seriedad y garantía**.

La paleta definida para la aplicación está compuesta por:

| Color            | Uso                                             |
| ---------------- | ----------------------------------------------- |
| **Azul marino**  | Color principal y elementos de máxima jerarquía |
| **Azul medio**   | Elementos secundarios, fondos e iconos          |
| **Ámbar**        | Botones, precios y disponibilidad               |
| **Gris pizarra** | Textos e iconos secundarios                     |
| **Gris claro**   | Fondos, tarjetas y elementos base               |

La selección de colores se realizó teniendo en cuenta la teoría del color y buscando diferenciar la identidad de MAHARent respecto a otras empresas del sector.

---

## 🖥️ Estructura general de la plataforma

MAHARent se divide conceptualmente en dos grandes áreas:

```text
                    MAHARent
                       │
          ┌────────────┴────────────┐
          │                         │
     Marketplace              Panel Empresa
          │                         │
          │                    Gestión de flota
          │                    Gestión publicaciones
          │                    Solicitudes
          │                    Rentings
          │
     Catálogo
          │
     Ficha vehículo
          │
     Solicitud renting
```

Esta separación permite que cada tipo de usuario tenga una experiencia adaptada a sus necesidades.

---

## 🧩 Principales pantallas

Entre las pantallas principales previstas para la aplicación se encuentran:

### Públicas

* Página de inicio.
* Marketplace.
* Catálogo de vehículos.
* Ficha de vehículo.
* Login.
* Registro.

### Área de empresa

* Dashboard de empresa.
* Perfil de empresa.
* Gestión de vehículos.
* Crear vehículo.
* Editar vehículo.
* Gestión de publicaciones.
* Solicitudes de renting.
* Rentings activos.
* Configuración del perfil.

---

## 🛠️ Tecnologías

> Esta sección puede actualizarse conforme avance el desarrollo del proyecto.

El proyecto está planteado como una aplicación web con una arquitectura orientada a separar:

* **Frontend:** interfaz y experiencia de usuario.
* **Backend:** lógica de negocio y API.
* **Base de datos:** almacenamiento de usuarios, empresas, vehículos, publicaciones y solicitudes.

La tecnología concreta utilizada en cada parte podrá documentarse aquí conforme se establezca definitivamente durante el desarrollo.

---

## 📁 Organización del proyecto

Una posible organización del proyecto es:

```text
VISUAL/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── styles/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── services/
│
├── database/
│
├── docs/
│
└── README.md
```

La estructura podrá adaptarse a la arquitectura definitiva utilizada durante el desarrollo.

---

## 🚀 Estado del proyecto

MAHARent se encuentra en fase de desarrollo.

Actualmente se está trabajando en la definición de:

* Funcionalidades.
* Arquitectura de la aplicación.
* Diseño de la interfaz.
* Estructura de las diferentes pantallas.
* Gestión de empresas.
* Gestión de vehículos.
* Marketplace.
* Solicitudes de renting.
* Gestión de rentings.
* Identidad visual.

Las funcionalidades podrán evolucionar durante las diferentes fases del proyecto.

---

## 📌 Resumen

**MAHARent** es un SaaS + Marketplace especializado en renting de vehículos que permite a las empresas gestionar su flota y publicar vehículos, mientras que los clientes pueden descubrir vehículos disponibles y solicitar un renting.

El proyecto busca unir en una única plataforma la **gestión empresarial** y la **oferta pública de vehículos**, simplificando tanto el trabajo de las empresas como el proceso de búsqueda y solicitud para los clientes.

```text
MAHARent
   │
   ├── Empresas
   │    ├── Perfil
   │    ├── Vehículos
   │    ├── Publicaciones
   │    ├── Solicitudes
   │    └── Rentings
   │
   └── Marketplace
        ├── Catálogo
        ├── Vehículos
        ├── Información
        ├── Condiciones
        └── Solicitudes
```

**VISUAL — MAHARent**
*SaaS + Marketplace para la gestión y comercialización de vehículos de renting.*
