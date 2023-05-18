import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [66.0, -6.0, 0],
        center: [-5, -3],
        scale: 1400,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#1B2735"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo}/>
          ))
        }
      </Geographies>
      <Annotation
        subject={[-76, 8.6]}
        dx={-12}
        dy={-60}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Colombia"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
