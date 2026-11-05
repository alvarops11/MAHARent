# 2. ANÁLISIS DEL CONTEXTO Y VIABILIDAD

El presente capítulo recoge el trabajo desarrollado durante el segundo sprint del proyecto MAHARent, cuyo objetivo ha sido analizar el contexto en el que operará la plataforma y demostrar su viabilidad desde las perspectivas técnica, económica y legal. El sprint se ha gestionado conforme al marco de trabajo Scrum [1], de modo que cada uno de los apartados que componen este capítulo se corresponde con una o varias tareas del *Sprint Backlog*, registradas y trazadas en el tablero de GitHub Projects del equipo [2].

## 2.1. Sector profesional y perfil de usuarios

Antes de definir requisitos o elegir tecnologías es necesario conocer el entorno productivo en el que operará MAHARent y a las personas que interactuarán con ella. Este apartado caracteriza el sector de la movilidad flexible y segmenta a los usuarios en perfiles representativos que guiarán las decisiones de diseño de la interfaz.

### 2.1.1. Caracterización del sector

MAHARent se sitúa en el sector del **alquiler, suscripción y renting de vehículos**, un ámbito que combina actividad financiera (arrendamiento a medio y largo plazo), actividad turística y de servicios (alquiler por días o *rent-a-car*) y, cada vez más, servicios digitales de movilidad (suscripción y micro-renting). Según la Asociación Española de Renting de Vehículos, el renting mantiene una tendencia de crecimiento sostenido en matriculaciones [3], y la prensa especializada señala que en 2026 el parque de vehículos en renting en España ha superado el millón de unidades [4]. Este crecimiento ya no se explica solo por las grandes flotas corporativas: particulares y autónomos se han convertido en un motor relevante de la demanda [5].

En el plano de la digitalización, los informes de consultoría internacional describen un desplazamiento de la demanda desde la propiedad del vehículo (*ownership*) hacia modelos basados en el uso (*usership*), como el *Vehicle-as-a-Service* [6] o la suscripción flexible de vehículos [7]. Este cambio genera necesidades tecnológicas concretas: contratación y pago íntegramente en línea, visibilidad de la disponibilidad en tiempo real, experiencias de compra comparables a las del comercio electrónico [8] y herramientas de autogestión para los proveedores de flota.

**Tabla 2.1.** Caracterización del sector y de sus características organizativas.

| Dimensión | Descripción |
|---|---|
| Ámbito de actividad | Movilidad: renting de vehículos, suscripción/micro-renting y alquiler por días (*rent-a-car*) [3], [6] |
| Modelos de negocio predominantes | Agregadores de renting a largo plazo, plataformas de suscripción con flota propia y comparadores de alquiler vacacional (véase 2.3) |
| Tipología de empresas oferentes | Grandes operadores y entidades financieras; pymes y concesionarios locales con flotas reducidas; el tejido empresarial del alquiler de vehículos está formado mayoritariamente por microempresas y pymes de ámbito local o provincial, con flotas que se estiman inferiores a 50 vehículos |
| Tipología de clientes | Particulares, autónomos y empresas (pymes) con horizontes de uso desde días hasta varios años [5], [7] |
| Tendencias de digitalización | Transición *ownership → usership*, contratación 100 % digital, pago recurrente automatizado, verificación de identidad en línea [6], [7] |
| Necesidades tecnológicas | Catálogo con filtrado avanzado, calendarios de ocupación, integración con entidades bancarias para los pagos, paneles de gestión de flota, búsqueda inteligente y asistentes conversacionales [9] |
| Organización interna típica de las pymes oferentes | Personal comercial/atención al cliente, personal administrativo y de facturación, responsable de flota (mantenimiento, entregas y recogidas); perfil derivado del análisis de la competencia, a contrastar en las entrevistas del Sprint 03 |
| Canal de uso predominante | Web de escritorio para la gestión empresarial; dispositivo móvil para la búsqueda y contratación del cliente final [8] |

### 2.1.2. Segmentación de perfiles de usuario (*User Personas*)

La técnica de *personas* permite sintetizar los objetivos, competencias y contextos de uso de cada tipología de usuario en arquetipos concretos que sirven de referencia durante el diseño [10]. A partir del análisis del sector y del modelo B2B2C de MAHARent se identifican tres tipologías principales: el **cliente final** (particular o profesional que alquila), la **empresa proveedora** (pyme de renting o alquiler que publica su flota mediante el panel SaaS) y el **administrador de la plataforma**.

Las fichas que se presentan a continuación son arquetipos construidos a partir de las fuentes sectoriales consultadas y del estudio de la competencia; no proceden de un estudio de campo con usuarios reales. Su validación se planifica para el Sprint 03 mediante cinco entrevistas semiestructuradas (dos clientes finales, dos gestores de flota de pymes y un perfil administrativo) y una encuesta en línea breve dirigida a clientes potenciales.

### 2.1.3. Aportación documental

#### 2.1.3.1. Tabla descriptiva del sector

La tabla descriptiva del sector y de sus características organizativas se corresponde con la **Tabla 2.1** del apartado 2.1.1.

#### 2.1.3.2. Fichas de *User Persona*

**Ficha 1 — Cliente final (particular / autónomo)**

| Campo | Descripción |
|---|---|
| Nombre del arquetipo | «Laura», profesional desplazada por proyecto |
| Rol | Cliente final particular o autónoma que necesita un vehículo durante un periodo variable (días, semanas o meses) |
| Competencias digitales previas | Medias-altas: habituada a comprar en línea, a usar aplicaciones bancarias y a pagar con tarjeta o *wallet* móvil |
| Entorno de uso habitual | Teléfono móvil (búsqueda y contratación); ordenador portátil de forma ocasional |
| Objetivos principales | Encontrar un vehículo adecuado sin comprometerse a permanencias largas; conocer precio final y disponibilidad real; contratar y pagar en línea en pocos pasos |
| Frustraciones | Tener que elegir entre alquiler vacacional caro o renting rígido de 24–60 meses; presupuestos manuales; modelos «o similar» [3], [7] |
| Implicaciones de diseño | Enfoque *mobile-first*, búsqueda en lenguaje natural, indicador de días hasta la liberación del vehículo, proceso de pago corto |

**Ficha 2 — Empresa proveedora (gestor/a de flota en una pyme)**

| Campo | Descripción |
|---|---|
| Nombre del arquetipo | «Javier», responsable comercial y de flota de una pyme local de alquiler |
| Rol | Usuario B2B del panel SaaS (*Vendor Dashboard*): publica vehículos, gestiona calendarios de ocupación, tarifas y solicitudes |
| Competencias digitales previas | Medias: maneja hojas de cálculo, correo electrónico y algún software de gestión; sin conocimientos técnicos avanzados |
| Entorno de uso habitual | Ordenador de escritorio en la oficina (alta densidad de datos, uso de teclado) y tablet o móvil en la campa para fotografiar vehículos |
| Objetivos principales | Dar visibilidad a su flota en igualdad de condiciones frente a grandes operadores; reducir la gestión manual; conocer la ocupación de un vistazo |
| Frustraciones | Dependencia de agregadores cerrados, gestión de reservas por teléfono y hojas de cálculo dispersas |
| Implicaciones de diseño | Tablas con filtrado y ordenación, calendarios visuales, subida de imágenes guiada para la generación del modelo 3D, navegación eficiente por teclado |

**Ficha 3 — Administrador de la plataforma**

| Campo | Descripción |
|---|---|
| Nombre del arquetipo | «Equipo de operaciones MAHARent» |
| Rol | Supervisión del marketplace: alta y verificación de empresas, moderación de publicaciones, incidencias y métricas |
| Competencias digitales previas | Altas: conocimiento de la plataforma y de herramientas de administración |
| Entorno de uso habitual | Ordenador de escritorio |
| Objetivos principales | Garantizar la calidad del catálogo, la seguridad de los datos y el correcto funcionamiento de los pagos |
| Implicaciones de diseño | Panel de administración con control de acceso basado en roles, registros de auditoría e informes |

Esta segmentación pone de manifiesto que MAHARent no puede ofrecer una interfaz única: el cliente final requiere una experiencia ligera y táctil, mientras que el gestor de flota necesita densidad de información y productividad. Ambas visiones condicionan el análisis de la necesidad que se desarrolla a continuación.

## 2.2. Análisis de la necesidad

Una vez caracterizados el sector y sus usuarios, este apartado detalla el problema que justifica el desarrollo de MAHARent, describiendo la situación de partida (*As-Is*), sus consecuencias y la situación deseada (*To-Be*).

### 2.2.1. Diagnóstico de la situación de partida (*As-Is*)

En la actualidad, la persona que necesita un vehículo durante un periodo concreto se enfrenta a un mercado fragmentado según el plazo contractual. Si necesita el coche unos días, acude a comparadores *rent-a-car*; si lo necesita durante varios años, a agregadores de renting; y si busca una opción intermedia, a plataformas de suscripción que, no obstante, exigen permanencias de 12 a 36 meses (véase 2.3). En los agregadores de renting tradicionales el proceso habitual consiste en rellenar un formulario de varios pasos, esperar a un estudio de solvencia y recibir un presupuesto manual, sin conocer la disponibilidad real del vehículo ni poder pagar en línea [3], [4].

Desde el punto de vista de la empresa proveedora, especialmente de las pymes, la gestión de la flota se realiza con frecuencia mediante herramientas no integradas —hojas de cálculo, agendas, correo electrónico y llamadas— y su canal de venta digital depende de agregadores cerrados o de plataformas con flota propia que no admiten stock de terceros [6]. Este diagnóstico, construido a partir de fuentes secundarias, se contrastará con las entrevistas a pymes previstas para el Sprint 03.

