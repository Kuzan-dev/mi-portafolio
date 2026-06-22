/**
 * =========================================================================
 * PORTFOLIO DATA & CONFIGURATION TEMPLATE
 * =========================================================================
 * Para personalizar este portafolio con tus propios datos, edita los valores
 * en los objetos T (traducciones generales), EXPERIENCE, PROJECTS y PUBLICATIONS.
 */

const T = {
  en: {
    "nav_about": "About",
    "nav_experience": "Experience",
    "nav_projects": "Projects",
    "nav_research": "Certifications",
    "nav_skills": "Skills",
    "nav_contact": "Contact",
    "hero_available": "Open to new opportunities",
    "hero_roles": ["Senior Data Engineer", "Data Engineer", "Software Engineer", "Cloud & ETL Specialist"],
    "hero_bio": "Data Engineer with 3+ years of experience designing, automating, and maintaining ETL/ELT pipelines on Azure. Bridging software engineering and scalable data solutions.",
    "hero_cta_work": "See My Work",
    "hero_cta_contact": "Get in Touch",
    "hero_location": "Lima, Peru",
    "hero_chip1": "Lima, Peru",
    "hero_chip2": "Software Eng. → Data Engineering",
    "hero_chip3": "Cloud Migrations & ETL/ELT",
    "hero_chip4": "Microsoft & GitHub Certified",
    "stat_savings": "Load Time Reduction",
    "stat_savings_sub": "BCP Finance Cloud Migration",
    "stat_records": "Enterprise Clients",
    "stat_records_sub": "TCS, BCP, Repsol, Pacífico, NTT Data",
    "stat_papers": "Cloud Certifications",
    "stat_papers_sub": "DP-700, DP-900 & GH Copilot",
    "stat_exp": "Experience",
    "stat_exp_sub": "Data Engineering & Software",
    "traj_label": "TRAJECTORY",
    "about_heading": "Who I Am",
    "about_bio": "I am an Azure-certified Data Engineer with a strong background in Software Engineering and Mechatronics. Over the last 3+ years, I have built, migrated, and optimized high-performance ETL/ELT pipelines for leading banks, insurance companies, and industries.",
    "about_bio_2": "Specialized in Azure Data Factory, Databricks, PySpark, and SQL. Known for reducing data load times by up to 70% and ensuring production stability for high-volume banking systems. Bachiller in Mechatronics Engineering from Universidad Nacional de Trujillo.",
    "about_edu_heading": "Academic Background",
    "edu": [
      {"degree": "B.Sc. Mechatronics Engineering", "status": "Graduated (2022 II)", "school": "Universidad Nacional de Trujillo", "icon": "GEAR"}
    ],
    "exp_section_label": "Experience",
    "exp_section_heading": "Professional Journey",
    "exp_label": "Experience",
    "exp_heading": "Professional Journey",
    "exp_client": "Client",
    "tab_work": "Work Experience",
    "tab_research": "Certifications & Courses",
    "proj_label": "Projects",
    "proj_heading": "Key Engineering & Data Projects",
    "proj_subheading": "Enterprise-grade data solutions and systems",
    "proj_methodology": "Ecosystem",
    "proj_scale": "Scope",
    "proj_impact": "Impact",
    "research_label": "Certifications",
    "research_heading": "Certifications & Training",
    "research_subheading": "Official cloud/technical certifications and professional development courses.",
    "research_ieee": "Official",
    "research_published": "Certified",
    "research_repository": "Course",
    "research_pending": "In Progress",
    "skills_label": "Skills",
    "skills_heading": "Technical Arsenal",
    "contact_role": "Senior Data Engineer · Lima, Peru",
    "contact_label": "Contact",
    "contact_heading": "Let's Work Together",
    "footer_built": "Built with precision and passion",
    "skill_categories": [
      {"name": "Data Engineering & ETL", "icon": "⚡", "tags": ["ETL/ELT", "Data Integration", "Data Quality", "Production Support", "Lineage & Traceability", "Homologation"]},
      {"name": "Cloud & Orchestration", "icon": "☁️", "tags": ["Azure Data Factory", "Microsoft Azure", "Azure Databricks", "Logic Apps", "IBM DataStage", "Microsoft Fabric"]},
      {"name": "Databases & Engines", "icon": "📊", "tags": ["SQL Server", "SQL Advanced", "Oracle SQL", "PostgreSQL", "MongoDB"]},
      {"name": "Languages & Dev", "icon": "💻", "tags": ["Python", "PySpark", "TypeScript", "JavaScript", "Go"]},
      {"name": "Tools & Environments", "icon": "🛠️", "tags": ["Git", "Docker", "Power BI", "REST APIs", "Playwright"]},
      {"name": "Languages Spoken", "icon": "🗣️", "tags": ["Spanish (Native)", "English (Basic)"]}
    ]
  },
  es: {
    "nav_about": "Sobre Mí",
    "nav_experience": "Experiencia",
    "nav_projects": "Proyectos",
    "nav_research": "Certificaciones",
    "nav_skills": "Habilidades",
    "nav_contact": "Contacto",
    "hero_available": "Disponible para nuevas oportunidades",
    "hero_roles": ["Ingeniero de Datos Senior", "Ingeniero de Datos", "Ingeniero de Software", "Especialista Cloud y ETL"],
    "hero_bio": "Ingeniero de Datos con más de 3 años de experiencia en diseño, automatización y soporte de soluciones ETL/ELT sobre Azure. Uniendo ingeniería de software y soluciones de datos escalables.",
    "hero_cta_work": "Ver Proyectos",
    "hero_cta_contact": "Contáctame",
    "hero_location": "Lima, Perú",
    "hero_chip1": "Lima, Perú",
    "hero_chip2": "Ing. de Software → Ingeniería de Datos",
    "hero_chip3": "Migraciones Cloud y ETL/ELT",
    "hero_chip4": "Certificado por Microsoft y GitHub",
    "stat_savings": "Ahorro/Optimización",
    "stat_savings_sub": "70% reducción de carga en BCP",
    "stat_records": "Clientes Corporativos",
    "stat_records_sub": "TCS, BCP, Repsol, Pacífico, NTT Data",
    "stat_papers": "Certificaciones Cloud",
    "stat_papers_sub": "DP-700, DP-900 y GH Copilot",
    "stat_exp": "Experiencia",
    "stat_exp_sub": "Ingeniería de Datos y Software",
    "traj_label": "TRAYECTORIA",
    "about_heading": "Quién Soy",
    "about_bio": "Soy un Ingeniero de Datos certificado en Azure con una sólida base en Ingeniería de Software y Mecatrónica. En los últimos 3 años, he diseñado, migrado y optimizado pipelines de ETL/ELT de alto rendimiento para bancos, aseguradoras e industrias líderes.",
    "about_bio_2": "Especializado en Azure Data Factory, Databricks, PySpark y SQL. Destacado por reducir tiempos de carga de datos hasta en un 70% y asegurar la continuidad operativa en sistemas bancarios de alto volumen. Bachiller en Ingeniería Mecatrónica por la Universidad Nacional de Trujillo.",
    "about_edu_heading": "Formación Académica",
    "edu": [
      {"degree": "Bachiller de Ingeniería Mecatrónica", "status": "Graduado (2022 II)", "school": "Universidad Nacional de Trujillo", "icon": "GEAR"}
    ],
    "exp_section_label": "Experiencia",
    "exp_section_heading": "Trayectoria Profesional",
    "exp_label": "Experiencia",
    "exp_heading": "Trayectoria Profesional",
    "exp_client": "Cliente",
    "tab_work": "Experiencia Laboral",
    "tab_research": "Certificaciones y Cursos",
    "proj_label": "Proyectos",
    "proj_heading": "Proyectos Clave de Ingeniería y Datos",
    "proj_subheading": "Soluciones y sistemas de datos a escala empresarial",
    "proj_methodology": "Ecosistema",
    "proj_scale": "Alcance",
    "proj_impact": "Impacto",
    "research_label": "Certificaciones",
    "research_heading": "Certificaciones y Cursos",
    "research_subheading": "Certificaciones oficiales en la nube y cursos de desarrollo profesional complementario.",
    "research_ieee": "Oficial",
    "research_published": "Certificado",
    "research_repository": "Curso",
    "research_pending": "En Curso",
    "skills_label": "Habilidades",
    "skills_heading": "Arsenal Técnico",
    "contact_role": "Ingeniero de Datos Senior · Lima, Perú",
    "contact_label": "Contacto",
    "contact_heading": "Trabajemos Juntos",
    "footer_built": "Construido con precisión y pasión",
    "skill_categories": [
      {"name": "Ingeniería de Datos y ETL", "icon": "⚡", "tags": ["ETL/ELT", "Integración de Datos", "Calidad de Datos", "Soporte Operativo", "Trazabilidad y Linaje", "Homologación"]},
      {"name": "Nube y Orquestación", "icon": "☁️", "tags": ["Azure Data Factory", "Microsoft Azure", "Azure Databricks", "Logic Apps", "IBM DataStage", "Microsoft Fabric"]},
      {"name": "Bases de Datos y Motores", "icon": "📊", "tags": ["SQL Server", "SQL Avanzado", "Oracle SQL", "PostgreSQL", "MongoDB"]},
      {"name": "Lenguajes y Desarrollo", "icon": "💻", "tags": ["Python", "PySpark", "TypeScript", "JavaScript", "Go"]},
      {"name": "Herramientas y Entornos", "icon": "🛠️", "tags": ["Git", "Docker", "Power BI", "APIs REST", "Playwright"]},
      {"name": "Idiomas", "icon": "🗣️", "tags": ["Español (Nativo)", "Inglés (Básico)"]}
    ]
  }
};

