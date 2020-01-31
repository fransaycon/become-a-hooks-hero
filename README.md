# Become a React-Hooks Hero :cyclone:

:space_invader: This is a repository with full commented explanations on how to use the different hooks of the new Hook API of React.
This contains several sample programs neatly separated and compiled into a main clickable application.

This covers all available hooks except `useDebugValue`.
Hopefully we get equivalent hooks for `getSnapshotBeforeUpdate` and `componentDidCatch` soon!

NOTE: You may use this for your self learning and internal trainings but for people out there that will take advantage of free resources
and market it to people as paid, I simply won't allow it.

## Installation :bowtie:

After cloning, to run the project for the first time,
Install all needed packages.

```
yarn
```

To start the local view,

```
yarn start
```

By default the application should be ready at `localhost:3000`, provided there is no change.
I've also included some vscode configurations that made my life easier so I encourage you to use that editor as well.

## Checkpoint Answers

:question: For the checkpoint answers, (DO NOT READ THIS IF YOU WANT TO CHALLENGE YOUR LEARNING) :stuck_out_tongue_closed_eyes:

### Checkpoint #1: :fire:

Your goal is to keep the state changes that `<Counter>` fired.
Since state is only persisted when the component is mounted, you just have to lift the state up to the
container that contains the button that hides the `<Counter>` component. Then, pass the value and setter as props to the counter component.
This way the state is persisted to the parent container of `<Counter>`, so even if `<Counter>` unmounts the state is still present at its container.

### Checkpoint #2: :punch:

The console in useLayoutEffect will print first since it happens synchronously after browser paint.

### Checkpoint #3: :shit:

What's wrong with the custom hook is that we use `useState` to keep track of the values inside the input fields.
Causing the component to rerender everytime the user types something in the user field.
Since input itself has it's own behavior of updating the view outside React's ecosystem the best approach here is to use references.
`useRef` to the rescue. Change state definitions to `useRef` and setters to `valueRef.current = <new value>` then set all access to `values`
into `valueRef.current`. You may now remove the `value={...}` prop definition in the inputs since we are not controlling the value of
the `<input>s` through React definitions anymore.