### 2.2.2. Problemas y consecuencias identificadas

- **Fragmentación de la oferta por plazo:** el cliente debe consultar varias plataformas y no encuentra una tarificación continua entre el alquiler por días y el renting a largo plazo, lo que se traduce en pérdida de tiempo y en costes ineficientes [7].
- **Falta de transparencia y trazabilidad:** la disponibilidad se oculta o se muestra por categorías genéricas («o similar»), lo que impide planificar y genera desconfianza.
- **Procesos manuales y lentos:** presupuestos a demanda, estudios de solvencia previos y ausencia de pago en línea alargan el ciclo de contratación.
- **Errores en la captura de datos:** la gestión dispersa en hojas de cálculo favorece duplicidades, solapamientos de reservas e informes tardíos.
- **Barreras de entrada para las pymes:** sin un canal digital propio ni acceso a plataformas abiertas, compiten en desventaja frente a los grandes operadores.
- **Interfaces poco orientadas al usuario:** buscadores rígidos basados en filtros que no interpretan necesidades complejas expresadas en lenguaje natural [8], [9].

### 2.2.3. Propuesta de valor y situación deseada (*To-Be*)

MAHARent propone una plataforma web que unifica en un mismo marketplace la oferta de alquiler por días, suscripción y renting de media y larga duración, con una tarificación flexible que aplica descuentos automáticos por tramos de duración. Para el cliente final, la plataforma ofrece disponibilidad transparente mediante un indicador de días restantes hasta la liberación del vehículo, visualización 3D interactiva [11], [12], búsqueda semántica y un asistente conversacional basado en inteligencia artificial [9], así como contratación en línea, con el pago tramitado por entidades bancarias. Para las empresas proveedoras, MAHARent proporciona un panel SaaS autónomo con el que publicar su flota, gestionar calendarios y atender solicitudes, desplegado íntegramente sobre servicios en la nube.

### 2.2.4. Aportación documental

#### 2.2.4.1. Literatura y bases teóricas

La necesidad identificada se apoya en tres líneas de evidencia. En primer lugar, los datos sectoriales confirman el crecimiento del renting en España y la creciente participación de particulares y autónomos [3], [4], [5]. En segundo lugar, la literatura de consultoría sobre movilidad describe el tránsito hacia modelos basados en el uso, en los que el cliente valora la flexibilidad temporal por encima de la propiedad [6], [7]. En tercer lugar, la investigación en experiencia de usuario aplicada al comercio electrónico subraya la importancia de mostrar información de disponibilidad y precio de forma clara, reducir la fricción en el proceso de compra y ofrecer búsquedas tolerantes con la forma en que el usuario expresa su necesidad [8]. La combinación de estas tres líneas respalda la hipótesis de que existe una demanda insatisfecha de movilidad flexible «sin barreras de plazo». Desde el ámbito académico, la revisión de Jittrapirom et al. sobre *Mobility-as-a-Service* [13] identifica la integración de servicios en una única plataforma digital, la personalización y los modelos de pago por uso como rasgos definitorios de los nuevos servicios de movilidad, características que MAHARent incorpora en su propuesta.

#### 2.2.4.2. Diagrama conceptual del flujo actual frente al propuesto

Los siguientes diagramas de actividades, basados en la notación UML [14], contrastan el proceso de contratación actual en un agregador de renting tradicional con el proceso propuesto en MAHARent.

**Figura 2.1.** Flujo actual (*As-Is*).

![Flujo actual (As-Is)](img/flujo_asis.png)

**Figura 2.2.** Flujo propuesto (*To-Be*).

![Flujo propuesto (To-Be)](img/flujo_tobe.png)

#### 2.2.4.3. Necesidades funcionales y operativas de alto nivel

**Tabla 2.2.** Necesidades de alto nivel que debe cubrir el software.

| ID | Necesidad | Tipo | Justificación |
|---|---|---|---|
| N-01 | Catálogo unificado con alquiler por días, suscripción y renting | Funcional | Elimina la fragmentación de la oferta por plazo (2.2.2) |
| N-02 | Tarificación flexible con descuentos automáticos por tramos de duración | Funcional | Cubre la brecha entre alquiler vacacional y renting tradicional |
| N-03 | Indicador en tiempo real de días restantes hasta la liberación del vehículo | Funcional | Aporta transparencia y permite planificar con antelación |
| N-04 | Búsqueda semántica en lenguaje natural y asistente conversacional | Funcional | Sustituye a buscadores rígidos [9] |
| N-05 | Visualización 3D interactiva del vehículo generada a partir de imágenes | Funcional | Mejora la confianza en la compra en línea [11] |
| N-06 | Contratación en línea con el pago delegado en entidades bancarias | Funcional | Elimina presupuestos manuales sin que la plataforma trate datos de tarjeta (véase 2.5.1) |
| N-07 | Panel SaaS para empresas: publicaciones, calendario de ocupación y solicitudes | Funcional | Democratiza el acceso digital de las pymes |
| N-08 | Panel de administración con control de acceso basado en roles | Funcional / Seguridad | Garantiza la supervisión del marketplace y la protección de datos |
| N-09 | Diseño *responsive* y *mobile-first* | Operativa | El cliente final accede principalmente desde el móvil |
| N-10 | Cumplimiento de RGPD/LOPDGDD y de requisitos de accesibilidad | Operativa / Legal | Véase el apartado 2.7 |
| N-11 | Disponibilidad y rendimiento adecuados del servicio | Operativa | Objetivos: disponibilidad ≥ 99,5 % mensual; carga de la página principal < 2,5 s en móvil con 4G; respuesta de la API < 500 ms en el 95 % de las peticiones; visor 3D operativo en < 4 s (véase 2.5.5) |

Identificadas las necesidades, el siguiente paso consiste en comprobar si las soluciones existentes en el mercado ya las cubren, lo que se aborda mediante el estudio de *benchmarking*.

## 2.3. Estudio de soluciones existentes

Para posicionar adecuadamente MAHARent dentro del sector del renting, la suscripción y el alquiler de vehículos, el equipo ha realizado un estudio comparativo (*benchmarking*) de las plataformas web de la competencia [4]. El objetivo no es replicar sus modelos, sino evaluar sus puntos fuertes en diseño visual (UI/UX), funcionalidades clave y sistemas de filtrado, identificar las carencias en la experiencia de usuario y definir los factores diferenciadores que justifican la propuesta técnica [4], [8].

A diferencia de las alternativas actuales, que segmentan de forma estricta a los usuarios según el plazo contractual, MAHARent se concibe para dar respuesta a un público objetivo global [3], [5]. Tal y como señalan los informes del sector sobre la transición del *ownership* al *usership* [6], [7], el cliente actual demanda modelos de uso flexibles, desde alquileres por días sueltos hasta modelos de movilidad de varios años, sin barreras contractuales rígidas.

### 2.3.1. Identificación de software competidor

El mercado se ha dividido en tres categorías de competidores, seleccionando dos soluciones reales representativas de cada una:

- **Categoría A — Agregadores de renting tradicional:** Swipcar [15] y Renting Finders [16].
- **Categoría B — Plataformas de suscripción / micro-renting:** Bipi [17] y Revel [18].
- **Categoría C — Comparadores de alquiler por días (*rent-a-car*):** Rentalcars [19] y Pepecar [20].

### 2.3.2. Análisis comparativo

#### A. Agregadores de renting tradicional (Swipcar y Renting Finders)

**Estética y diseño visual (UI/UX).** Ambas plataformas presentan los vehículos en cuadrículas (*grids*) de tarjetas individuales (*cards*), emulando el diseño de un comercio electrónico tradicional [4]. Predominan los fondos limpios con contrastes en colores corporativos llamativos (azules, amarillos o verdes) en los botones de llamada a la acción (*CTA*), como «Ver oferta» o «Pedir presupuesto» [4], [8]. La cuota mensual se muestra con un tamaño tipográfico muy grande y en negrita como principal reclamo visual [4].

**Funcionalidades clave.** Ofrecen un buscador con filtros dinámicos por cuota máxima, entrada inicial, plazo (de 24 a 60 meses) y kilometraje anual [3]; una calculadora de cuotas interactiva mediante barras deslizantes (*sliders*) [4]; y captación de clientes potenciales (*leads*) mediante formularios por pasos (*wizard*) que evalúan la solvencia del cliente antes del contacto comercial [4].

**Carencias detectadas.** El proceso de contratación es manual y lento, no existe pago en línea directo, falta transparencia sobre la disponibilidad en tiempo real y el enfoque se limita a contratos rígidos de muy largo plazo, lo que excluye a usuarios con necesidades temporales más cortas o dinámicas [3], [4], [6].

#### B. Plataformas de suscripción / micro-renting (Bipi y Revel)

**Estética y diseño visual (UI/UX).** Siguen un diseño *mobile-first* de estilo neobancario, inspirado en las *fintech*, caracterizado por un alto minimalismo, uso intensivo del espacio en blanco, esquinas redondeadas y tipografías *sans-serif* de gran tamaño [4], [8]. Tratan el vehículo como un producto tecnológico, con fotografías profesionales sobre fondos neutros o *renders* [4], e incorporan microinteracciones y animaciones fluidas [4], [8].

