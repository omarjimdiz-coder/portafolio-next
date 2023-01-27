import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'

import mypic from '../../public/Captura.PNG';
import project from '../../public/project.png';
import project2 from '../../public/project2.png';
import project6 from '../../public/project6.png';
import project61 from '../../public/proejct61.png';
import project3 from '../../public/project3.png';
import project4 from '../../public/proejct4.png';
import project5 from '../../public/project5.png';
import js from '../../public/javascript.svg';
import react from '../../public/react.svg';
import node from '../../public/nodejs.svg';
import next from '../../public/next.svg';
import html from '../../public/html.svg';
import ux1 from '../../public/ux1.png'
import ux2 from '../../public/ux2.png'
import ux4 from '../../public/ux4.PNG'
import ux5 from '../../public/ux5.PNG'
import ux6 from '../../public/ux6.PNG'
import ux7 from '../../public/ux7.PNG'
import figma from '../../public/figma.png';


import Projects from '@/components/Projects';
import Design from '@/components/Design';

const projects = [
  {
    id: 1,
    src: project,
    title: 'Seguimiento para Veterinaria',
    description: 'Webapp creada con React, tailwind y usando localStorage.',
    url: 'https://lighthearted-pudding-49b219.netlify.app/',
    image: react
  },
  {
    id: 2,
    src: project2,
    title: 'Planificador de gastos',
    description: 'Webapp creada con React, tailwind y usando localStorage.',
    url: 'https://lucent-manatee-36aaec.netlify.app/',
    image: react
  },
  {
    id: 3,
    src: project6,
    title: 'Kiosko para restaurantes',
    description: 'Webapp creada con Next js, tailwind, prisma y MySQL.',
    url: 'https://kiosko-app-production-0bdd.up.railway.app/',
    image: next
  },
  {
    id: 4,
    src: project61,
    title: 'Administrador para el Kiosko',
    description: 'Recibe los pedidos del Kiosko así como las alertas.',
    url: 'https://kiosko-app-production-0bdd.up.railway.app/admin',
    image: next
  },
  {
    id: 5,
    src: project3,
    title: 'Task app',
    description: 'Simple webapp creada con HTML, Bootstrap 5 y JavaScript.',
    url: 'https://spontaneous-sunshine-c9ab8a.netlify.app/',
    image: js
  },
  {
    id: 6,
    src: project4,
    title: 'Página web',
    description: 'Página creada con HTML, CSS y JavaScript.',
    url: 'https://omarjimdiz-coder.github.io/devweb/',
    image: html
  },
  {
    id: 7,
    src: project5,
    title: 'Crud - Back end app',
    description: 'CRUD creado con Node js y Mongo DB.',
    url: '',
    image: node
  }
];

const desings = [
  {
    id: 1,
    src: ux1,
    title: 'Comercialización',
    description: 'UX para administrar las ventas de cada vendedor.',
    url: 'https://www.figma.com/proto/8s0gVTjFHR7zJMg3LPOmDj/Comercializaci%C3%B3n-Mockup?node-id=1%3A2',
    image: figma
  },
  {
    id: 2,
    src: ux2,
    title: 'Tarjetas de perfiles',
    description: 'Investigación de arquetipos de la posición de cada empleado.',
    url: 'https://www.figma.com/file/fLuUeNGyLQZIjTV43QAyP8/Tarjetas-de-perfiles?t=7tma1yJj9blYs5Ri-0',
    image: figma
  },
  {
    id: 3,
    src: ux4,
    title: 'UX de comercialización',
    description: 'Proceso para crear orden de comerzación para vendedores.',
    url: 'https://www.figma.com/file/MAF3Avrg7RHvgDJ4TYRr3d/Comercializaci%C3%B3n-Cosecha?t=7tma1yJj9blYs5Ri-0',
    image: figma
  },
  {
    id: 4,
    src: ux5,
    title: 'Customer Journey Map',
    description: 'Detectar en el proceso al utilizar los dolores y acierto.',
    url: 'https://www.figma.com/file/7iXDvdb8FZ0BtskMKKyh4u/Customer-Journey-Map-(Community)?t=7tma1yJj9blYs5Ri-0',
    image: figma
  },
  {
    id: 5,
    src: ux6,
    title: 'Crear Ordenes y Listado',
    description: 'UX de para ver resumen y crear una orden.',
    url: 'https://www.figma.com/file/F81x3xRh0MwXuppKPWgtfj/Crear-Ordenes-y-Listado-Mockups?t=7tma1yJj9blYs5Ri-0',
    image: figma
  },
  {
    id: 6,
    src: ux7,
    title: 'Task Time',
    description: 'UX de tiempo gastado por tarea, por semana y día.',
    url: 'https://www.figma.com/file/IW7FrlbMUDFWWSCFlmYvBw/mockup-Shimpbox?node-id=0%3A1&t=7tma1yJj9blYs5Ri-0',
    image: figma
  }
];