const EXPERIENCE = [
  {
    "company": "Tata Consultancy Services",
    "client": "BCP / Repsol",
    "role": {
      "en": "Senior Data Engineer",
      "es": "Ingeniero de Datos Senior"
    },
    "period": {
      "en": "Jan 2026 – Present",
      "es": "Ene 2026 – Actualidad"
    },
    "bullets": {
      "en": [
        "Monitor the BCP payment grid in batch processes, ensuring operational continuity and timely resolution of incidents.",
        "Adjust and optimize processes in Azure Data Factory according to functional and technical requirements of the client.",
        "Design reporting pipelines with event-based triggers on Blob Storage, schedules, and execution validations.",
        "Collaborate with BI teams, Data Stewards, and QA in complex ETL flows, validating homologation, traceability, and data quality.",
        "Provide technical support to users and QA for diagnosing and resolving production incidents.",
        "Technologies: Power BI, Microsoft Azure, Azure Data Factory, Azure Databricks, Python, Playwright, Microsoft SQL Server, SQL."
      ],
      "es": [
        "Monitoreo la malla de pagos BCP en procesos batch, asegurando la continuidad operativa y resolución oportuna de incidencias.",
        "Ajusté y optimicé procesos en Azure Data Factory según requerimientos funcionales y técnicos del cliente.",
        "Diseñé pipelines de reportería con triggers por eventos de Blob Storage, schedules y validaciones de ejecución.",
        "Trabajé con equipos BI, Data Stewards y QA en flujos ETL complejos, validando homologación, trazabilidad y calidad de datos.",
        "Brindé soporte técnico a usuarios y QA para la identificación, diagnóstico y resolución de incidencias de producción.",
        "Tecnologías: Power BI, Microsoft Azure, Azure Data Factory, Azure Databricks, Python, Playwright, Microsoft SQL Server, SQL."
      ]
    }
  },
  {
    "company": "NTT Data",
    "client": "Pacífico Seguros",
    "role": {
      "en": "Senior Data Engineer",
      "es": "Ingeniero de Datos Senior"
    },
    "period": {
      "en": "Jun 2025 – Jan 2026",
      "es": "Jun 2025 – Ene 2026"
    },
    "bullets": {
      "en": [
        "Developed and optimized pipelines in Azure Data Factory to process complex binary files from Blob Storage, facilitating Salesforce ingestion.",
        "Automated monthly closing reporting and alert systems, orchestrating services with Logic Apps and Azure Data Factory.",
        "Collaborated closely with functional teams (BI, Data Stewards) and QA in complex ETL flows, validating homologation and data traceability.",
        "Debugged and resolved production incidents in ETL pipelines, diagnosing operational failures and input data errors.",
        "Implemented QA and validation processes to ensure consistent, reliable, and error-free data ingestion.",
        "Technologies: Microsoft Azure, Azure Data Factory, Microsoft SQL Server, Logic Apps, SQL."
      ],
      "es": [
        "Desarrollé y optimicé pipelines en Azure Data Factory para procesar tramas binarias complejas desde Blob Storage, facilitando su ingesta en Salesforce.",
        "Automaticé flujos de reportería de cierre de mes y sistemas de alerta, orquestando servicios con Logic Apps y Azure Data Factory.",
        "Colaboré estrechamente con equipos funcionales (BI, Data Stewards) y QA en flujos ETL complejos, validando homologación y trazabilidad de datos.",
        "Depuré y resolví incidencias de producción en pipelines ETL, diagnosticando fallos operativos y errores en datos de entrada.",
        "Implementé procesos de validación y QA para asegurar una ingesta de datos consistente, confiable y libre de errores.",
        "Tecnologías: Microsoft Azure, Azure Data Factory, Microsoft SQL Server, Logic Apps, SQL."
      ]
    }
  },
  {
    "company": "Management Solutions",
    "client": "BCP",
    "role": {
      "en": "Data Engineer",
      "es": "Ingeniero de Datos"
    },
    "period": {
      "en": "Sep 2024 – Jun 2025",
      "es": "Sep 2024 – Jun 2025"
    },
    "bullets": {
      "en": [
        "Successfully migrated On-Premise data transformation processes to the cloud (Azure) using Databricks and Data Factory for BCP's finance area.",
        "Reduced loading times by 70% and execution costs significantly through partitioning, parallel processing, and bulk loading.",
        "Adapted and optimized processes in Databricks, Spark, and SQL, meeting high quality, security, and traceability standards.",
        "Supervised data quality validation and control, ensuring migration without inconsistencies.",
        "Technologies: Microsoft Azure, Azure Data Factory, IBM DataStage, Databricks, PySpark, SQL."
      ],
      "es": [
        "Migré exitosamente procesos de transformación de datos On-Premise a la nube (Azure) usando Databricks y Data Factory para el área de finanzas del BCP.",
        "Reduje los tiempos de carga en un 70% y los costos de ejecución significativamente, mediante partitioning, procesamiento paralelo y bulk loading.",
        "Adapté y optimicé procesos en Databricks, Spark y SQL, cumpliendo con altos estándares de calidad, seguridad y trazabilidad.",
        "Supervisé la validación y control de calidad de datos, asegurando una migración sin inconsistencias.",
        "Tecnologías: Microsoft Azure, Azure Data Factory, IBM DataStage, Databricks, PySpark, SQL."
      ]
    }
  },
  {
    "company": "DT Soluciones Tecnológicas",
    "client": null,
    "role": {
      "en": "Data Engineer",
      "es": "Ingeniero de Datos"
    },
    "period": {
      "en": "Jul 2023 – Aug 2024",
      "es": "Jul 2023 – Ago 2024"
    },
    "bullets": {
      "en": [
        "Designed and optimized ETL pipelines to process fleet maintenance data in the cloud, integrating multiple sources.",
        "Automated data ingestion and transformation in Azure Databricks, Spark, and SQL.",
        "Implemented QA and validation processes to guarantee traceability and consistency of information.",
        "Technologies: Microsoft Azure, Azure Data Factory, IBM DataStage, Databricks, PySpark, SQL."
      ],
      "es": [
        "Diseñé y optimicé pipelines ETL para procesar datos de mantenimiento de flotas en la nube, integrando múltiples fuentes.",
        "Automaticé la ingesta y transformación de datos en Azure Databricks, Spark y SQL.",
        "Implementé procesos de validación y control de calidad para garantizar trazabilidad y consistencia de la información.",
        "Tecnologías: Microsoft Azure, Azure Data Factory, IBM DataStage, Databricks, PySpark, SQL."
      ]
    }
  },
  {
    "company": "DT Soluciones Tecnológicas",
    "client": null,
    "role": {
      "en": "Software Engineer",
      "es": "Ingeniero de Software"
    },
    "period": {
      "en": "Mar 2023 – Jul 2023",
      "es": "Mar 2023 – Jul 2023"
    },
    "bullets": {
      "en": [
        "Led the design and development of a monitoring system, from backend architecture to production deployment.",
        "Designed relational (PostgreSQL) and NoSQL (MongoDB) database structures, along with robust RESTful APIs.",
        "Coordinated with the frontend team using an agile approach, incorporating constant customer feedback.",
        "Technologies: Go, NodeJS, PostgreSQL, MongoDB, Git, Docker."
      ],
      "es": [
        "Lideré el diseño y desarrollo de un sistema de monitoreo, desde la arquitectura backend hasta el despliegue en producción.",
        "Diseñé la estructura de bases de datos relacionales (PostgreSQL) y NoSQL (MongoDB), junto con APIs RESTful robustas.",
        "Coordiné con el equipo frontend en un enfoque ágil, incorporando feedback constante del cliente.",
        "Tecnologías: Go, NodeJS, PostgreSQL, MongoDB, Git, Docker."
      ]
    }
  }
];