**Funcionalidades clave.** Proceso de contratación 100 % digital con registro, verificación del permiso de conducir mediante la cámara del dispositivo y firma manuscrita en pantalla [4]; pasarela de pago recurrente para el cobro automatizado de la cuota mensual [4], [6]; y selección de extras mediante interruptores (*toggle switches*) que actualizan la cuota en directo, como «seguro sin franquicia» o «conductor adicional» [4].

**Carencias detectadas.** Operan con flotas cerradas de gestión propia, sin posibilidad de que las pymes locales publiquen su stock, y exigen permanencias mínimas de 12 a 36 meses para acceder a tarifas competitivas, dejando fuera al usuario de corta o media duración y al alquiler flexible por días [3], [5], [7].

#### C. Comparadores de alquiler por días (Rentalcars y Pepecar)

**Estética y diseño visual (UI/UX).** Presentan un estilo orientado a agencia de viajes con alta densidad de información, que prioriza la conversión rápida frente al minimalismo [4], [8]. La sección principal (*hero section*) está ocupada casi por completo por el formulario de búsqueda (recogida, devolución y fechas) [4], y emplean colores vivos (rojo, naranja) para transmitir urgencia y escasez («¡Solo quedan 2 coches!», «Cancelación gratuita») [4], [8].

**Funcionalidades clave.** Selector de fechas y horas mediante un calendario doble con validación lógica de rangos [4]; asignación por categorías generales de vehículo («Económico», «SUV») bajo la etiqueta «o similar», sin garantizar el modelo exacto [4]; y filtros de especificaciones técnicas (combustible, tipo de cambio, número de puertas) [4].

**Carencias detectadas.** Se orientan exclusivamente al alquiler vacacional de muy corta duración (de 1 a 15 días), con precios diarios elevados e ineficientes para usuarios o empresas que necesitan el vehículo durante meses o años [3], [4].

#### Aspectos complementarios exigidos por el índice

El índice del capítulo solicita, además, valorar el coste de implantación, la curva de aprendizaje, la capacidad multiplataforma y la extensibilidad de cada alternativa. Desde la perspectiva del **cliente final**, las tres categorías son de uso gratuito vía web, y su curva de aprendizaje es baja en los comparadores y en las plataformas de suscripción, y media en los agregadores de renting por la complejidad de los formularios de solvencia. Desde la perspectiva de una **pyme que quisiera ofrecer su flota**, la extensibilidad es nula en las plataformas de flota cerrada (B) y limitada en los comparadores (C), cuya integración se realiza vía API reservada a grandes cadenas. Las condiciones económicas para empresas proveedoras no se publican de forma abierta en los sitios oficiales de estas plataformas [15], [16], [17], [18], [19], [20]; a falta de datos públicos, se estima que agregadores y comparadores operan con comisiones por operación negociadas de forma privada, mientras que las plataformas de suscripción no admiten proveedores externos. En cuanto a la capacidad multiplataforma, todas ofrecen acceso web *responsive*; los comparadores de alquiler por días y parte de las plataformas de suscripción disponen además de aplicaciones móviles nativas, mientras que los agregadores de renting se centran en el canal web.

### 2.3.3. Aportación documental

#### 2.3.3.1. Matriz comparativa

**Tabla 2.3.** Matriz comparativa del mercado.

| Criterio / Plataforma | Agregadores de renting (Swipcar / Renting Finders) [3], [4] | Suscripción de vehículos (Bipi / Revel) [4], [6] | Comparadores *rent-a-car* (Rentalcars / Pepecar) [4] | **MAHARent** [3], [4], [7] |
|---|---|---|---|---|
| Modelo de negocio | Marketplace / intermediario | Flota propia / *partners* cerrados | Agregador vacacional | Marketplace B2B2C + SaaS abierto |
| Público y duración | Largo plazo (24–60 meses) | Medio/largo plazo (12–36 meses) | Muy corto plazo (1–30 días) | Público global ultraflexible (días, corto, medio y largo plazo) |
| Transparencia de estado | Oculta; sujeta a estudio previo | Mostrada según stock general | Por categoría («o similar») | Indicador en tiempo real de días restantes hasta la liberación |
| Gestión para empresas | Cerrada (gestión manual) | Centralizada | Vía API de grandes cadenas | *Dashboard* SaaS autónomo para pymes y flotas |
| Tecnología diferencial | Calculadora con *sliders* | Verificación de identidad digital | Buscador de fechas tradicional | Visor 3D con IA [11], *chatbot* y buscador semántico NLP [9] |
| Pago en línea | Recibo bancario tras *scoring* | Cuota mensual por tarjeta | Pago único vacacional | Pago por días o meses tramitado por entidades bancarias |
| Experiencia de usuario | E-commerce clásico, CTA destacados | Minimalista, *mobile-first* | Alta densidad, urgencia | *Mobile-first* con exploración inmersiva (3D y búsqueda conversacional) |
| Multiplataforma | Web *responsive* (sin app nativa) | Web + app móvil (según operador) | Web + apps iOS/Android | Web *responsive* instalable como PWA en iOS/Android |
| Coste de implantación para la pyme | Comisión por operación (no pública) | No aplica (flota cerrada) | Comisión por reserva negociada (no pública) | Plan Básico gratuito (hasta 3 vehículos); Plan Pro 39 €/mes + 5 % de comisión por reserva |

#### 2.3.3.2. Justificación de la propuesta

Tras contrastar las soluciones existentes, MAHARent fundamenta su ventaja competitiva en seis ejes en los que la competencia presenta carencias:

1. **Público objetivo global sin restricciones temporales:** una sola plataforma para alquiler por días, meses o contratos de largo plazo, tanto para particulares como para empresas [3], [5], [6].
2. **Visibilidad transparente de ocupación y liberación:** un contador dinámico de días restantes hasta que el vehículo quede libre permite planificar y reservar con antelación [4], [8].
3. **Visualización 3D inmersiva con IA:** las empresas generan un modelo 3D interactivo en 360° a partir de sus fotografías, renderizado con WebGL y el formato glTF [11], [12].
4. **Búsqueda semántica y asistente virtual:** un motor de lenguaje natural interpreta intenciones complejas (p. ej., «coche familiar eficiente para alquilar tres meses por un proyecto de trabajo») y un *chatbot* con IA asesora en tiempo real [9].
5. **Tarificación flexible con descuentos dinámicos por tramos:** escalado automático del precio según la duración seleccionada [3], [4], [7].
6. **Democratización B2B vía SaaS:** las pymes disponen de un panel autónomo (*Vendor Dashboard*) para gestionar publicaciones, calendarios y solicitudes en igualdad de condiciones [3].

En síntesis, ninguna de las alternativas analizadas combina la apertura a proveedores externos con la flexibilidad temporal total y la contratación íntegramente digital; MAHARent ocupa precisamente ese espacio vacío. Para que esta propuesta sea viable, es imprescindible identificar a todos los actores que intervienen en ella, lo que se aborda en el apartado siguiente.

## 2.4. Partes interesadas (*Stakeholders*)

El desarrollo de MAHARent, como plataforma SaaS B2B y marketplace B2C, requiere identificar a sus actores clave para garantizar la adecuación funcional, la usabilidad y el cumplimiento normativo del software [21]. Las partes interesadas se estructuran en tres categorías según su grado de implicación y se completan con un análisis de poder e interés basado en el modelo de Mendelow [22].

### 2.4.1. Identificación exhaustiva

**1. Partes interesadas internas**

- **Equipo de desarrollo (*Scrum Team*)** [1]: se encarga de analizar, diseñar, programar y probar el sistema, asegurando el cumplimiento de los plazos y la calidad del código.
- **Administradores de la plataforma:** personal responsable de moderar las cuentas de empresa, supervisar el catálogo publicado y ejercer el control operativo global del software.

**2. Partes interesadas externas directas**

- **Empresas de renting (clientes B2B):** pymes y concesionarios que emplean el panel SaaS para gestionar su flota, configurar tarifas, controlar la disponibilidad y recibir solicitudes.
- **Clientes y arrendatarios (usuarios B2C / B2B2C):** particulares y profesionales que acceden al marketplace para buscar vehículos, consultar los modelos 3D y solicitar contratos de alquiler o renting.

**3. Partes interesadas externas indirectas**

- **Entidades bancarias:** tramitan los pagos de las reservas fuera de la plataforma, de acuerdo con el modelo de delegación descrito en el apartado 2.5.1.
- **Organismos reguladores (AEPD, W3C, ISO):** establecen el marco obligatorio en protección de datos (RGPD) [23], accesibilidad web (WCAG 2.2) [24] y calidad del software (ISO/IEC 25010) [25].

**Tabla 2.4a.** Resumen de partes interesadas.

| Categoría | Actor / Rol | Interacción en el sistema | Necesidad principal |
|---|---|---|---|
| Internos | Equipo Scrum | Desarrollo, codificación y pruebas | Entregar código funcional, escalable y a tiempo |
| Internos | Administradores | Panel global de administración | Moderar usuarios y controlar el sistema |
| Externos directos | Empresas (B2B) | Panel SaaS de gestión de flota | Digitalizar el inventario y gestionar solicitudes |
| Externos directos | Clientes (B2C) | Marketplace y catálogo público | Contratación ágil y transparencia de los vehículos |
| Externos indirectos | Entidades bancarias | Tramitación de pagos | Seguridad PCI-DSS y cobro de las reservas |
| Externos indirectos | Reguladores | Marco legal y normativo | Cumplimiento de RGPD, WCAG 2.2 e ISO/IEC 25010 |

### 2.4.2. Análisis de poder e interés

