Typescript provides a lot of power for developers doing object-oriented programming (OOP).  Interfaces, classes, inheritance, and generics allow Typescript developers to build rich class hierarchies.  

Many hierarchies are built in the context of web UI development where the instance of a type represents a control.  The control owns a  fragment of the document object model (DOM) and there is often one-way or two-way data binding.   Modern UI frameworks generally give you some base class to derive from in order to implement your control.  All the OOP power is great because what you want is to manipulate the state of items in a hierarchy.  

OOP can also be used to create data models hierarchies.  Methods can be attached to data retrieved from storage or a web API to provide an object model hierarchy that provides application logic.  These classes can also be good citizens in a Model-View-Controller (MVC) pattern like Flux, Reflux, or Redux and are good observables in an observer/observable framework like MobX, Angular, or Knockout.

When building class hierarchies for an application, developers adjust their inheritance structure, add/remove methods, and change member variables in classes as the UI changes or as new requirements are placed on the application state.  This is reasonable choice as the application's code base is under the developers' immediate control and all ship part and parcel with the application.