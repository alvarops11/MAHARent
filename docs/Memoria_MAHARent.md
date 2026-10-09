

# MEMORIA DEL PROYECTO INTERMODULAR

Ciclo Formativo de Grado Superior en DAW

---

# MAHARent

## Plataforma SaaS y Marketplace para la Gestión y Contratación de Flotas de Renting

---

Manuel Parrilla Lahoz  
Álvaro Pérez Salvador  
Hugo del Rio Barranco  
Adrián López Atalaya

**Profesores**

Willman Acosta Lugo  
Manuel Granados López

---

**Módulo Profesional:** 0492 \- Proyecto Intermodular  
**Curso Académico:** 2026 \- 2027

**DECLARACIÓN DE AUTORÍA Y ORIGINALIDAD** 

*Adrián López Atalaya,*  Álvaro Pérez Salvador, Hugo del río Barranco y *Manuel Parrilla Lahoz*, estudiantes del Ciclo Formativo de Grado Superior en *DAW* en el centro *Campus Cámara Comercio Sevilla*,

**DECLARAN:**

Que la presente memoria titulada **"MAHARent: Plataforma SaaS y Marketplace para la Gestión y Contratación de Flotas de Renting"**, así como el código fuente y artefactos asociados, corresponden a un trabajo original desarrollado de forma grupal para el módulo 0492 – Proyecto Intermodular.

Que todas las fuentes consultadas, librerías de terceros y referencias externas utilizadas han sido debidamente citadas según el estándar IEEE.  
En Sevilla, a Febrero de 2027\.

***Firma del alumnado***

**RESUMEN EJECUTIVO**  
\[ESPACIO RESUMEN\]  
\[ESPACIO ABSTRACT\]

Marco de Calidad Software y Cumplimiento Normativo (ISO/IEC 25010 y RGPD) 

**MAHARent** se diseña bajo la norma **ISO/IEC 25010** para garantizar altos estándares de usabilidad, mantenibilidad y seguridad, integrando además el principio de **Privacidad desde el Diseño (Art. 25 del RGPD).** Esto se traduce en la minimización proactiva de datos personales, transparencia en la gestión de contratos y protección técnica mediante cifrado y control de acceso por roles (RBAC), consolidando un producto software seguro, escalable y respetuoso con la normativa vigente. 

**Palabras clave:** 

# Índice