El equipo Scrum y las empresas de renting concentran a la vez un poder alto sobre las decisiones del proyecto y un interés máximo en su resultado: el primero construye el producto y las segundas aportan el catálogo sin el cual el marketplace no tiene valor. Los administradores tienen un interés alto y un poder medio, ya que sus necesidades condicionan el diseño del panel de administración. Los clientes B2C tienen un interés muy alto, pero una influencia media sobre las decisiones del proyecto, por lo que se les implicará a través de encuestas y pruebas de usabilidad. Por último, las entidades bancarias y los organismos reguladores tienen un interés bajo en el proyecto concreto, pero un poder alto, porque sus requisitos (seguridad en los pagos, protección de datos, accesibilidad y calidad) son de obligado cumplimiento.

### 2.4.3. Aportación documental

#### 2.4.3.1. Matriz de interesados (poder vs. interés)

**Tabla 2.4.** Matriz de interesados.

| Rol / Grupo | Tipo | Expectativas principales | Influencia | Interés | Estrategia de comunicación |
|---|---|---|---|---|---|
| Equipo Scrum | Interno | Entregar código funcional, escalable y a tiempo | Alta | Alto | Gestionar de cerca: *Daily Scrum*, *Sprint Review* y GitHub Projects [2] |
| Administradores | Interno | Moderar usuarios y controlar el sistema | Media | Alto | Gestionar de cerca: validación del panel de administración en cada sprint |
| Empresas de renting (B2B) | Externo directo | Digitalizar el inventario y gestionar solicitudes | Alta | Alto | Gestionar de cerca: entrevistas y piloto con pymes |
| Clientes (B2C) | Externo directo | Contratación ágil y transparencia | Media | Alto | Mantener informados: encuestas y pruebas de usabilidad |
| Entidades bancarias | Externo indirecto | Seguridad PCI-DSS y cobro de las reservas | Alta | Bajo | Mantener satisfechas: flujo de estados de reserva y conciliación documentada |
| Reguladores (AEPD, W3C, ISO) | Externo indirecto | Cumplimiento de RGPD, WCAG 2.2 e ISO/IEC 25010 | Alta | Bajo | Mantener satisfechos: cumplimiento documentado (véase 2.7) |

#### 2.4.3.2. Mapa de stakeholders

La Figura 2.3 representa la matriz anterior sobre los cuatro cuadrantes del modelo de Mendelow [22]. El eje horizontal mide el interés de cada actor en el proyecto y el vertical su poder o capacidad de influencia; la forma y el color del marcador distinguen a los actores internos (círculo azul) de los externos (cuadrado ámbar).

![Figura 2.3. Mapa de stakeholders de MAHARent (poder vs. interés)](img/mapa_stakeholders.png)

**Figura 2.3.** Mapa de stakeholders de MAHARent (poder vs. interés).

- **Gestionar de cerca (poder alto, interés alto):** equipo Scrum, empresas de renting y administradores.
- **Mantener satisfechos (poder alto, interés bajo):** entidades bancarias y organismos reguladores.
- **Mantener informados (poder medio, interés alto):** clientes B2C.
- **Monitorizar (poder bajo, interés bajo):** no se identifican actores en este cuadrante en la fase actual.

Con los actores identificados, el siguiente paso es valorar si el equipo y la infraestructura disponibles permiten construir la solución que estos actores esperan.

## 2.5. Estudio de viabilidad técnica

Este apartado justifica la arquitectura y la pila tecnológica de MAHARent, especifica los requisitos de hardware y despliegue, evalúa la madurez técnica del equipo y define las métricas con las que se controlará la calidad del software. La premisa que guía todas las decisiones es apoyar la infraestructura al máximo en la nube, sin servidores propios.

### 2.5.1. Pila tecnológica (*Tech Stack*)

#### Arquitectura de software y principios *The Twelve-Factor App*

La arquitectura de MAHARent se concibe bajo el paradigma *cloud-native*, basada en el desacoplamiento estricto entre el cliente y el servidor mediante una API REST sin estado (*stateless*). Para garantizar que el software sea escalable, mantenible y portable entre entornos de ejecución, el diseño sigue los principios de *The Twelve-Factor App* [26]:

- **Base de código (*Codebase*):** un único repositorio en Git (GitHub), desde el que se despliegan los entornos de desarrollo y producción.
- **Aislamiento de dependencias:** todas las librerías se declaran explícitamente en el gestor de paquetes (`package.json`), sin depender de herramientas globales del sistema operativo.
- **Configuración en el entorno:** las credenciales, las URL de conexión a la base de datos y las claves de autenticación se gestionan exclusivamente mediante variables de entorno (`.env`), separadas del código.
- **Servicios de respaldo (*Backing Services*):** la base de datos (MongoDB Atlas) y los servicios de almacenamiento en la nube se tratan como recursos adscritos mediante URL de conexión, lo que permite sustituirlos o migrarlos sin modificar el código fuente.
- **Construcción, publicación y ejecución (*Build, Release, Run*):** separación estricta entre la compilación del código, su combinación con la configuración del entorno y su ejecución en la nube.
- **Procesos sin estado (*Stateless*):** el servidor no guarda estado en memoria entre peticiones; la persistencia se delega en la base de datos y la sesión se valida mediante tokens JWT [27].
- **Asignación de puertos (*Port Binding*):** la aplicación es autosuficiente y expone sus servicios HTTP en puertos configurables por el entorno.
- **Paridad entre desarrollo y producción:** los entornos locales y el entorno en la nube se mantienen lo más similares posible para minimizar errores de despliegue.

Esta arquitectura contribuye a los objetivos de calidad del modelo ISO/IEC 25010 [25], en particular en mantenibilidad, portabilidad, eficiencia de desempeño y seguridad (véase 2.5.5).

#### Capas del stack

La selección tecnológica equilibra la agilidad en el desarrollo del MVP con las competencias del ciclo formativo de Desarrollo de Aplicaciones Web:

- **A. Presentación (*frontend*):** HTML5 semántico, CSS3 y JavaScript moderno (ES6+), sobre la librería React [28]. Se elige React frente a JavaScript sin *framework* porque MAHARent tiene dos interfaces complejas (el panel SaaS de las empresas y el marketplace de los clientes) y los componentes reutilizables reducen el esfuerzo de construcción y mantenimiento; además, su ecosistema ofrece librerías para el visor 3D, los calendarios y los formularios. HTML5 aporta una estructura semántica que favorece la accesibilidad según WCAG 2.2 (niveles A y AA) [24], y la interfaz sigue un enfoque *responsive* y *mobile-first* con CSS Grid y Flexbox. Se despliega de forma automatizada en Vercel [29], que publica cada cambio desde GitHub y genera una URL de prueba para cada *pull request*. Su plan gratuito está limitado a uso no comercial, por lo que se utiliza durante el desarrollo y se pasa al plan Pro en producción.
- **B. Lógica de negocio (*backend*):** Node.js [30] con el *framework* Express [31] para construir una API RESTful. Node.js ofrece un modelo de entrada/salida no bloqueante, orientado a eventos, que gestiona múltiples peticiones concurrentes con bajo consumo de memoria; Express simplifica el enrutamiento, los *middlewares* de validación y la autenticación con JWT. Se despliega en Render [32], elegido frente a otras plataformas por disponer de un plan gratuito para servicios web, coherente con la premisa de coste cero durante el desarrollo, y por desplegar directamente desde GitHub o desde una imagen Docker. En el plan gratuito el servicio se suspende tras un periodo de inactividad, por lo que en producción se contratará un plan de pago para cumplir el objetivo de tiempo de respuesta de la API (véase 2.5.5).
- **C. Persistencia (NoSQL documental referenciado):** MongoDB [33], alojado en MongoDB Atlas y accedido mediante el ODM Mongoose [34]. Se elige por tres motivos: la ficha técnica de los vehículos (combustión, eléctricos, furgonetas, equipamiento) varía entre proveedores y el modelo de documentos JSON (BSON) admite estructuras flexibles sin la rigidez de un esquema relacional; facilita vincular los metadatos de imágenes y de los modelos 3D generados por IA; y las colecciones Empresa, Vehículo, Reserva y Usuario se relacionan mediante referencias explícitas (`ObjectId` y `.populate()`), lo que combina la flexibilidad NoSQL con la integridad que exige la gestión de alquileres.
- **D. Contenedores:** Docker y Docker Compose [35] empaquetan el *backend* y los servicios auxiliares, de modo que el entorno de cada desarrollador es idéntico al de la nube y la aplicación puede migrarse a otro proveedor *cloud* sin cambios en el código.
- **E. Visualización 3D:** el visor del catálogo se apoya en los estándares abiertos WebGL [36] y glTF [12], que permiten mostrar modelos 3D en el navegador sin complementos.
- **F. Control de versiones e integración continua:** Git y GitHub, con ramificación GitFlow y despliegue continuo (CI/CD) hacia los servicios en la nube; la planificación se gestiona en GitHub Projects [2].

#### Delegación de los pagos en entidades bancarias

Para concentrar las horas de ingeniería en el núcleo del sistema (gestión de flotas B2B, motor de disponibilidad y visualización 3D), la plataforma delega la tramitación económica en entidades bancarias y financieras externas. Esta decisión tiene tres consecuencias:

- **Exención de PCI-DSS:** al no procesar ni almacenar datos bancarios ni números de tarjeta en los servidores de MAHARent, el *backend* queda fuera del alcance de la certificación de seguridad PCI-DSS [37].
- **Privacidad desde el diseño (art. 25 RGPD):** se aplica el principio de minimización de datos [23], [38], lo que reduce la superficie de ataque y el riesgo asociado a la custodia de datos financieros.
- **Flujo transaccional integrado:** el marketplace gestiona la intención y la reserva mediante un flujo de estados en la base de datos (*Solicitado*, *Pendiente de aprobación bancaria*, *Confirmado* o *Rechazado*), y la conciliación se realiza mediante el envío seguro de justificantes e importes a la entidad financiera correspondiente.

