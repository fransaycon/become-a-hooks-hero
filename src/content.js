import React from "react";
import { ClientRoutes } from "./routes";
import {
  AlertMe,
  BlessingsContainer,
  CheckPointForm,
  CheckPointState,
  Counter,
  DestroyedState,
  Farm,
  Forms,
  GhibliMovies,
  GonnaMount,
  GreetingContainer,
  HelloWorld,
  MeasureTracker,
  PrimeCalculator,
  StageOne,
  Timer,
  TitleFocusWriter
} from "./tutorials";

export const CONTENTS = [
  {
    route: ClientRoutes.HELLO_WORLD,
    preview: "Hello World",
    component: <HelloWorld />
  },
  {
    route: ClientRoutes.USING_PROPS,
    preview: "Using Props",
    component: <GreetingContainer />
  },
  {
    route: ClientRoutes.USING_STATE,
    preview: "Using States",
    component: <Counter />
  },
  {
    route: ClientRoutes.DESTROYING_STATE,
    preview: "Destroying State",
    component: <DestroyedState />
  },
  {
    route: ClientRoutes.CHECKPOINT_STATE,
    preview: "CHECKPOINT #1",
    component: <CheckPointState />
  },
  {
    route: ClientRoutes.USING_REF,
    preview: "Using Ref",
    component: <AlertMe />
  },
  {
    route: ClientRoutes.USING_IMPERATIVE,
    preview: "Using Imperative Refs",
    component: <TitleFocusWriter />
  },
  {
    route: ClientRoutes.USING_EFFECTS,
    preview: "Using Effects",
    component: <Timer />
  },
  {
    route: ClientRoutes.USING_LAYOUT_EFFECT,
    preview: "Using Layout Effects",
    component: <MeasureTracker />
  },
  {
    route: ClientRoutes.CHECKPOINT_EFFECTS,
    preview: "CHECKPOINT #2",
    component: <GonnaMount />
  },
  {
    route: ClientRoutes.USING_CONTEXT,
    preview: "Using Contexts",
    component: <BlessingsContainer />
  },
  {
    route: ClientRoutes.PURE_COMPONENTS,
    preview: "Pure Components",
    component: <StageOne />
  },
  {
    route: ClientRoutes.USING_REDUCERS,
    preview: "Using Reducers",
    component: <GhibliMovies />
  },
  {
    route: ClientRoutes.USING_MEMO,
    preview: "Using Memo",
    component: <PrimeCalculator />
  },
  {
    route: ClientRoutes.USING_CALLBACK,
    preview: "Using Callback",
    component: <Farm />
  },
  {
    route: ClientRoutes.USING_CUSTOM_HOOKS,
    preview: "Creating Your Own Hooks",
    component: <Forms />
  },
  {
    route: ClientRoutes.CHECKPOINT_CUSTOM,
    preview: "CHECKPOINT #3",
    component: <CheckPointForm />
  }
];
