//Styled JSX

function Heading(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <style jsx global>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Heading heading="Heading" />
      <h1>Here</h1>
    </div>
  );
}