### 2.5.2. Requisitos de hardware y despliegue

Como toda la infraestructura de producción reside en servicios gestionados en la nube, MAHARent no requiere servidores propios. Los únicos requisitos de hardware corresponden a los equipos de desarrollo y a los dispositivos de los usuarios.

**Tabla 2.5.** Requisitos de hardware y entorno de ejecución.

| Elemento | Requisito mínimo | Requisito recomendado |
|---|---|---|
| Equipo de desarrollo (CPU / RAM / disco) | CPU de 4 núcleos, 8 GB de RAM, SSD de 256 GB | CPU de 6–8 núcleos, 16 GB de RAM (recomendable para Docker), SSD de 512 GB |
| Sistema operativo de desarrollo | Windows 10/11, macOS 13 o superior, o Linux, con Node.js LTS y Docker | — |
| Cliente de escritorio | Navegador actualizado con WebGL 2.0 | GPU con aceleración por hardware |
| Cliente móvil / tablet | Navegador móvil actualizado con WebGL | iOS 16 o superior / Android 10 o superior |
| *Frontend* | Vercel (plan gratuito en desarrollo) | Plan de pago en producción |
| *Backend* | Render (plan gratuito en desarrollo) | Plan de pago en producción |
| Base de datos | MongoDB Atlas, clúster gratuito en desarrollo | Clúster dedicado en producción, en región de la UE |
| Conectividad | 10 Mbps (modelos 3D comprimidos de 5 MB como máximo) | 30 Mbps o superior |

### 2.5.3. Curva de aprendizaje y madurez técnica

Las tecnologías elegidas son maduras, de código abierto y cuentan con documentación oficial extensa [30], [33], [35]. HTML5, CSS3 y JavaScript forman parte de la formación del ciclo, por lo que el equipo parte de un conocimiento alto. En cambio, Node.js y Express, MongoDB y Mongoose, Docker, el despliegue en la nube y, sobre todo, la visualización 3D requieren un periodo de autoformación. La Tabla 2.6 recoge la estimación inicial del nivel de conocimiento del equipo y las horas de autoformación previstas por persona, que suman 44 horas por integrante (176 horas para el equipo) y se han incluido en la estimación de esfuerzo del apartado 2.6.

### 2.5.4. Aportación documental

#### 2.5.4.1. Ficha técnica del stack de desarrollo y entorno de ejecución

**Tabla 2.6.** Ficha técnica del stack.

| Capa | Tecnología | Despliegue | Función en MAHARent | Conocimiento previo | Autoformación (h/persona) |
|---|---|---|---|---|---|
| *Frontend* | React sobre HTML5, CSS3 y JavaScript (ES6+) | Vercel | Marketplace B2C y panel SaaS B2B | Alto (HTML, CSS, JS) · Medio (React) | 4 |
| *Backend* | Node.js + Express, JWT | Render | Lógica de negocio, disponibilidad, autenticación y API REST | Medio | 10 |
| Base de datos | MongoDB + Mongoose | MongoDB Atlas | Colecciones referenciadas: Empresa, Vehículo, Reserva y Usuario | Bajo | 8 |
| Visualización 3D | WebGL + glTF | Navegador del cliente | Visor 3D del catálogo | Nulo | 10 |
| Contenedores | Docker / Docker Compose | Local y nube | Paridad entre desarrollo y producción | Bajo | 8 |
| Versiones y CI/CD | Git / GitHub | GitHub | Código fuente, GitFlow e integración continua | Alto | 4 |
| Transacciones | Delegación bancaria externa | Entidades financieras | Pagos fuera de la plataforma, sin PCI-DSS | — | 0 |

#### 2.5.4.2. Conclusión sobre la viabilidad técnica

El desarrollo del MVP de MAHARent es **técnicamente viable** dentro del marco temporal y de recursos del proyecto. El esfuerzo previsto es de 1.200 horas de trabajo del equipo Scrum (incluidas las 176 horas de autoformación), dentro de una inversión total de 26.939 € detallada en el apartado 2.6.

Como la infraestructura se apoya íntegramente en herramientas de código abierto y en las capas gratuitas (*free tier*) de los servicios en la nube, el coste de software y servidores durante el desarrollo es de 0 €; el coste de los planes de pago en producción se recoge en el apartado 2.6.2.

La complejidad de construir una arquitectura dual —un panel SaaS B2B para la gestión de flotas y un marketplace B2C/B2B2C para el alquiler flexible— se mitiga mediante una división modular clara de responsabilidades, la reutilización de componentes y una curva de aprendizaje acotada. El componente con mayor incertidumbre técnica es la visualización 3D, por lo que se validará con una prueba de concepto temprana (véase el riesgo R-01 en el apartado 2.8).

### 2.5.5. Métricas de calidad del software

Para controlar la calidad del producto de forma objetiva se adopta el modelo de calidad ISO/IEC 25010 [25] y se fijan objetivos medibles para sus características principales. Las mediciones se automatizan en el flujo de integración continua de GitHub, de modo que cada cambio se evalúa antes de llegar a producción.

**Tabla 2.6b.** Métricas de calidad del software.

| Característica (ISO/IEC 25010) | Métrica | Objetivo | Cómo se mide |
|---|---|---|---|
| Mantenibilidad | Cobertura de pruebas automatizadas | ≥ 70 % | Informe de cobertura en el flujo CI/CD |
| Fiabilidad | Errores críticos abiertos en cada versión | 0 | Gestión de incidencias en GitHub |
| Fiabilidad | Disponibilidad mensual del servicio | ≥ 99,5 % | Monitorización de los servicios en la nube |
| Eficiencia de desempeño | Carga de la página principal en móvil (LCP) [39] | < 2,5 s | Lighthouse [40] |
| Eficiencia de desempeño | Tiempo de respuesta de la API (percentil 95) | < 500 ms | Registros del *backend* |
| Usabilidad / accesibilidad | Puntuación de accesibilidad en Lighthouse | ≥ 95 | Lighthouse en el flujo CI/CD |

Demostrada la viabilidad técnica, es necesario comprobar que el coste de construir y mantener la solución resulta sostenible.

## 2.6. Estudio de viabilidad económica

### 2.6.1. Estimación de costes de desarrollo

El coste de personal se calcula multiplicando las horas estimadas de desarrollo por la tarifa horaria de un desarrollador júnior:

> Coste de personal = Horas estimadas × Tarifa horaria júnior (incluidos costes sociales)

Se considera un equipo de 4 personas con una dedicación de 300 horas cada una (1.200 horas en total, incluidas las 176 horas de autoformación), repartidas en 8 sprints de unas 37,5 horas por persona. Como tarifa se toma un salario bruto anual orientativo de 22.000 € para un perfil júnior en España, más un 32 % de cotizaciones a cargo de la empresa; con una jornada anual de 1.760 horas resulta un coste de 16,50 €/h, que se redondea a **17 €/h**. El coste de personal asciende así a 1.200 h × 17 €/h = **20.400 €**.

### 2.6.2. Costes de infraestructura y licencias

- **Hardware:** amortización de los equipos de desarrollo, calculada como *(coste del equipo / vida útil en meses) × meses de proyecto*. Se consideran 4 portátiles de 900 € con una vida útil de 4 años (coeficiente lineal del 25 % aplicable a equipos para procesos de información) durante los 8 meses del proyecto: 900 / 48 × 8 = 150 € por equipo, **600 €** en total.
- **Servicios cloud:** MongoDB Atlas [33], Render y Vercel ofrecen capas gratuitas suficientes para el desarrollo, por lo que el coste de software y servidores durante esa fase es de 0 €. Para el primer año en producción se prevé pasar a planes de pago: base de datos en MongoDB Atlas (≈ 23 €/mes, 276 €), *backend* en Render (≈ 20 €/mes, 240 €) y *frontend* en Vercel (≈ 19 €/mes, 228 €), es decir, **744 €**.
- **Pagos:** la tramitación económica se delega en entidades bancarias externas (véase 2.5.1), por lo que MAHARent no asume costes de pasarela de pago ni de certificación PCI-DSS; las comisiones bancarias forman parte de la relación entre la entidad y la empresa proveedora o el cliente, y no se incluyen en la inversión.
- **Generación de modelos 3D con IA:** suscripción a un servicio externo de generación 3D estimada en unos 18 €/mes (**216 €** el primer año).
- **Dominio y certificados:** dominio `.es` (≈ **10 €**/año); los certificados TLS los proporcionan gratuitamente los servicios de alojamiento.
- **Herramientas de desarrollo:** se prevé el uso de herramientas gratuitas o de licencia educativa: Visual Studio Code, Git, GitHub (plan gratuito con GitHub Education) y Figma Education, con coste 0 €.

### 2.6.3. Costes indirectos y mantenimiento

Incluyen la parte proporcional de electricidad y conectividad durante el desarrollo, así como la previsión de soporte técnico, corrección de errores y actualizaciones de seguridad una vez desplegada la plataforma. Se imputan 15 €/mes por persona en electricidad y conectividad (4 × 8 meses × 15 € = **480 €**) y 10 horas/mes de mantenimiento durante el primer año tras el despliegue (120 h × 17 €/h = **2.040 €**).

### 2.6.4. Aportación documental

#### 2.6.4.1. Presupuesto desglosado

