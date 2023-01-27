import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="d-flex justify-content-around py-3">
        <p className="text-light text-mobile">© {new Date().getFullYear()} Omar, Inc. All rights reserved.</p>

        <div className='d-flex gap-2'>
            <a
                href='https://www.youtube.com/@Identados'
                target='_blank'
                className='icon-mobile'
                rel="noreferrer"
            >
                <Image 
                    src="/static/yt.png"
                    width={30}
                    height={30}
                    alt='youtube'
                />
            </a>
            <a 
                href='https://github.com/omarjimdiz-coder' 
                target='_blank'
                rel="noreferrer"
            >
                <Image 
                    src="/static/github.png"
                    width={30}
                    height={30}
                    alt='girhub'
                    className='icon-mobile'
                />
            </a>
        </div>

    </footer>
  )
}

export default Footer