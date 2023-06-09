import '@assets/photos.css'
import Image from 'next/image'

const Photos = () => {
  return (
    <div className="flex_screen">
      <div className="photos_box">
        <div className="tabs">
          <input type="radio" id="photo1" name="slider" />
          <input type="radio" id="photo2" name="slider" />
          <input type="radio" id="photo3" name="slider" />
          <div className="buttons">
            <label htmlFor="photo1"></label>
            <label htmlFor="photo2"></label>
            <label htmlFor="photo3"></label>
          </div>
          <div className="content">
            <div className="box photo1">
              <div className="content_box">
                <h2>photo 1</h2>
                <Image src="/photo1.webp" width={700} height={700} />
              </div>
            </div>
            <div className="box photo2">
              <div className="content_box">
                <h2>photo 2</h2>
                <Image src="/photo4.jpg" width={700} height={700} />
              </div>
            </div>
            <div className="box photo3">
              <div className="content_box">
                <h2>photo 3</h2>
                <Image src="/photo3.webp" width={700} height={700} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photos
