interface GreetProps {
  name: string;
  message: string;
}

function Greet({ name, message }: GreetProps) {
  return <h1>Hello {name}, {message}</h1>;
}

export default Greet;

