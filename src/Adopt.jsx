import PetImage from './Pet';
export default function AdoptComponent(props) {
  return (
    <div className="adoptPage">
      <h2 className="title1">Choose a pet to adopt</h2>
      <PetImage />
      <button type="button" className="adoptBtn" onClick={props.onAdopt}>
        Adopt
      </button>
    </div>
  );
}