const PROJECTS = [
  {
    "id": "bcp_migration",
    "color": "blue",
    "featured": true,
    "sector": {
      "en": "Banking · Cloud Migration",
      "es": "Banca · Migración Cloud"
    },
    "company": "BCP / MS",
    "period": {
      "en": "Sep 2024 – Jun 2025",
      "es": "Sep 2024 – Jun 2025"
    },
    "title": {
      "en": "On-Premise to Azure Cloud Financial Data Migration",
      "es": "Migración de Datos Financieros de On-Premise a Azure"
    },
    "summary": {
      "en": "Migrated critical financial ETL flows from IBM DataStage On-Premise to Azure Databricks (PySpark) and Azure Data Factory. Implemented parallel bulk loading and data partitioning strategies.",
      "es": "Migración de flujos financieros críticos de IBM DataStage local a Azure Databricks (PySpark) y Azure Data Factory. Implementación de carga masiva en paralelo y particionamiento."
    },
    "scale": "BCP Finance Core ETLs",
    "impact": {
      "en": "70% reduction in data load times and significant execution cost savings.",
      "es": "70% de reducción en tiempos de carga y ahorro significativo de costos de ejecución."
    },
    "tags": ["Azure Databricks", "Azure Data Factory", "PySpark", "Spark SQL", "IBM DataStage"]
  },
  {
    "id": "salesforce_integration",
    "color": "violet",
    "featured": true,
    "sector": {
      "en": "Insurance · CRM Integration",
      "es": "Seguros · Integración CRM"
    },
    "company": "Pacífico Seguros / NTT Data",
    "period": {
      "en": "Jun 2025 – Jan 2026",
      "es": "Jun 2025 – Ene 2026"
    },
    "title": {
      "en": "High-Volume Salesforce Ingestion Pipeline",
      "es": "Pipeline de Ingesta a Salesforce de Alto Volumen"
    },
    "summary": {
      "en": "Designed Azure Data Factory pipelines to parse and load complex binary files from Blob Storage into Salesforce. Integrated month-end reporting alerts using Logic Apps and SQL Server.",
      "es": "Diseño de pipelines de Azure Data Factory para procesar y cargar archivos binarios complejos de Blob Storage a Salesforce. Integración de alertas de cierre de mes usando Logic Apps y SQL Server."
    },
    "scale": "+10M monthly records",
    "impact": {
      "en": "Automated monthly closing reporting with zero data consistency issues.",
      "es": "Reportería mensual automatizada y con cero errores de consistencia."
    },
    "tags": ["Azure Data Factory", "Logic Apps", "SQL Server", "Salesforce Ingest", "Blob Storage"]
  },
  {
    "id": "bcp_payment_grid",
    "color": "green",
    "featured": false,
    "sector": {
      "en": "Banking · Core Operations",
      "es": "Banca · Operaciones Core"
    },
    "company": "BCP / TCS",
    "period": {
      "en": "Jan 2026 – Present",
      "es": "Ene 2026 – Actualidad"
    },
    "title": {
      "en": "Batch Payment Grid Monitoring & Optimization",
      "es": "Monitoreo y Optimización de la Malla de Pagos Batch"
    },
    "summary": {
      "en": "Overseeing BCP's core batch payment grid. Deployed event-driven reporting triggers and optimized data flows within Azure Data Factory and Databricks.",
      "es": "Supervisión y soporte de la malla de pagos batch del BCP. Implementación de triggers basados en eventos en Blob Storage y optimización de flujos de datos en ADF y Databricks."
    },
    "scale": "BCP Core Payment Systems",
    "impact": {
      "en": "Ensured 100% operational continuity and zero payment delay incidents.",
      "es": "Garantía de continuidad operativa al 100% y reducción de incidencias en producción."
    },
    "tags": ["Azure Data Factory", "Azure Databricks", "Python", "Playwright", "SQL Server"]
  },
  {
    "id": "fleet_maintenance",
    "color": "blue",
    "featured": false,
    "sector": {
      "en": "Telemetry · Fleet Management",
      "es": "Telemetría · Gestión de Flotas"
    },
    "company": "DT Soluciones",
    "period": {
      "en": "Jul 2023 – Aug 2024",
      "es": "Jul 2023 – Ago 2024"
    },
    "title": {
      "en": "Fleet Telemetry & Maintenance Data Pipelines",
      "es": "Pipelines de Telemetría e Historial de Mantenimiento"
    },
    "summary": {
      "en": "Built ETL workflows on Azure Databricks to clean and consolidate machinery telemetry and repair log data from multiple sources.",
      "es": "Construcción de flujos ETL en Azure Databricks para limpiar y consolidar datos de telemetría de maquinaria y registros de reparación de múltiples fuentes."
    },
    "scale": "Multi-source IoT data",
    "impact": {
      "en": "Established end-to-end data quality validation and information traceability.",
      "es": "Establecimiento de validación de calidad de datos y trazabilidad de información."
    },
    "tags": ["Azure Databricks", "PySpark", "Data Quality", "IoT Telemetry"]
  },
  {
    "id": "fleet_backend",
    "color": "violet",
    "featured": false,
    "sector": {
      "en": "Software Engineering · Systems",
      "es": "Ingeniería de Software · Sistemas"
    },
    "company": "DT Soluciones",
    "period": {
      "en": "Mar – Jul 2023",
      "es": "Mar – Jul 2023"
    },
    "title": {
      "en": "Real-time Vehicle Tracking Backend & Database Design",
      "es": "Diseño de Base de Datos y Backend de Monitoreo"
    },
    "summary": {
      "en": "Designed and implemented PostgreSQL and MongoDB database architectures alongside robust Go and Node.js REST APIs for live fleet monitoring.",
      "es": "Diseño e implementación de arquitectura de bases de datos PostgreSQL y MongoDB junto con REST APIs robustas en Go y Node.js para monitoreo en vivo."
    },
    "scale": "Production IoT Platform",
    "impact": {
      "en": "Successfully deployed backend with Git/Docker, supporting real-time tracking.",
      "es": "Despliegue exitoso en producción con Docker de APIs y bases de datos para rastreo en tiempo real."
    },
    "tags": ["Go", "NodeJS", "PostgreSQL", "MongoDB", "Docker", "REST APIs"]
  }
];

