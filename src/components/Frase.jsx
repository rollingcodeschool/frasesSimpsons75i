import { Card } from "react-bootstrap";

const Frase = ({personajeProps}) => {
  return (
    <section className="my-5">
      <h2>{personajeProps.character}</h2>
      <hr />
      <img className="mb-3" src={personajeProps.image} alt={personajeProps.character}/>
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>{personajeProps.quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
            "Nelson Muntz" in <cite title="Source Title">The simpsons</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
