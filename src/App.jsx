// import React, { useEffect, useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import { DataProvider } from "./context/DataProvider";

function App() {
  // const [data, setData] = useState([]);
  // const [imagen, setImagen] = useState({});

  // useEffect(() => {
  //   fetch(
  //     "https://graph.instagram.com/me?fields=media&access_token=IGQVJYS0Q3UWEtWE1ONXdWMUtmZAHlHUW1oVDRpQTlZAMVRqNnlQN0dzQTFJbGV4NmlZAcndrTXY3ZA2NMVk9ONVM4ZAU15WnlFTUFJMW92VVJaY1ZALWVNzeDNPSHdVaTNxRmVSMEI0ZAldfMTJNTEltY1podgZDZD"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const imagen = data.media.data[23].id;
  //       setData(imagen);
  //     });
  // }, []);

  // console.log(imagen);

  // useEffect(() => {
  //   if (!data.length) return;
  //   fetch(
  //     `https://graph.instagram.com/${data}?fields=media_url&access_token=IGQVJYS0Q3UWEtWE1ONXdWMUtmZAHlHUW1oVDRpQTlZAMVRqNnlQN0dzQTFJbGV4NmlZAcndrTXY3ZA2NMVk9ONVM4ZAU15WnlFTUFJMW92VVJaY1ZALWVNzeDNPSHdVaTNxRmVSMEI0ZAldfMTJNTEltY1podgZDZD`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setImagen(data));
  // }, [data]);
  return (
    <div className="App">
      <DataProvider>
        <MainPage />
        {/* <img
        src={imagen.media_url}
        alt=""
        style={{ width: "500px", height: "500px", objectFit: "cover" }}
      /> */}
      </DataProvider>
    </div>
  );
}

export default App;
