import React from 'react';
import {Route} from 'react-router-dom';

//this component takes a prop called component that respresents the component that will be rendered when a matching route is found
//The route component can take a render method in place of a component. This allows us to control what is passed into our component

export default ({component: C, props: cProps, ...rest}) =>
    <Route {...rest} render={props=> <C {...props} {...cProps} />} />;