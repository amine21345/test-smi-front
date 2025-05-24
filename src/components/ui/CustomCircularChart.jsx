import _ from "lodash";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Separator(props) {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        transform: `rotate(${props.turns}turn)`,
      }}
    >
      <div style={props.style} />
    </div>
  );
}

function RadialSeparators(props) {
  const turns = 1 / props.count;
  return _.range(props.count).map((index) => (
    <Separator turns={index * turns} style={props.style} />
  ));
}
const CustomCircularChart = ({ taux }) => {
  return (
    <CircularProgressbarWithChildren
      // counterClockwise
      strokeWidth={10}
      value={(taux * 100).toFixed(0)}
      styles={buildStyles({
        pathColor: "url(#gradient)",
        trailColor: "#fff",
        rotation: 1 / 2,
        strokeLinecap: "butt",
      })}
    >
      <RadialSeparators
        count={50}
        style={{
          background: "#fff",
          width: "2px",
          height: `${10}%`,
        }}
      />
      <div style={{ fontSize: 18 }}>
        <strong>{(taux * 100).toFixed(0)}%</strong>
        <div>Taux de vente par influenceur</div>
      </div>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#0f0c29" />
            <stop offset="100%" stopColor="#ff4e50" />
          </linearGradient>
        </defs>
      </svg>
    </CircularProgressbarWithChildren>
  );
};

export default CustomCircularChart;
