import ReactLoading from "react-loading";

function Loading({ width, height }) {
  return <ReactLoading type="spin" color="var(--loading)" width={width || 50} height={height || 50} />;
}

export default Loading