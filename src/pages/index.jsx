import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import celestialLogo from "../assets/celestial.png";
import etherealLogo from "../assets/ethereal.png";
import yhpLogo from "../assets/yolo-hood-productions.svg";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>YOLO HOOD PRODUCTIONS</h1>
      <div className="row">
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
          {/* <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="ETA SON... ära kirjuta siia midagi"
          /> */}
          {/* <button type="button" onClick={() => greet()}>
            ÄRA VAJUTA SIIA
          </button> */}
        </div>
      </div>
      Designed with ❤️ in <a href="https://yhp.ee" target="_blank">YOLO HOOD</a> by <a href="https://andrias.ee" target="_blank" >Andrias</a>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
