function Playarea() {
  return (
    <>
      <img></img>
      <h3>Buddy </h3>
      <p>Happiness</p>
      <progress id="health" value="50" max="100"></progress>
      <p>Hunger</p>
      <progress id="hunger" value="50" max="100"></progress>
      <button className="play">play</button>
      <button className="feed">Feed</button>
      <button className="bath">Bath</button>
    </>
  );
}
export default Playarea;
