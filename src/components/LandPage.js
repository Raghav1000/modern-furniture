import react from "react";
import "./LandPage.scss"
import images from "../constants/images";

const LandPage = () => {

    return (
        <main className="landpage">
            <div className="landpage-left">
            <h1>CREATIVE & MODERN</h1>
            <h4>The beauty of furniture is in the quality, shine and comfort</h4>
            <button>Buy now</button>
            </div>
            <div className="landpage-right">
            <img src={images.landpage} />
            </div>
        </main>
    )
}

export default LandPage;