**Tabla 2.7.** Presupuesto del proyecto.

| Partida | Concepto | Cálculo | Importe (€) |
|---|---|---|---|
| Personal | Desarrollo júnior | 1.200 h × 17 €/h | 20.400 |
| Hardware | Amortización de equipos | 4 × (900 € / 48 meses) × 8 meses | 600 |
| Software / servicios | MongoDB Atlas (276 €), *backend* en Render (240 €) y *frontend* en Vercel (228 €) | Primer año en producción | 744 |
| Software / servicios | Generación de modelos 3D con IA (216 €) y dominio (10 €) | Primer año | 226 |
| Costes indirectos | Electricidad y conectividad | 4 personas × 8 meses × 15 € | 480 |
| Mantenimiento | Soporte post-despliegue (primer año) | 120 h × 17 €/h | 2.040 |
| **Subtotal** | | | **24.490** |
| Contingencias | Reserva para imprevistos | 10 % del subtotal | 2.449 |
| **Total** | | | **26.939 €** |

#### 2.6.4.2. Análisis del retorno de la inversión (ROI)

El retorno de la inversión se calculará como:

> ROI = (Beneficio neto − Inversión) / Inversión × 100

En el modelo de MAHARent, los ingresos proceden previsiblemente de la suscripción de las empresas al panel SaaS y/o de una comisión sobre cada reserva del marketplace. Se propone un modelo *freemium*: un Plan Básico gratuito (hasta 3 vehículos) y un Plan Pro de 39 €/mes, más una comisión del 5 % sobre cada reserva confirmada, que se factura a la empresa proveedora. Con hipótesis prudentes se obtiene la siguiente previsión:

**Tabla 2.7b.** Previsión de ingresos y retorno de la inversión.

| Concepto | Año 1 | Año 2 |
|---|---|---|
| Pymes en Plan Pro (media anual) | 20 | 50 |
| Ingresos por suscripción (39 €/mes) | 9.360 € | 23.400 € |
| Reservas (importe medio 450 €) | 300 | 900 |
| Ingresos por comisión (5 %) | 6.750 € | 20.250 € |
| **Ingresos totales** | **16.110 €** | **43.650 €** |
| Costes (inversión inicial / explotación) | 26.939 € | 3.000 € |
| **Resultado acumulado** | **−10.829 €** | **29.821 €** |
| **ROI acumulado** | **−40,2 %** | **+99,6 %** |

El primer año cierra con un ROI negativo, algo habitual en plataformas de dos lados que deben atraer simultáneamente a proveedores y clientes. La inversión se recupera hacia el cuarto mes del segundo año (mes 16 desde el lanzamiento), y al cierre de ese año el ROI acumulado se sitúa próximo al 100 %. Desde la perspectiva de la empresa usuaria, si la plataforma le ahorra unas 20 horas/mes de gestión manual de reservas y presupuestos (valoradas a 15 €/h, es decir, 300 €/mes), el ahorro neto frente a la cuota del Plan Pro es de unos 261 €/mes, más de 3.100 € al año, sin contar el incremento de ventas derivado del nuevo canal digital. Estas cifras son hipótesis de partida y se recalcularán con los datos que se obtengan en el piloto con pymes.

Con independencia de su sostenibilidad económica, la plataforma debe operar dentro del marco jurídico vigente, aspecto que se analiza a continuación.

## 2.7. Estudio de viabilidad legal y normativa

MAHARent no opera en un vacío normativo: el tratamiento de datos personales, el uso de componentes de terceros, la accesibilidad de la interfaz y el uso de inteligencia artificial están sujetos al marco jurídico vigente en España y en la Unión Europea.

### 2.7.1. Protección de datos personales

La plataforma debe cumplir el Reglamento General de Protección de Datos (RGPD) [23] y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD) [41]. Adicionalmente, el uso de *cookies* y comunicaciones comerciales está regulado por la LSSI-CE [42].

#### 2.7.1.1. Datos de carácter personal que recabará la aplicación

**Tabla 2.8.** Datos personales tratados.

| Categoría | Datos | Interesado | Finalidad |
|---|---|---|---|
| Identificativos | Nombre, apellidos, DNI/NIE | Cliente final, contacto de empresa | Registro, contratación y facturación |
| Contacto | Correo electrónico, teléfono, dirección | Cliente final, contacto de empresa | Comunicaciones del servicio |
| Credenciales | Correo y contraseña (almacenada como *hash*) | Todos los usuarios | Autenticación |
| Permiso de conducir | Número, categoría y fecha de caducidad (no se almacena la imagen del documento) | Cliente final | Verificación de aptitud para conducir |
| Transacciones | Reservas, importes, historial | Cliente final | Ejecución del contrato y facturación |
| Datos de pago | No se recogen: el pago lo tramita la entidad bancaria y la plataforma solo registra el estado de la reserva | Cliente final | Seguimiento de la reserva |
| Conversaciones con el *chatbot* | Texto de las consultas | Cliente final | Asesoramiento; se conservan 30 días y después se eliminan |
| Datos de empresa | Razón social, CIF, representante | Empresas proveedoras | Alta y facturación del servicio SaaS |

#### 2.7.1.2. Bases de legitimación

De acuerdo con el artículo 6 del RGPD [23]: la **ejecución de un contrato** (art. 6.1.b) legitima el tratamiento de los datos necesarios para registrar al usuario, gestionar reservas y cobrar; el **cumplimiento de una obligación legal** (art. 6.1.c) legitima la conservación de datos de facturación; y el **consentimiento expreso** (art. 6.1.a) será necesario para comunicaciones comerciales, *cookies* no técnicas [42] y, en su caso, el uso de las conversaciones con el *chatbot* para fines distintos de la propia atención.

#### 2.7.1.3. Medidas de privacidad desde el diseño y por defecto

Siguiendo los principios de *Privacy by Design* y *Privacy by Default* [43], recogidos en el artículo 25 del RGPD [23] y desarrollados por la AEPD [38], se adoptan las siguientes medidas:

- **Control de accesos basado en roles** (cliente, empresa proveedora, administrador) implementado en el *backend* mediante tokens JWT [27] y *middlewares* de autorización de Express, de forma que cada empresa solo accede a sus propios vehículos y reservas.
- **Almacenamiento seguro de credenciales** mediante algoritmos de *hashing* adaptativos con sal (bcrypt, Argon2id), conforme a las recomendaciones de OWASP [44]; el *backend* aplica bcrypt antes de almacenar cualquier contraseña en la base de datos.
- **Minimización de datos**: solo se solicitan los datos estrictamente necesarios para cada finalidad; los datos de tarjeta nunca llegan a la plataforma, porque el pago se delega en la entidad bancaria [37].
- **Política de retención y eliminación**: los datos de cuenta se suprimen o anonimizan tras la baja del usuario, salvo los documentos contables y justificantes, que se conservan durante seis años conforme al artículo 30 del Código de Comercio [45]; las conversaciones con el *chatbot* se eliminan a los 30 días y los datos del permiso de conducir se suprimen al finalizar la relación contractual, salvo obligación legal de conservación.
- **Cifrado y configuración segura:** las comunicaciones viajan cifradas (HTTPS/TLS) y MongoDB Atlas cifra los datos en reposo [33]; el clúster se configurará en una región de la Unión Europea, y las claves y credenciales se guardan en variables de entorno, nunca en el código [26].

Asimismo, puesto que la plataforma incorpora un asistente conversacional basado en IA, el Reglamento (UE) 2024/1689 de Inteligencia Artificial [46] obliga a informar de forma clara a las personas usuarias de que están interactuando con un sistema de IA (art. 50).

### 2.7.2. Propiedad intelectual y licencias

En España, los programas de ordenador están protegidos por el Texto Refundido de la Ley de Propiedad Intelectual [47] (arts. 95 y ss.), por lo que deben analizarse tanto los derechos sobre el código propio como las licencias de los componentes de terceros.

#### 2.7.2.1. Licencia del proyecto

Dado que MAHARent se concibe como un servicio SaaS con modelo de negocio comercial, se recomienda una **licencia propietaria**, que permite proteger el código y la lógica de negocio. La titularidad de los derechos sobre el código corresponde a sus autores, los integrantes del equipo [47], sin perjuicio de las condiciones que el centro educativo establezca para la difusión de los proyectos académicos. El repositorio incluirá un fichero `LICENSE` con la mención «Todos los derechos reservados» y un fichero `THIRD-PARTY-NOTICES` con los avisos de las dependencias.

#### 2.7.2.2. Inventario de licencias de dependencias

**Tabla 2.9.** Inventario de licencias de dependencias.

| Componente | Licencia | Compatibilidad con uso propietario |
|---|---|---|
| Node.js [30] | MIT [48] | Compatible |
| Express y Mongoose [31], [34] | MIT | Compatible |
| React [28] | MIT | Compatible |
| Docker Engine y Docker Compose [35] | Apache 2.0 [49] | Compatible |
| Especificación glTF 2.0 [12] | Estándar abierto libre de *royalties* | Compatible |
| Git | GPL v2 (herramienta de desarrollo; no se distribuye con el producto) | No afecta al producto |
| MongoDB Atlas, Vercel, Render | Términos de servicio (servicios en la nube, no licencias de código) | Compatible como servicio |
| Servicio de generación de modelos 3D con IA | Términos de servicio; verificar los derechos de uso comercial de los modelos generados | Compatible como servicio |
| Fuente Inter e iconos Lucide | SIL Open Font License 1.1 / ISC | Compatible |

