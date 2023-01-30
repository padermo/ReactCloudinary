import React, {useState} from 'react'
import axios from 'axios'

function Imagenes() {

  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "CAVA-verdot");
    setLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dcxiks4ku/upload',
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json()
    setImage(file.secure_url);
    setLoading(false)
  }
  console.log(image);

  return (
    <div className='imagenes'>
      <label htmlFor="file" className='imagenes__title'>File</label>
      <input type="file" name='file' id='file' placeholder='sube tu imagen' className='imagenes__file' onChange={uploadImage}/>
      {loading ? <h3>cargando imagen....</h3> : <img src={image} className='imagenes__picture'/>}
    </div>
  )
}

export default Imagenes