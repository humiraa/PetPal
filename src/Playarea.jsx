function Playarea(props) {
  return (
    <div class="play-area">
      {props.petHappiness > 50 ? (
        <img src="src/Name-pet.png" />
      ) : (
        <img src="src/puppy.png" />
      )}
      <h3>{props.petName} </h3>
      <p>Happiness</p>
      <progress id="health" value={props.petHappiness} max="100"></progress>
      <p>Hunger</p>
      <progress id="hunger" value={props.petFullness} max="100"></progress>
      <button className="play" onClick={props.onPlay}>
        Play ⚽
      </button>
      <button className="feed" onClick={props.onFeed}>
        Feed 🥫
      </button>
      <button className="bath" onClick={props.onBath}>
        Bath 🧼
      </button>
    </div>
  );
}
export default Playarea;
