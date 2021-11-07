import useRobot from "../../hooks/useRobot";

function Form() {
  const { formState, setFormState } = useRobot();

  const formInitialValues = {
    name: "",
    imageSource: "",
    features: {
      creationDate: "",
      speed: "",
      endurance: "",
      isItCute: "",
    },
  };

  function onClickSubmitButton(event) {
    if (formState === "Post") {
      event.preventDefault();
      setFormState("Button");
    }
  }

  function renderButton() {
    return (
      <button
        className={"btn btn-warning"}
        onClick={() => setFormState("Post")}
      >
        Create
      </button>
    );
  }

  function renderForm() {
    return (
      <form
        className={"col-5"}
        autoComplete="off"
        onSubmit={onClickSubmitButton}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageSource">Image Source</label>
          <input
            type="text"
            className="form-control"
            id="imageSource"
            placeholder="Image URL"
          />
          <small id="imageSpurce" className="form-text text-muted">
            Please provide a valid URL.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="imageSource">Creation Date</label>
          <input type="date" className="form-control" id="creationDate" />
        </div>
        <div className="form-group">
          <label htmlFor="speed">Speed</label>
          <input
            type="range"
            className="form-range"
            id="speed"
            min={0}
            max={10}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endurance">Endurance</label>
          <input
            type="range"
            className="form-range"
            id="endurance"
            min={0}
            max={10}
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="isItCute"
            id="isItCute1"
            value="option1"
            checked
          />
          <label className="form-check-label" htmlFor="isItCute1">
            The Robot is cute
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="isItCute"
            id="isItCute2"
            value="option2"
            disabled
          />
          <label className="form-check-label" htmlFor="isItCute2">
            The robot is ugly
          </label>
        </div>
        <div className="form-check disabled">
          <input
            className="form-check-input"
            type="radio"
            name="isItCute"
            id="isItCute3"
            value="option3"
          />
          <label className="form-check-label" htmlFor="isItCute3">
            I don't know
          </label>
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    );
  }

  return (
    <>
      <div className={"container"}>
        {formState === "Button" && renderButton()}
        {(formState === "Post" || formState === "Put") && renderForm()}
      </div>
    </>
  );
}

export default Form;
