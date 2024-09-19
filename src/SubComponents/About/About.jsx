import '../Navbar1/Navbar1.css'
import aboutimg from '../../images/aboutpage.png'
import aboutimg2 from '../../images/aboutimage2.png'
import aboutimg3 from '../../images/asset 1.png'
import aboutimg4 from '../../images/asset 2.png'
import aboutimg5 from '../../images/asset 3.png'
import './About.css';
import Navbar from '../../Navbar/Navbar'
import Logo from '../../Logo/Logo'

export default function About() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
    <div className="col-1" >
    <Navbar/>
    </div>
    <div className="col-11">
    <Logo/>
    <div className="container">
    <div className="d-flex justify-content-center">
    <h3>About Broadway</h3>
    </div>
    <img src={aboutimg} className='img-fluid my-4' alt="" />
    <div className='row'>
    <div className="col-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam ipsa cum esse magni odio earum, quaerat soluta porro saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum, ipsum dolore repudiandae, rem voluptates perspiciatis quo, assumenda nobis voluptatem libero? Repellat perspiciatis repellendus numquam deserunt a quidem neque in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum labore iusto minima quos qui, et enim velit atque facilis ab possimus fuga sit saepe, libero, aperiam nihil culpa porro officiis?
    </div>
    <div className="col-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, optio? Ea facilis quod fuga minima inventore velit ipsa id deserunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis delectus suscipit pariatur molestias! Nam, veniam aperiam cum accusamus voluptates nostrum rem eos odio quidem laboriosam laudantium eaque, minus aliquid voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti consequatur ratione iusto accusamus quam quo dolorum quibusdam esse perferendis similique consectetur corporis, reprehenderit laboriosam autem placeat eos eaque eum!
    </div>
        </div>
    <div className='w-100 d-flex justify-content-center'>
    <img src={aboutimg2} className='img-fluid my-4 img2 h-25 w-75 ' alt="" /> </div>
    <img src={aboutimg3} className='img-fluid my-4 img3' alt="" />
    <img src={aboutimg4} className='img-fluid my-4 img4' alt="" />
    <img src={aboutimg5} className='img-fluid my-4 img5' alt="" />

      </div>
      </div>
      </div>
      </div>
    </>
  )
}
