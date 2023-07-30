export interface HelloWorldProps {}

export function HelloWorld(props: HelloWorldProps): JSX.Element {
  return (
    <>
      <div>Hello World</div>
      <div>{JSON.stringify(props)}</div>
    </>
  );
}