const PUBLICATIONS = [
  {
    "id": "fabric_data_engineer",
    "status": "published",
    "venue_es": "Microsoft",
    "venue_en": "Microsoft",
    "title_es": "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
    "title_en": "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
    "date_es": "Credencial Oficial",
    "date_en": "Official Credential",
    "doi": "https://learn.microsoft.com/credentials/certifications/fabric-data-engineer/",
    "tags": ["Fabric", "Data Engineering", "Cloud", "DP-700"]
  },
  {
    "id": "azure_fundamentals",
    "status": "published",
    "venue_es": "Microsoft",
    "venue_en": "Microsoft",
    "title_es": "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    "title_en": "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    "date_es": "Credencial Oficial",
    "date_en": "Official Credential",
    "doi": "https://learn.microsoft.com/credentials/certifications/azure-data-fundamentals/",
    "tags": ["Azure", "Data Fundamentals", "Cloud", "DP-900"]
  },
  {
    "id": "github_copilot",
    "status": "published",
    "venue_es": "Microsoft",
    "venue_en": "Microsoft",
    "title_es": "Microsoft Certified: GitHub Copilot (GH-300)",
    "title_en": "Microsoft Certified: GitHub Copilot (GH-300)",
    "date_es": "Credencial Oficial",
    "date_en": "Official Credential",
    "doi": "https://learn.microsoft.com/credentials/certifications/github-copilot-specialty/",
    "tags": ["GitHub", "Copilot", "AI Tools", "GH-300"]
  },
  {
    "id": "meta_js",
    "status": "repo",
    "venue_es": "Meta",
    "venue_en": "Meta",
    "title_es": "Programación con JavaScript",
    "title_en": "Programming with JavaScript",
    "date_es": "Curso Completado",
    "date_en": "Course Completed",
    "doi": null,
    "tags": ["JavaScript", "Web Development", "Frontend"]
  },
  {
    "id": "uc_python",
    "status": "repo",
    "venue_es": "Pontificia Universidad Católica de Chile",
    "venue_en": "Pontificia Universidad Católica de Chile",
    "title_es": "Introducción a la programación en Python I",
    "title_en": "Introduction to Python Programming I",
    "date_es": "Curso Completado",
    "date_en": "Course Completed",
    "doi": null,
    "tags": ["Python", "Programming Basics"]
  },
  {
    "id": "ibm_sql",
    "status": "repo",
    "venue_es": "Cognitive Class (IBM)",
    "venue_en": "Cognitive Class (IBM)",
    "title_es": "SQL and Relational Databases",
    "title_en": "SQL and Relational Databases",
    "date_es": "Curso Completado",
    "date_en": "Course Completed",
    "doi": null,
    "tags": ["SQL", "Relational Databases", "IBM"]
  },
  {
    "id": "cisco_python",
    "status": "repo",
    "venue_es": "Cisco Networking Academy",
    "venue_en": "Cisco Networking Academy",
    "title_es": "Python Essentials 1 & 2",
    "title_en": "Python Essentials 1 & 2",
    "date_es": "Curso Completado",
    "date_en": "Course Completed",
    "doi": null,
    "tags": ["Python", "Programming", "Cisco"]
  },
  {
    "id": "cisco_hardware",
    "status": "repo",
    "venue_es": "Cisco Networking Academy",
    "venue_en": "Cisco Networking Academy",
    "title_es": "Computer Hardware Basics",
    "title_en": "Computer Hardware Basics",
    "date_es": "Curso Completado",
    "date_en": "Course Completed",
    "doi": null,
    "tags": ["Hardware", "IT Basics", "Cisco"]
  },
  {
    "id": "udemy_django",
    "status": "repo",
    "venue_es": "Udemy",
    "venue_en": "Udemy",
    "title_es": "Python and Django Framework",
    "title_en": "Python and Django Framework",
    "date_es": "Curso Completado",
    "date_en": "Course Completed",
    "doi": null,
    "tags": ["Django", "Python", "Web Development"]
  }
];

