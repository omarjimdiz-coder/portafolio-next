import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/Layout'

import mypic from '../../public/Captura.PNG';

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
                <h2 className="card-text effect">Front-End Developer</h2>
            
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
                      style={{ width: '30%' }}
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
          <h4 className='text-secondary'>Proyectos</h4>
        </div>

    </Layout>
  )
}
