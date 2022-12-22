import React from "react";

const Blogs = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold my-5">
        Some important question and answer
      </h2>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>
            There are four main types of state you need to properly manage in
            your React apps: Local state Global state Server state URL state
            Let's cover each of these in detail: Local (UI) stateLocal state is
            data we manage in one or another component. Local state is most
            often managed in React using the useState hook. For example, local
            state would be needed to show or hide a modal component or to track
            values for a form component, such as form submission, when the form
            is disabled and the values of a form’s inputs. Global (UI) state –
            Global state is data we manage across multiple components. Global
            state is necessary when we want to get and update data anywhere in
            our app, or in multiple components at least. A common example of
            global state is authenticated user state. If a user is logged into
            our app, it is necessary to get and change their data throughout our
            application. Sometimes state we think should be local might become
            global.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            In programming, we often want to take something and extend it. For
            instance, we have a user object with its properties and methods, and
            want to make admin and guest as slightly modified variants of it.
            We’d like to reuse what we have in user, not copy/reimplement its
            methods, just build a new object on top of it. Prototypal
            inheritance is a language feature that helps in that. [[Prototype]]
            In JavaScript, objects have a special hidden property [[Prototype]]
            (as named in the specification), that is either null or references
            another object. That object is called “a prototype”:
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            Unit Testing is a type of software testing where individual units or
            components of a software are tested. The purpose is to validate that
            each unit of the software code performs as expected. Unit Testing is
            done during the development (coding phase) of an application by the
            developers. Unit Tests isolate a section of code and verify its
            correctness. A unit may be an individual function, method,
            procedure, module, or object. In SDLC, STLC, V Model, Unit testing
            is first level of testing done before integration testing. Unit
            testing is a WhiteBox testing technique that is usually performed by
            the developer. Though, in a practical world due to time crunch or
            reluctance of developers to tests, QA engineers also do unit
            testing.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <p>
            There are three frameworks for building web applications that every
            frontend developer has heard about: React, Vue.js, and Angular.
            React is a UI library, Angular is a fully-fledged front-end
            framework, while Vue.js is a progressive framework. They can be used
            almost interchangeably to build front-end applications, but they’re
            not 100 percent the same, so it makes sense to compare them and
            understand their differences. Each framework is component-based and
            allows the rapid creation of UI features. However, they all have a
            different structure and architecture — so first, we’ll look into
            their architectural differences to understand the philosophy behind
            them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