var Q = '"';
let lang = 'en', typewriterTimeout = null;

try {
  var _sl = localStorage.getItem('ls_lang');
  if (_sl) lang = _sl;
} catch (e) {}

function setLanguage(l, initial) {
  if (initial === undefined) initial = false;
  if (l === lang && !initial) return;
  lang = l;
  try {
    localStorage.setItem('ls_lang', lang)
  } catch (e) {}
  document.querySelectorAll('.lb').forEach(function(b) {
    b.classList.toggle('active', b.dataset.lang === lang)
  });
  if (!initial) {
    document.body.style.opacity = '0.85';
    setTimeout(function() {
      renderAll();
      document.body.style.opacity = '1';
    }, 130);
  } else {
    renderAll();
  }
}

var EDU_ICONS = {
  GRAD: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;flex-shrink:0"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  ATOM: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;flex-shrink:0"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>`,
  CODE: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;flex-shrink:0"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  FLASK: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;flex-shrink:0"><path d="M9 3h6l1 7H8L9 3z"/><path d="M8 10c-.9 1.5-1 3-.4 4.5C8.3 16.4 10 18 12 18s3.7-1.6 4.4-3.5c.6-1.5.5-3-.4-4.5"/><line x1="8" y1="10" x2="16" y2="10"/></svg>`,
  ATOM2: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"/></svg>`,
  CPU: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M2 15h2M2 9h2M22 15h-2M22 9h-2M15 22v-2M9 22v-2"/></svg>`,
  GEAR: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
};