Las licencias permisivas identificadas (MIT y Apache 2.0) son compatibles entre sí y con una licencia propietaria, siempre que se conserven los avisos de *copyright* y, en el caso de Apache 2.0, el fichero NOTICE. Deberá evitarse la incorporación de componentes con licencias de *copyleft* fuerte en red (como AGPL) sin un análisis previo.

### 2.7.3. Accesibilidad y otros requisitos aplicables

Desde el 28 de junio de 2025, la Ley 11/2023 [50], que transpone la Directiva (UE) 2019/882 sobre requisitos de accesibilidad de productos y servicios [51], exige que los servicios de comercio electrónico dirigidos a consumidores sean accesibles. MAHARent, como plataforma de contratación en línea, debe por tanto adoptar las pautas WCAG [24] y la norma UNE-EN 301 549 [52].

#### 2.7.3.1. Principios de accesibilidad adoptados

Se adopta como objetivo el **nivel de conformidad AA de las WCAG 2.2** [24], referenciado por la norma UNE-EN 301 549 [52], organizando las decisiones según sus cuatro principios: perceptible, operable, comprensible y robusto.

#### 2.7.3.2. Justificación de decisiones en la interfaz

- **Contraste de color:** relación mínima de 4,5:1 para texto normal y 3:1 para texto grande y componentes de interfaz [24]. Se ha medido el contraste de la paleta corporativa definida en el estudio de identidad de marca (Tabla 2.9b).
- **Navegación por teclado:** todos los controles (calendarios, filtros, *toggles*, visor 3D) serán accesibles mediante teclado, con un orden de tabulación lógico y un foco visible.
- **Tamaño de letra escalable:** uso de unidades relativas, de modo que la interfaz admita ampliaciones de hasta el 200 % sin pérdida de contenido.
- **Textos alternativos y ayudas contextuales:** el visor 3D contará con una alternativa textual y una galería de imágenes con texto alternativo; los formularios dispondrán de etiquetas y mensajes de error asociados para lectores de pantalla.
- **Animaciones:** se respetará la preferencia del sistema de reducción de movimiento, de modo que las microinteracciones no sean un obstáculo.

**Tabla 2.9b.** Contraste de la paleta corporativa según WCAG 2.2 [24] (mínimo de 4,5:1 para texto normal).

| Combinación | Ratio de contraste | Resultado | Uso permitido |
|---|---|---|---|
| Azul marino `#0F3D5C` sobre gris claro `#E8EBEF` | 9,5:1 | Cumple AA | Títulos y texto principal |
| Gris pizarra `#4A5568` sobre gris claro `#E8EBEF` | 6,3:1 | Cumple AA | Texto secundario e iconos |
| Azul medio `#2E6E95` sobre gris claro `#E8EBEF` | 4,7:1 | Cumple AA (justo) | Etiquetas y elementos de apoyo |
| Ámbar `#F2A93B` sobre gris claro `#E8EBEF` | 1,7:1 | No cumple | No se usa para texto |
| Azul marino `#0F3D5C` sobre ámbar `#F2A93B` | 5,7:1 | Cumple AA | Botones, precios y disponibilidad |

La medición muestra que el ámbar, color de acento de la marca para botones, precios y disponibilidad, no puede utilizarse como color de texto sobre los fondos claros. La decisión de diseño es emplearlo siempre como color de fondo, con texto en azul marino encima.

Superados los análisis de viabilidad, resta anticipar los obstáculos que podrían comprometer la ejecución del proyecto.

## 2.8. Análisis de riesgos inicial

La gestión de riesgos se ha planteado siguiendo el proceso de identificación, análisis, evaluación y tratamiento descrito en la norma ISO 31000 [53].

### 2.8.1. Identificación de riesgos

A partir de los apartados anteriores se identifican riesgos técnicos (complejidad del 3D y la IA, rendimiento en dispositivos antiguos), de planificación (curva de aprendizaje, variaciones de alcance), operativos (dependencia de servicios externos, concurrencia en reservas), legales (protección de datos, accesibilidad) y de equipo (disponibilidad de sus integrantes).

### 2.8.2. Evaluación

Cada riesgo se clasifica por su probabilidad (Baja, Media, Alta) y su impacto (Bajo, Medio, Alto). La severidad resulta de combinar ambos valores asignando 1, 2 y 3 puntos a cada nivel: **Crítica** (≥ 6), **Moderada** (3–4) y **Baja** (≤ 2).

### 2.8.3. Plan de mitigación

Para cada riesgo se define una medida de prevención, orientada a reducir su probabilidad, y un plan de contingencia, que se activará si el riesgo llega a materializarse. Los riesgos se revisarán en cada *Sprint Review* y *Sprint Retrospective* [1].

### 2.8.4. Aportación documental

#### 2.8.4.1. Matriz de gestión de riesgos

**Tabla 2.10.** Matriz de gestión de riesgos.

| ID | Descripción | Probabilidad | Impacto | Severidad | Medida de prevención | Plan de contingencia |
|---|---|---|---|---|---|---|
| R-01 | Retraso por la curva de aprendizaje de WebGL/glTF y de la generación 3D con IA | Alta | Alto | Crítica (9) | *Spike* técnico temprano; formación planificada | Sustituir el visor 3D por una galería 360° de imágenes en el MVP |
| R-02 | Calidad o coste inasumible del servicio de IA (NLP / *chatbot* / 3D) | Media | Alto | Crítica (6) | Prueba de concepto y comparación de proveedores; límites de uso | Búsqueda por filtros tradicionales; *chatbot* con respuestas predefinidas |
| R-03 | Bajo rendimiento del visor 3D en equipos o móviles antiguos | Media | Medio | Moderada (4) | Modelos glTF optimizados, carga diferida | Detección de WebGL y alternativa en 2D |
| R-04 | Variaciones del alcance (*scope creep*) por el número de funcionalidades diferenciales | Alta | Alto | Crítica (9) | Definir MVP y priorizar el *Product Backlog* con el PO | Trasladar funcionalidades a sprints posteriores |
| R-05 | Solapamiento de reservas por concurrencia | Media | Alto | Crítica (6) | Validación de disponibilidad en el *backend* y transacciones multidocumento en MongoDB | Proceso de resolución manual y notificación al cliente |
| R-06 | Errores en la conciliación de pagos con la entidad bancaria | Media | Alto | Crítica (6) | Flujo de estados de la reserva (*Solicitado*, *Pendiente*, *Confirmado*, *Rechazado*) y pruebas con la entidad | Conciliación manual con los justificantes bancarios |
| R-07 | Incumplimiento del RGPD/LOPDGDD o brecha de datos | Baja | Alto | Moderada (3) | *Privacy by Design*, control de acceso con JWT, revisión de políticas | Protocolo de notificación de brechas en 72 h (art. 33 RGPD) [23] |
| R-08 | Incumplimiento de requisitos de accesibilidad | Media | Medio | Moderada (4) | Lista de verificación WCAG en la *Definition of Done* | Auditoría y corrección prioritaria |
| R-09 | Cambios en precios o condiciones de los servicios en la nube (MongoDB Atlas, Render, Vercel) | Baja | Medio | Baja (2) | Seguimiento de condiciones; configuración en variables de entorno | Migración a otro proveedor *cloud* gracias a los contenedores Docker |
| R-10 | Indisponibilidad temporal de miembros del equipo | Media | Medio | Moderada (4) | Documentación continua y reparto de conocimiento | Redistribución de tareas en el *Sprint Planning* |
| R-11 | Baja adopción por parte de pymes proveedoras (catálogo vacío) | Media | Alto | Crítica (6) | Validación temprana con empresas; datos de demostración | Ajustar el modelo de monetización y el *onboarding* |

La valoración de probabilidades e impactos es inicial y se revisará en cada *Sprint Review*, actualizando la matriz en GitHub Projects.

## 2.9. Conclusiones del capítulo

El análisis realizado durante el segundo sprint confirma la existencia de una necesidad real en el sector de la movilidad flexible: el mercado está fragmentado por plazos contractuales, las pymes carecen de un canal digital abierto y los procesos de contratación siguen siendo, en buena parte, manuales. El estudio de *benchmarking* demuestra que ninguna de las alternativas analizadas combina flexibilidad temporal total, apertura a proveedores externos y contratación íntegramente digital, lo que constituye el espacio diferencial de MAHARent. El proyecto se considera técnicamente viable con un stack ligero desplegado íntegramente en la nube, en el que solo el visor 3D requiere una prueba de concepto previa, y legalmente viable siempre que se apliquen las medidas de protección de datos, licenciamiento y accesibilidad descritas. En el plano económico, con una inversión estimada de 26.939 € y un modelo *freemium* con comisión por reserva, el proyecto recupera la inversión durante el segundo año de explotación, por lo que se considera económicamente sostenible bajo las hipótesis planteadas, que se ajustarán con los datos del piloto.

## Referencias del capítulo

[1] K. Schwaber y J. Sutherland, «The Scrum Guide: The Definitive Guide to Scrum: The Rules of the Game», nov. 2020. [En línea]. Disponible en: https://scrumguides.org/scrum-guide.html

[2] GitHub, «About Projects», GitHub Docs. [En línea]. Disponible en: https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects

[3] Asociación Española de Renting de Vehículos (AER), «Estadísticas del sector del renting y datos de matriculaciones en España», AER Prensa, 2026. [En línea]. Disponible en: https://ae-renting.es/prensa-noticias/notas-de-prensa/

[4] El Periódico, «El renting de vehículos rompe récords en España: supera el millón de unidades en parque», Sección Motor, jul. 2026. [En línea]. Disponible en: https://www.elperiodico.com/es/motor/20260721/renting-vehiculos-rompe-records-espana-132640614