export default function Home() {

  return (
    <Layout>
      
        {/* Haeder card */}
        <div className="card mb-3 bg-dark size-card">
          <div className="row g-0">
            <div className="col-md-4">
              <Image 
                src={mypic} 
                className="img-fluid rounded-start" 
                alt="My pic" 
                height={350}
                />
            </div>
            <div className="col-md-8 text-light">
              <div className="card-body">
                <h1 className="card-title parpadea">Omar Jiménez Díaz</h1>
                <h2 className="card-text">Front-End Developer</h2>
            
                <p>
                  Bienvenido a mi sitio personal, aquí podras observar mis trabajos como desarrollador,  
                  Videos para mi canal de Youtube y repositorios en Github.
                </p>

                <div className="progress bg-secondary">
                    <div 
                      className="progress-bar bg-light text-dark" 
                      style={{ width: '80%' }}
                      role="progressbar" 
                      aria-label="Basic example" 
                      aria-valuenow="25" 
                      aria-valuemin="0" 
                      aria-valuemax="100">
                      CSS
                    </div>
                </div>

                <div className="progress bg-secondary mt-2">
                    <div 
                      className="progress-bar bg-light text-dark" 
                      style={{ width: '90%' }}
                      role="progressbar" 
                      aria-label="Basic example" 
                      aria-valuenow="25" 
                      aria-valuemin="0" 
                      aria-valuemax="100">  
                      JavaScript
                    </div>
                </div>

                <div className="progress bg-secondary mt-2">
                    <div 
                      className="progress-bar bg-light text-dark" 
                      style={{ width: '70%' }}
                      role="progressbar" 
                      aria-label="Basic example" 
                      aria-valuenow="25" 
                      aria-valuemin="0" 
                      aria-valuemax="100">
                        React  
                    </div>
                </div>

                <div className="progress bg-secondary mt-2">
                    <div 
                      className="progress-bar bg-light text-dark" 
                      style={{ width: '50%' }}
                      role="progressbar" 
                      aria-label="Basic example" 
                      aria-valuenow="25" 
                      aria-valuemin="0" 
                      aria-valuemax="100">
                        Angular  
                    </div>
                </div>

                <div className="progress bg-secondary mt-2">
                    <div 
                      className="progress-bar bg-light text-dark" 
                      style={{ width: '50%' }}
                      role="progressbar" 
                      aria-label="Basic example" 
                      aria-valuenow="25" 
                      aria-valuemin="0" 
                      aria-valuemax="100">
                      Node JS  
                    </div>
                </div>

                <div className="progress bg-secondary mt-2">
                    <div 
                      className="progress-bar bg-light text-dark" 
                      style={{ width: '50%' }}
                      role="progressbar" 
                      aria-label="Basic example" 
                      aria-valuenow="25" 
                      aria-valuemin="0" 
                      aria-valuemax="100">
                      MySQL
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex align-items-center justify-content-start'>
          <i className="bi bi-cast text-secondary" style={{ fontSize: '30px' }}></i>
          &nbsp;
          <h4 className='text-secondary'>Proyectos Web</h4>
        </div>

        <div className='d-flex gap-3 align-items-center flex-wrap pt-2 pb-5 mobile'>
          {
            projects.map(card => (
              <Projects 
                key={card.id}
                card={card}
              />
            ))
          }
        </div>

        <div className='d-flex align-items-center justify-content-start'>
          <i className="bi bi-window-fullscreen text-secondary" style={{ fontSize: '30px' }}></i>
          &nbsp;
          <h4 className='text-secondary'>UX/UI</h4>
        </div>

        <div className='d-flex gap-3 align-items-center flex-wrap pt-2 pb-5 mobile'>
          {
            desings.map(design => (
              <Design 
                key={design.id}
                design={design}
              />
            ))
          }
        </div>


    </Layout>
  )
}