function renderAll() {
  updateStatic();
  renderEducation();
  renderTimeline();
  renderProjects();
  renderPublications();
  renderSkills();
  restartTypewriter();
  setTimeout(initScrollAnimations, 50);
}

function updateStatic() {
  var t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var k = el.dataset.i18n;
    if (t[k] !== undefined) el.textContent = t[k];
  });
}

function restartTypewriter() {
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  var el = document.getElementById('typewriter');
  if (!el) return;
  el.textContent = '';
  typewriteRole(0, 0, true);
}

function typewriteRole(ri, ci, isTyping) {
  var el = document.getElementById('typewriter');
  if (!el) return;
  var roles = T[lang].hero_roles;
  var role = roles[ri % roles.length];
  if (isTyping) {
    if (ci <= role.length) {
      el.textContent = role.substring(0, ci);
      typewriterTimeout = setTimeout(function() {
        typewriteRole(ri, ci + 1, true)
      }, 65)
    } else {
      typewriterTimeout = setTimeout(function() {
        typewriteRole(ri, ci - 1, false)
      }, 2000)
    }
  } else {
    if (ci > 0) {
      el.textContent = role.substring(0, ci);
      typewriterTimeout = setTimeout(function() {
        typewriteRole(ri, ci - 1, false)
      }, 28)
    } else {
      typewriterTimeout = setTimeout(function() {
        typewriteRole(ri + 1, 0, true)
      }, 300)
    }
  }
}

