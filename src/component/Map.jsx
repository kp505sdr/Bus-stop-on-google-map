import React, { useState, useEffect } from "react";
import { data } from "../route";
import GoogleMapReact from "google-map-react";
import "./Map.css";
const Map = ({ myroute }) => {
  const [cord, setcord] = useState({
    lat: 42.2414,
    lng: 42.2444,
  });

  return (
    <div className="main-div">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAA3FwTqcoUmmwq1DSRIWeVHySTAXu8FpY" }}
        defaultZoom={13}
        defaultCenter={cord}
      >
        {data
          .filter((myfiltr) => myfiltr.route_id == myroute)
          .map((mydata) =>
            mydata.route_graph.map((geo, i) => (
              <div
                className="card map__details map__pointer"
                style={{ width: "100px" }}
                lat={Number(geo.geo_location.latitude)}
                lng={Number(geo.geo_location.latitude)}
                key={i}
              >
                <div className=" map_data">
                  <p className="stop-id">Stop ID:{geo.route_stop_id}</p>
                  <img src="./image.png" alt="logo" width="20" />
                </div>
              </div>
            ))
          )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
