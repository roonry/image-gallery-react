import one from "../assets/images/img-1.jpg"
import two from "../assets/images/img-2.jpg"
import three from "../assets/images/img-3.jpg"
import four from "../assets/images/img-4.jpg"
import five from "../assets/images/img-5.jpg"
import six from "../assets/images/img-6.jpg"
import seven from "../assets/images/img-7.jpg"
import eight from "../assets/images/img-8.jpg"
import nine from "../assets/images/img-9.jpg"
import ten from "../assets/images/img-10.jpg"
import eleven from "../assets/images/img-11.jpg"
import twell from "../assets/images/img-12.jpg"

function Img()
{
    return(
        <div className="container">
            <div className="s-1">
                <img src={one} alt="img-1" className="imges" ></img>
                <h4>Tiger</h4>
            </div>
            <div className="s-1">
                <img src={two} alt="img-1" className="imges" ></img>
                <h4>Sibra</h4>
            </div>
            <div className="s-1">
                <img src={three} alt="img-1" className="imges" ></img>
                <h4>Parrot</h4>
            </div>
            <div className="s-1">
                <img src={four} alt="img-1" className="imges" ></img>
                <h4>bird</h4>
            </div>
            <div className="s-1">
                <img src={five} alt="img-1" className="imges" ></img>
                <h4>frogg</h4>
            </div>
            <div className="s-1">
                <img src={six} alt="img-1" className="imges" ></img>
                <h4>animal</h4>
            </div>
            <div className="s-1">
                <img src={seven} alt="img-1" className="imges" ></img>
                <h4>cat</h4>
            </div>
            <div className="s-1">
                <img src={eight} alt="img-1" className="imges" ></img>
                <h4>bird</h4>
            </div>
            <div className="s-1">
                <img src={nine} alt="img-1" className="imges" ></img>
                <h4>animal</h4>
            </div>
            <div className="s-1">
                <img src={ten} alt="img-1" className="imges" ></img>
                <h4>elephant</h4>
            </div>
            <div className="s-1">
                <img src={eleven} alt="img-1" className="imges" ></img>
                <h4>lion</h4>
            </div>
            <div className="s-1">
                <img src={twell} alt="img-1" className="imges" ></img>
                <h4>animal</h4>
            </div>
        </div>
    )
}

export default Img