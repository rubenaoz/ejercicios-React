type GreetingsProps = {
  name: string;
  age: number;
  ciudad: string;
  isLearningReact: boolean;
}

export function Greetings({ name, age, ciudad, isLearningReact }: GreetingsProps) {
  return (
    <div>
      <p>Hola, soy {name} y tengo {age} vivo en ciudad {ciudad} y {isLearningReact ? " estoy aprendiendo React" : " no estoy aprendiendo React"}
      </p>
    </div>
  )
}