function renderEducation() {
  var t = T[lang];
  var html = t.edu.map(function(e) {
    var iconSvg = EDU_ICONS && EDU_ICONS[e.icon] ? EDU_ICONS[e.icon] : e.icon;
    return '<div class=' + Q + 'edu-item' + Q + '><span class=' + Q + 'edu-ico' + Q + '>' + iconSvg + '</span><div><div class=' + Q + 'edu-deg' + Q + '>' + e.degree + '</div><div class=' + Q + 'edu-sch' + Q + '>' + e.school + '</div><div class=' + Q + 'edu-st' + Q + '>' + e.status + '</div></div></div>'
  }).join('');
  var c1 = document.getElementById('edu-list');
  if (c1) c1.innerHTML = '<div class=' + Q + 'edu-panel' + Q + '><div class=' + Q + 'edu-items' + Q + '>' + html + '</div></div>';
  var c2 = document.getElementById('edu-list-2');
  if (c2) c2.innerHTML = html;
}

function renderTimeline() {
  var t = T[lang];
  var c = document.getElementById('timeline');
  if (!c) return;
  c.innerHTML = EXPERIENCE.map(function(exp) {
    var cl = exp.client ? '<div class=' + Q + 'xp-client' + Q + '>' + t.exp_client + ': ' + exp.client + '</div>' : '';
    var buls = exp.bullets[lang].map(function(b) {
      return '<li>' + b + '</li>'
    }).join('');
    return '<div class=' + Q + 'xp-item' + Q + ' data-a><div class=' + Q + 'xp-left' + Q + '><div class=' + Q + 'xp-company' + Q + '>' + exp.company + '</div>' + cl + '<div class=' + Q + 'xp-period' + Q + '>' + exp.period[lang] + '</div></div><div class=' + Q + 'xp-right' + Q + '><div class=' + Q + 'xp-role' + Q + '>' + exp.role[lang] + '</div><ul class=' + Q + 'xp-buls' + Q + '>' + buls + '</ul></div></div>'
  }).join('');
}

function renderProjects() {
  var t = T[lang];
  var c = document.getElementById('projects-grid');
  if (!c) return;
  var cm = {blue: 'pc-blue', violet: 'pc-violet', green: 'pc-green'};
  c.innerHTML = PROJECTS.map(function(p) {
    var cl = cm[p.color] || 'pc-blue';
    var tags = p.tags.map(function(tag) {
      return '<span class=' + Q + 'tag' + Q + '>' + tag + '</span>'
    }).join('');
    return '<div class=' + Q + 'proj-card ' + cl + Q + ' data-a><div class=' + Q + 'pc-top' + Q + '><span class=' + Q + 'pc-sector' + Q + '>' + p.sector[lang] + '</span><span class=' + Q + 'pc-period' + Q + '>' + p.period[lang] + '</span></div><div class=' + Q + 'pc-company' + Q + '>' + p.company + '</div><div class=' + Q + 'pc-title' + Q + '>' + p.title[lang] + '</div><p class=' + Q + 'pc-sum' + Q + '>' + p.summary[lang] + '</p><div class=' + Q + 'pc-metric' + Q + '><div class=' + Q + 'pc-metric-val' + Q + '>' + p.impact[lang].split('. ')[0] + '</div><div class=' + Q + 'pc-metric-label' + Q + '>' + t.proj_impact + '</div></div><div class=' + Q + 'pc-tags' + Q + '>' + tags + '</div></div>'
  }).join('');
}

