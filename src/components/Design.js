import Image from 'next/image'

const Design = ({design}) => {
  return (
    <div className="card" style={{ width: '16.5rem'}}>
        <Image 
            src={design.src} 
            className="card-img-top" 
            alt="project"
            height={160} 
        />
        <div className="card-body p-0 pt-4 bg-dark text-light">
            <h6 className="card-title px-2">{design.title}</h6>
            <p className="card-text px-2">{design.description}</p>
            {
                design.url === '' ? 
                (   
                    <div className="d-flex py-2 justify-content-around align-items-center" style={{background: "#000" }}>
                        <button className="btn btn-secondary btn btn-sm" disabled>Ir al sitio</button>
                        <Image 
                            src={design.image}
                            width={25}
                            alt={"tech image" + design.image}
                        />
                    </div>
                ) 
                : 
                (
                    <div className="d-flex py-2 justify-content-around align-items-center" style={{background: "#000" }}>
                        <a href={design.url} target='_blank' rel="noreferrer" className="btn btn-secondary btn btn-sm">Ir a figma</a>
                        <Image 
                            src={design.image}
                            width={25}
                            alt={"tech image" + design.image}
                        />
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Design