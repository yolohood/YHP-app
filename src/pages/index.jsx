import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import celestialLogo from "../assets/transparent-celestial.png";
import etherealLogo from "../assets/transparent-ethereal.png";
import yhpLogo from "../assets/transparent-yolo-hood-productions.png";
function App() {
  return (
    <div className="container">
      <h1>YOLO HOOD PRODUCTIONS</h1>
      <div className="row">
        <span className="logos">
          <a href="https://www.youtube.com/watch?v=KeXJCtjNe7I" target="_blank">
            <Image
              width={144}
              height={144}
              src={etherealLogo}
              className="logo ethereal"
              alt="Ethereal logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://yhp.ee/" target="_blank">
            <Image
              width={144}
              height={144}
              src={yhpLogo}
              className="logo yhp"
              alt="YHP logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://celestial.ee/" target="_blank">
            <Image
              width={144}
              height={144}
              src={celestialLogo}
              className="logo celestial"
              alt="Celestial logo"
            />
          </a>
        </span>
      </div>
      <p>Kliki logodel, et saada meie tegevuse kohta täpsemat infot.</p>
<iframe src="https://radio.yhp.ee/public/yhp_radio/embed?theme=light" frameborder="0" allowtransparency="true"></iframe>
      <div className="row">
        <div>
Designed with ❤️ at <a className="logos" href="https://yhp.ee" target="_blank">YOLO HOOD</a> by <a className="logos" href="https://andrias.ee" target="_blank" >Andrias</a>
        </div>
      </div>
      {/* <p>{greetMsg}</p> */}
    </div>
  );
}

export default App;