**[1\. INTRODUCCIÓN	5](#introducción)**

[1.1. Contexto del proyecto e idea general	5](#1.1.-contexto-del-proyecto-e-idea-general)

[1.2. Problema o necesidad detectada (Justificación)	5](#1.2.-problema-o-necesidad-detectada-\(justificación\))

[1.3. Propuesta de solución (Plataforma MAHARent)	6](#1.3.-propuesta-de-solución-\(plataforma-maharent\))

[1.4. Objetivos del proyecto	7](#1.4.-objetivos-del-proyecto)

[1.4.1. Objetivo general	7](#1.4.1.-objetivo-general)

[1.4.2. Objetivos específicos	7](#1.4.2.-objetivos-específicos)

[1.5. Alcance del proyecto (SaaS y Marketplace)	7](#1.5.-alcance-del-proyecto-\(saas-y-marketplace\))

[1.6. Limitaciones y exclusiones	8](#1.6.-limitaciones-y-exclusiones)

[1.7. Estructura de la memoria	9](#1.7.-estructura-de-la-memoria)

1. #  INTRODUCCIÓN {#introducción}

## 1.1. Contexto del proyecto e idea general {#1.1.-contexto-del-proyecto-e-idea-general}

El sector del automóvil en España atraviesa una transición acelerada desde la propiedad del vehículo (*ownership*) hacia modelos de pago por uso (*usership*), superando el millón de unidades de renting en circulación gracias al impulso creciente de particulares, autónomos y PYMEs. [\[1\]](https://www.zotero.org/google-docs/?rEAULy)

Sin embargo, las pequeñas empresas y concesionarios independientes de renting afrontan una barrera tecnológica crítica. Al carecer de recursos para desarrollar plataformas propias, gestionan sus flotas mediante procesos manuales e ineficientes (hojas de cálculo y llamadas), lo que provoca errores de programación y tiempos muertos con vehículos inmovilizados en stock.

Para resolver esta brecha y democratizar la tecnología en el sector, surge **MAHARent**: una solución web híbrida que combina un panel **SaaS B2B** para que las PYMEs digitalicen la gestión de sus flotas y un **Marketplace B2C** centralizado donde los clientes pueden explorar el catálogo, consultar la disponibilidad en tiempo real e interactuar con visores 3D y contratación flexible.

## 1.2. Problema o necesidad detectada (Justificación) {#1.2.-problema-o-necesidad-detectada-(justificación)}

El estudio comparativo de benchmarking realizado sobre las plataformas actuales de movilidad identifica tres categorías principales de competidores:

* **Agregadores de renting tradicional** (ej. Swipcar, Renting Finders): Exigen contratos de larga duración (de 24 a 60 meses), carecen de visibilidad de disponibilidad en tiempo real y emplean procesos de contratación manuales y lentos sin integración de pago directo en línea.

* **Plataformas de suscripción y micro-renting** (ej. Bipi, Revel): Aunque ofrecen una experiencia Mobile-First moderna de estilo neobancario, operan con flotas cerradas de gestión propia que excluyen a las PYMEs locales del sector y requieren compromisos de 12 a 36 meses para acceder a tarifas competitivas.

* **Comparadores Rent-A-Car** (ej. Rentalcars, Pepecar): Están orientados exclusivamente al alquiler vacacional de muy corta duración (de 1 a 15 días), con precios diarios elevados y asignación de vehículos mediante categorías genéricas («o similar») que no garantizan el modelo exacto.

Estas limitaciones dejan una doble brecha no resuelta en el mercado: por un lado, la falta de flexibilidad para usuarios que buscan horizontes temporales intermedios sin compromisos multianuales rígidos; por otro, la carencia de herramientas software autónomas que permitan a las PYMEs y concesionarios locales digitalizar su oferta y gestionar sus flotas en igualdad de condiciones. [\[2\]](https://www.zotero.org/google-docs/?7qwQNe)

## 1.3. Propuesta de solución (Plataforma MAHARent) {#1.3.-propuesta-de-solución-(plataforma-maharent)}

Para dar respuesta a las limitaciones identificadas en el mercado, **MAHARent** articula una plataforma web híbrida (SaaS B2B y Marketplace B2C) fundamentada en **cinco ejes de valor diferenciador**, jerarquizados por su impacto estructural y comercial:

1. **Democratización B2B mediante SaaS:** Proporciona un panel de control autónomo (*Vendor Dashboard*) para que las PYMEs y concesionarios locales de renting digitalicen la administración de sus inventarios, calendarios de ocupación y solicitudes, compitiendo en igualdad de condiciones tecnológicas frente a las grandes plataformas.

2. **Tarificación Flexible con Descuentos por Tramos:** Resuelve la brecha entre el alquiler vacacional y el renting a largo plazo mediante un modelo de precios adaptativo que aplica descuentos progresivos automáticos al alcanzar tramos mensuales o de larga duración.

3. **Indicador Dinámico de Liberación en Tiempo Real:** Elimina la opacidad del stock tradicional mostrando un contador dinámico con los días restantes para que un vehículo vuelva a estar disponible, permitiendo reservas anticipadas transparentes.

4. **Búsqueda Semántica y Asistente Virtual :** Supera los sistemas de filtrado rígidos mediante un motor de Procesamiento de Lenguaje Natural capaz de interpretar intenciones de búsqueda (ej. *«SUV económico para viajar en familia»*) y un *chatbot* conversacional inteligente.

5. **Visualización 3D Inmersiva con IA (Diferenciador Visual):** Transforma las galerías fotográficas estáticas en modelos 3D interactivos en 360°, generados automáticamente por inteligencia artificial a partir de las imágenes subidas por las empresas desde su panel.

## 1.4. Objetivos del proyecto {#1.4.-objetivos-del-proyecto}

### 1.4.1. Objetivo general {#1.4.1.-objetivo-general}

Desarrollar una **plataforma web integral** para la gestión y contratación de flotas de renting, fundamentada en un diseño **Mobile-First** y servicios web **API REST**, automatizando las operaciones de las empresas y simplificando la contratación para los usuarios.

### 1.4.2. Objetivos específicos {#1.4.2.-objetivos-específicos}

1. **Diseñar y normalizar el modelo de datos relacional** para la gestión de usuarios, empresas, vehículos y solicitudes de alquiler.

2. **Implementar una API REST modular** que centralice la lógica de negocio y la seguridad mediante control de acceso por roles (RBAC).

3. **Desarrollar el panel SaaS B2B (** **Vendor Dashboard** **)** para que las empresas administren inventarios, calendarios, precios y solicitudes.

4. **Crear la interfaz del Marketplace B2C (** **Mobile-First** **)** para la consulta de catálogo y formalización de solicitudes de renting.

5. **Implementar el indicador dinámico de tiempo restante de liberación** para mostrar la disponibilidad de la flota en tiempo real.

6. **Integrar el buscador semántico (NLP) y el asistente virtual con IA** para interpretar consultas en lenguaje natural.

7. **Desarrollar el módulo de visualización 3D interactiva en 360°** a partir de las fotografías del vehículo.

8. **Aplicar los estándares de calidad ISO/IEC 25010 y el cumplimiento normativo del RGPD** de forma transversal en todo el desarrollo.

## 1.5. Alcance del proyecto (SaaS y Marketplace) {#1.5.-alcance-del-proyecto-(saas-y-marketplace)}

El Producto Mínimo Viable (MVP) de **MAHARent** comprende la concepción, diseño, desarrollo y fase de pruebas de una plataforma concebida para operar a **nivel nacional en España**, conectando en un único punto neutro la oferta de PYMEs y concesionarios de todo el territorio peninsular e insular con clientes de cualquier provincia. Sus áreas funcionales principales son:

* **Autenticación y seguridad por roles (RBAC):** Control de acceso diferenciado para los tres perfiles del sistema: Administrador general de la plataforma, Empresa de renting (proveedor B2B) y Cliente final (usuario B2C).

* **Gestión del ciclo de vida del vehículo (** **Vendor Dashboard** **B2B):** Módulo de administración autónomo para que PYMEs y gestores de flota de todo el ámbito nacional digitalicen su catálogo, gestionen características técnicas, configuren tarifas flexibles por tramos y controlen la disponibilidad en tiempo real.

* **Catálogo público e innovación B2C (** **Marketplace Nacional** **):** Interfaz pública centralizada y optimizada para dispositivos móviles (*Mobile-First*) que unifica la oferta de vehículos disponible a nivel nacional, integrando el motor de búsqueda semántica por lenguaje natural (NLP), el asistente virtual conversacional y el visor 3D interactivo en 360°.

* **Tramitación y seguimiento de solicitudes:** Módulo operativo para la gestión completa del flujo de alquiler sin barreras geográficas, permitiendo a usuarios de todo el país solicitar vehículos en cualquier ubicación y a las empresas gestionar la aprobación y seguimiento del contrato.

## 1.6. Limitaciones y exclusiones {#1.6.-limitaciones-y-exclusiones}

Para delimitar el desarrollo a la carga horaria del módulo intermodular y garantizar su culminación dentro del curso académico, se establecen las siguientes exclusiones:

* **Integración con pasarelas de pago bancarias reales:** La validación de contrataciones se realiza mediante simulación lógica de estados de solicitud.

* **Dispositivos de telemetría / GPS en tiempo real:** No se contempla el seguimiento IoT de la ubicación física o estado mecánico del vehículo durante la circulación.

* **Evaluación automatizada de solvencia crediticia ( Scoring bancario)**: El análisis de riesgo financiero se delega como proceso manual en las empresas de renting.

* **Alcance geográfico nacional:** Orientado inicialmente al mercado español, permitiendo que empresas de renting de cualquier comunidad autónoma gestionen y publiquen sus vehículos en un Marketplace común, facilitando la conexión entre proveedores y clientes a nivel nacional. 

## 1.7. Estructura de la memoria {#1.7.-estructura-de-la-memoria}

A continuación se esquematiza el desglose de contenidos que componen este capítulo introductorio:

* **1.1. Contexto del proyecto e idea general**

  * Evolución Macro a Micro del sector del renting en España.

  * Barreras tecnológicas de las PYMEs locales y presentación del ecosistema **MAHARent**.

* **1.2. Problema o necesidad detectada (Justificación)**

  * Hallazgos del *benchmarking* (agregadores, suscripciones y *rent-a-car*).

  * Doble brecha detectada: rigidez para el usuario y falta de digitalización B2B.

* **1.3. Propuesta de solución (Plataforma MAHARent) y Factores Diferenciadores**

  * Ejes de valor jerarquizados por prioridad:

    1. Democratización B2B mediante SaaS (*Vendor Dashboard*).

    2. Tarificación flexible con descuentos por tramos.

    3. Indicador dinámico de liberación en tiempo real.

    4. Búsqueda semántica (NLP) y asistente virtual.

    5. Visualización 3D inmersiva con IA.

* **1.4. Objetivos del proyecto**

  * **1.4.1. Objetivo general:** Desarrollo de la plataforma híbrida web API REST y *Mobile-First*.

  * **1.4.2. Objetivos específicos:** Priorización técnica desde el diseño de la BD relacional y la seguridad RBAC hasta las tecnologías de IA, 3D, estándar ISO/IEC 25010 y RGPD.

* **1.5. Alcance del proyecto**

  * Cobertura a nivel nacional en España.

  * Delimitación de las 4 áreas funcionales del Producto Mínimo Viable (MVP).

* **1.6. Limitaciones y exclusiones**

  * Exclusión de pasarelas de pago reales (simulación lógica).

  * Exclusión de telemetría IoT/GPS y evaluación de *scoring* crediticio.

* **1.7. Estructura del capítulo**

  * Guía esquemática del mapa conceptual de la introducción.

### REFERENCIAS

Asociación Española de Renting de Vehículos (AER), «Estadísticas del sector del renting y datos de matriculaciones en España», *AER Prensa*, 2026\. \[En línea\]. Disponible en: [https\://ae-renting.es/prensa-noticias/notas-de-prensa/](https://ae-renting.es/prensa-noticias/notas-de-prensa/) \[Accedido: 29-sep-2026\].

*El Periódico*, «El renting de vehículos rompe récords en España: supera el millón de unidades en parque», *Sección Motor*, jul. 2026\. \[En línea\]. Disponible en: [https\://www\.elperiodico.com/es/motor/20260721/renting-vehiculos-rompe-records-espana-132640614](https://www.elperiodico.com/es/motor/20260721/renting-vehiculos-rompe-records-espana-132640614) \[Accedido: 29-sep-2026\].

Gartner Research, «Magic Quadrant for Conversational AI Platforms and Natural Language Processing in Enterprise Commerce», *Gartner Reports*, 2026\. \[En línea\]. Disponible en: [https\://www\.gartner.com/en/documents/8098097](https://www.gartner.com/en/documents/8098097) \[Accedido: 29-sep-2026\].

*Motor16*, «Particulares y autónomos impulsan el récord del renting en España», *Motor16 Digital*, jul. 2026\. \[En línea\]. Disponible en: [https\://www\.motor16.com/las-ultimas-noticias/record-renting-espana-2026/](https://www.motor16.com/las-ultimas-noticias/record-renting-espana-2026/) \[Accedido: 29-sep-2026\].

Shopify Commerce Research, «AI 3D Model Generation: Top Tools for Ecommerce and Conversion Uplift Reports», *Shopify Blog*, 2026\. \[En línea\]. Disponible en: [https\://www\.shopify.com/il/blog/ai-3d-model-generation](https://www.shopify.com/il/blog/ai-3d-model-generation) \[Accedido: 29-sep-2026\].

Supabase Open Source, «Supabase Documentation, Storage Buckets, and PostgreSQL Architecture», 2026\. \[En línea\]. Disponible en: [https\://supabase.com/docs](https://supabase.com/docs) \[Accedido: 29-sep-2026\].

Khronos Group, «glTF 2.0 Specification and WebGL Rendering Ecosystem for 3D Commerce», *Khronos Open Standards Documentation*, 2026\. \[En línea\]. Disponible en: [https\://www\.khronos.org/gltf/](https://www.khronos.org/gltf/) \[Accedido: 29-sep-2026\].

Nielsen Norman Group (NN/g), «Ecommerce User Experience (UX) Research and Design Guidelines», *NN/g Reports*, 2025\. \[En línea\]. Disponible en: [https\://www\.nngroup.com/category/ecommerce/](https://www.google.com/search?q=https://www.nngroup.com/category/ecommerce/) \[Accedido: 29-sep-2026\].

Deloitte Global, «Vehicle-as-a-Service: Shifting Customer Demand from Ownership to Usage-Based Models», *Deloitte Automotive Insights*, 2025\. \[En línea\]. Disponible en: [https\://www\.deloitte.com/perspectives/vehicle-as-a-service.html](https://www.google.com/search?q=https://www.deloitte.com/perspectives/vehicle-as-a-service.html) \[Accedido: 29-sep-2026\].

McKinsey Center for Future Mobility, «How Consumers Are Reshaping the Future of Mobility: Flexible Car Subscriptions and User Trends», *McKinsey & Company Insights*, jul. 2026\. \[En línea\]. Disponible en: [https\://www\.mckinsey.com/features/mckinsey-center-for-future-mobility/our-insights/](https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/our-insights/) \[Accedido: 29-sep-2026\].

## 