function renderPublications() {
  var c = document.getElementById('publications-list');
  if (!c) return;
  var statusLabel = {
    published: {es: 'Certificación ✓', en: 'Certification ✓'},
    review: {es: 'En curso', en: 'In Progress'},
    repo: {es: 'Curso / Capacitación', en: 'Course / Training'}
  };
  var statusCls = {published: 'ps-published', review: 'ps-review', repo: 'ps-repo'};
  var typeLabel = {
    published: {es: 'Certificación técnica oficial verificada', en: 'Official verified technical certification'},
    review: {es: 'Certificación o curso en proceso', en: 'In progress certification or course'},
    repo: {es: 'Curso de especialización completado', en: 'Completed specialization course'}
  };
  c.innerHTML = PUBLICATIONS.map(function(p) {
    var venue = lang === 'es' ? p.venue_es : p.venue_en;
    var title = lang === 'es' ? p.title_es : p.title_en;
    var date = lang === 'es' ? p.date_es : p.date_en;
    var sl = statusLabel[p.status] ? statusLabel[p.status][lang] : p.status;
    var sc = statusCls[p.status] || 'ps-repo';
    var tl = typeLabel[p.status] ? typeLabel[p.status][lang] : '';
    var doi = p.doi
      ? '<a href="' + p.doi + '" target="_blank" rel="noopener" class="pub-doi-btn">DOI ↗</a>'
      : '';
    var tags = p.tags.map(function(t) {
      return '<span class="pub-tag">' + t + '</span>';
    }).join('');
    return '<div class="pub-card ' + sc + '" data-a>'
      + '<div class="pub-head">'
      + '<div class="pub-head-left">'
      + '<span class="pub-venue-label">' + venue + '</span>'
      + '<span class="pub-type-label">' + tl + '</span>'
      + '</div>'
      + '<div class="pub-head-right">'
      + '<span class="pub-status-pill ' + sc + '">' + sl + '</span>'
      + '<span class="pub-date-label">' + date + '</span>'
      + '</div>'
      + '</div>'
      + '<p class="pub-title-text">' + title + '</p>'
      + '<div class="pub-footer">'
      + (doi ? doi : '')
      + '<div class="pub-tag-row">' + tags + '</div>'
      + '</div>'
      + '</div>';
  }).join('');
}

function renderSkills() {
  var t = T[lang];
  var c = document.getElementById('skills-grid');
  if (!c) return;
  c.innerHTML = t.skill_categories.map(function(cat) {
    var tags = cat.tags.map(function(tag) {
      return '<span class=' + Q + 'sk-tag' + Q + '>' + tag + '</span>'
    }).join('');
    return '<div class=' + Q + 'sk-row' + Q + ' data-a><div class=' + Q + 'sk-cat-name' + Q + '>' + cat.icon + ' ' + cat.name + '</div><div class=' + Q + 'sk-tags' + Q + '>' + tags + '</div></div>'
  }).join('');
}

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(function(b) {
    b.classList.toggle('tab-active', b.id === 'tab-btn-' + tab)
  });
  document.querySelectorAll('.tab-pane').forEach(function(p) {
    p.classList.toggle('tab-active', p.id === 'pane-' + tab)
  });
  setTimeout(initScrollAnimations, 50);
}

function initScrollAnimations() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target)
      }
    })
  }, {threshold: 0.05});
  document.querySelectorAll('[data-a],.xp-item,.proj-card,.pub-row,.sk-row').forEach(function(el) {
    el.classList.remove('visible');
    obs.observe(el)
  });
}

function initNavbar() {
  var nav = document.getElementById('navbar');
  var secs = ['hero', 'about', 'experience', 'skills', 'contact'];
  window.addEventListener('scroll', function() {
    nav.classList.toggle('on', window.scrollY > 40);
    var cur = 'hero';
    secs.forEach(function(id) {
      var s = document.getElementById(id);
      if (s && window.scrollY >= s.offsetTop - 110) cur = id
    });
    document.querySelectorAll('.na').forEach(function(a) {
      a.classList.toggle('on', a.getAttribute('href') === '#' + cur)
    })
  }, {passive: true});

  document.querySelectorAll('.na').forEach(function(a) {
    if (a.getAttribute('href') === '#research') {
      a.addEventListener('click', function(e) {
        e.preventDefault();
        switchTab('research');
        var s = document.getElementById('experience');
        if (s) s.scrollIntoView({behavior: 'smooth'});
      })
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var saved = 'en';
  try {
    saved = localStorage.getItem('ls_lang') || 'en'
  } catch (e) {}
  if (['en', 'es'].indexOf(saved) < 0) saved = 'en';
  document.body.style.transition = 'opacity 0.14s ease';
  setLanguage(saved, true);
  initScrollAnimations();
  initNavbar();
});