[5] Motor16, «Particulares y autónomos impulsan el récord del renting en España», Motor16 Digital, jul. 2026. [En línea]. Disponible en: https://www.motor16.com/las-ultimas-noticias/record-renting-espana-2026/

[6] Deloitte Global, «Vehicle-as-a-Service: Shifting Customer Demand from Ownership to Usage-Based Models», Deloitte Automotive Insights, 2025. [En línea]. Disponible en: https://www.deloitte.com/perspectives/vehicle-as-a-service.html

[7] McKinsey Center for Future Mobility, «How Consumers Are Reshaping the Future of Mobility: Flexible Car Subscriptions and User Trends», McKinsey & Company Insights, jul. 2026. [En línea]. Disponible en: https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/our-insights/

[8] Nielsen Norman Group (NN/g), «Ecommerce User Experience (UX) Research and Design Guidelines», NN/g Reports, 2025. [En línea]. Disponible en: https://www.nngroup.com/category/ecommerce/

[9] Gartner Research, «Magic Quadrant for Conversational AI Platforms and Natural Language Processing in Enterprise Commerce», Gartner Reports, 2026. [En línea]. Disponible en: https://www.gartner.com/en/documents/8098097

[10] A. Cooper, *The Inmates Are Running the Asylum: Why High-Tech Products Drive Us Crazy and How to Restore the Sanity*. Indianapolis, IN, EE. UU.: Sams Publishing, 1999.

[11] Shopify Commerce Research, «AI 3D Model Generation: Top Tools for Ecommerce and Conversion Uplift Reports», Shopify Blog, 2026. [En línea]. Disponible en: https://www.shopify.com/il/blog/ai-3d-model-generation

[12] Khronos Group, «glTF 2.0 Specification and WebGL Rendering Ecosystem for 3D Commerce», Khronos Open Standards Documentation, 2026. [En línea]. Disponible en: https://www.khronos.org/gltf/

[13] P. Jittrapirom, V. Caiati, A.-M. Feneri, S. Ebrahimigharehbaghi, M. J. Alonso-González y J. Narayan, «Mobility as a Service: A critical review of definitions, assessments of schemes, and key challenges», *Urban Planning*, vol. 2, n.º 2, pp. 13–25, 2017, doi: 10.17645/up.v2i2.931.

[14] Object Management Group, «OMG Unified Modeling Language (OMG UML), Version 2.5.1», formal/17-12-05, dic. 2017. [En línea]. Disponible en: https://www.omg.org/spec/UML/2.5.1

[15] Swipcar, «Swipcar — Renting de coches para particulares y empresas», sitio web oficial. [En línea]. Disponible en: https://swipcar.com

[16] Renting Finders, «Renting Finders — Comparador de renting de coches», sitio web oficial. [En línea]. Disponible en: https://www.rentingfinders.com

[17] Bipi, «Bipi — Suscripción de coches», sitio web oficial. [En línea]. Disponible en: https://www.bipicar.com

[18] Revel, sitio web oficial. [En línea]. Disponible en: https://revel.es

[19] Rentalcars.com, «Rentalcars — Alquiler de coches», sitio web oficial. [En línea]. Disponible en: https://www.rentalcars.com

[20] Pepecar, «Pepecar — Alquiler de coches baratos», sitio web oficial. [En línea]. Disponible en: https://www.pepecar.com

[21] Project Management Institute, *A Guide to the Project Management Body of Knowledge (PMBOK Guide)*, 7.ª ed. Newtown Square, PA, EE. UU.: PMI, 2021.

[22] A. L. Mendelow, «Environmental scanning: The impact of the stakeholder concept», en *Proc. 2nd Int. Conf. Information Systems (ICIS)*, Cambridge, MA, EE. UU., 1981, pp. 407–418.

[23] Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (Reglamento General de Protección de Datos), *Diario Oficial de la Unión Europea*, L 119, pp. 1–88, 4 may. 2016. [En línea]. Disponible en: https://eur-lex.europa.eu/eli/reg/2016/679/oj

[24] W3C, «Web Content Accessibility Guidelines (WCAG) 2.2», W3C Recommendation, 5 oct. 2023. [En línea]. Disponible en: https://www.w3.org/TR/WCAG22/

[25] International Organization for Standardization / International Electrotechnical Commission, *ISO/IEC 25010:2023. Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model*. Ginebra, Suiza: ISO, 2023.

[26] A. Wiggins, «The Twelve-Factor App», 2017. [En línea]. Disponible en: https://12factor.net/es/

[27] M. Jones, J. Bradley y N. Sakimura, «JSON Web Token (JWT)», IETF, RFC 7519, may. 2015, doi: 10.17487/RFC7519.

[28] Meta Open Source, «React: The library for web and native user interfaces». [En línea]. Disponible en: https://react.dev

[29] Vercel Inc., «Vercel Documentation» y «Vercel Pricing». [En línea]. Disponible en: https://vercel.com/docs y https://vercel.com/pricing.

[30] OpenJS Foundation, «Node.js Documentation». [En línea]. Disponible en: https://nodejs.org/docs/latest/api/

[31] OpenJS Foundation, «Express: Fast, unopinionated, minimalist web framework for Node.js». [En línea]. Disponible en: https://expressjs.com

[32] Render Services, Inc., «Render Docs». [En línea]. Disponible en: https://render.com/docs

[33] MongoDB, Inc., «MongoDB Atlas Documentation». [En línea]. Disponible en: https://www.mongodb.com/docs/atlas/

[34] Mongoose contributors, «Mongoose ODM Documentation». [En línea]. Disponible en: https://mongoosejs.com/docs/

[35] Docker, Inc., «Docker Documentation». [En línea]. Disponible en: https://docs.docker.com

[36] Khronos Group, «WebGL 2.0 Specification». [En línea]. Disponible en: https://registry.khronos.org/webgl/specs/latest/2.0/

[37] PCI Security Standards Council, «Payment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1», jun. 2024. [En línea]. Disponible en: https://www.pcisecuritystandards.org/document_library/

[38] Agencia Española de Protección de Datos, «Guía de Privacidad desde el Diseño», oct. 2019. [En línea]. Disponible en: https://www.aepd.es/guias/guia-privacidad-desde-diseno.pdf

[39] Google, «Web Vitals», web.dev. [En línea]. Disponible en: https://web.dev/articles/vitals

[40] Google, «Lighthouse overview», Chrome for Developers. [En línea]. Disponible en: https://developer.chrome.com/docs/lighthouse/overview

[41] Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, *Boletín Oficial del Estado*, núm. 294, 6 dic. 2018. [En línea]. Disponible en: https://www.boe.es/eli/es/lo/2018/12/05/3/con

[42] Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, *Boletín Oficial del Estado*, núm. 166, 12 jul. 2002. [En línea]. Disponible en: https://www.boe.es/eli/es/l/2002/07/11/34/con

[43] A. Cavoukian, «Privacy by Design: The 7 Foundational Principles», Information and Privacy Commissioner of Ontario, Toronto, Canadá, 2009 (rev. 2011). [En línea]. Disponible en: https://www.ipc.on.ca/

[44] OWASP Foundation, «Password Storage Cheat Sheet», OWASP Cheat Sheet Series. [En línea]. Disponible en: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html

[45] Real Decreto de 22 de agosto de 1885 por el que se publica el Código de Comercio, *Gaceta de Madrid*, núm. 289, 16 oct. 1885, art. 30. [En línea]. Disponible en: https://www.boe.es/eli/es/rd/1885/08/22/(1)/con

[46] Reglamento (UE) 2024/1689 del Parlamento Europeo y del Consejo, de 13 de junio de 2024, por el que se establecen normas armonizadas en materia de inteligencia artificial (Reglamento de Inteligencia Artificial), *Diario Oficial de la Unión Europea*, L, 12 jul. 2024. [En línea]. Disponible en: https://eur-lex.europa.eu/eli/reg/2024/1689/oj

[47] Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual, *Boletín Oficial del Estado*, núm. 97, 22 abr. 1996. [En línea]. Disponible en: https://www.boe.es/eli/es/rdlg/1996/04/12/1/con

[48] Open Source Initiative, «The MIT License». [En línea]. Disponible en: https://opensource.org/license/mit

[49] The Apache Software Foundation, «Apache License, Version 2.0», ene. 2004. [En línea]. Disponible en: https://www.apache.org/licenses/LICENSE-2.0

[50] Ley 11/2023, de 8 de mayo, de trasposición de Directivas de la Unión Europea en materia de accesibilidad de determinados productos y servicios, migración de personas altamente cualificadas, tributaria y digitalización de actuaciones notariales y registrales, *Boletín Oficial del Estado*, núm. 110, 9 may. 2023. [En línea]. Disponible en: https://www.boe.es/eli/es/l/2023/05/08/11/con

[51] Directiva (UE) 2019/882 del Parlamento Europeo y del Consejo, de 17 de abril de 2019, sobre los requisitos de accesibilidad de los productos y servicios, *Diario Oficial de la Unión Europea*, L 151, pp. 70–115, 7 jun. 2019. [En línea]. Disponible en: https://eur-lex.europa.eu/eli/dir/2019/882/oj

[52] UNE, *UNE-EN 301 549 V3.2.1:2022. Requisitos de accesibilidad para productos y servicios TIC*. Madrid, España: Asociación Española de Normalización, 2022.

[53] International Organization for Standardization, *ISO 31000:2018. Risk management — Guidelines*. Ginebra, Suiza: ISO, 2018.

