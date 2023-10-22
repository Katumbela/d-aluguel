import '../App.css';

import print from '../imgs/print.gif'
// import v1 from '../imgs/anims/'

function Animat({ children }) {
    return (

        <>
            <div className="video-container">
                <video autoPlay loop muted className="video-background">
                    <source src="../imgs/anims/av1.mp4" type="video/mp4" />
                </video>
                <div className="background-overlay"></div>
            </div>

        </>
    );
}

export default Animat;
