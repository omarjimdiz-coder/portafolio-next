import Layout from '@/components/Layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const videos = () => {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async() => {
    const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFUzDp1l50Tl5ojxyZFtIrw&maxResults=10&order=date&key=AIzaSyB_w8HdDr3IzeHg0pPZZHrenWcqeyUGh84';
    const res = await fetch(url);
    const { items } = await res.json();

    setDatas(items);   
  } 
  
  console.log(datas);

  return (
    <Layout>
        <div className='d-flex aling-items-center pb-2'>
          <i className="bi bi-play-circle-fill text-secondary" style={{ fontSize: '30px' }}></i>
          &nbsp;
          <h2 className='text-secondary'>Videos</h2>
        </div>

        <div className='d-flex gap-3 align-items-center flex-wrap pt-2 pb-5'>
        {
          datas?.map((data => (
            <div className="card" style={{ width: '18rem'}} key={data.id.videoId}>
              <Image 
                  src={data.snippet.thumbnails.medium.url} 
                  className="card-img-top" 
                  alt="project"
                  width={data.snippet.thumbnails.medium.width} 
                  height={data.snippet.thumbnails.medium.height}
              />
              <div className="card-body p-0 pt-4 bg-dark text-light">
                  <h6 className="card-title px-2">{data.snippet.title}</h6>
                  <small className="card-text px-2">{data.snippet.description}</small>
          
                  <div className="p-2 text-center" style={{background: "#000" }}>
                      <a href="#" target='_blank' className="btn btn-secondary btn btn-sm">Ir al video</a>
                  </div>
              </div>
          </div>
          )))
        }
        </div>
    </Layout>
  )
}

export default videos;