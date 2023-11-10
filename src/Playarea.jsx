
function Playarea() {
 
return (
    <>
<img>
</img>
<h3>Buddy </h3>
<p>Happiness</p>
<input
        type="range"
        min="0"
        max="100"
        value="50"
        class="slider"
        id="happiness"
      />
      <p>Hunger</p>
      <input
        type="range"
        min="0"
        max="100"
        value="50"
        class="slider"
        id="hunger"
      />
<button className="play">play</button>
<button className="feed">Feed</button>
<button className="bath">Bath</button>
</>
)   
    
   
}
export default Playarea; 