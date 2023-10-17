



# chapter - 03 Notes : 

1. what is JSX ? 

A : jsx is a javascript XML, jsx allows to us to write HTML like syntax in react 
    -jsx is just syntax not a language and react is a js library 
    - with out jsx we can write react code 
    - jsx merge js and html together 


2 . React.ceateElement vs JSX?



    React.createElement creates an JS object while JSX firstly create React.createElement itself and the create HTML element for rendering.

3. Benifits or super powers of jsx?

    o-Return a single root element: 
    should have a parent like <div></div> or <></> frigms
    o-Close all the tags:
    including self-closing tags <img> --> <img/>
    o-camelCase most of the thing:
    HTML-> <div class="abc"> 
    JSX-> <div className="abc"> 

4 . Behind the scenes of JSX?


    Behind the scenes this also create react element by babel and then convert it into HTMLELEMENT

5. what is Component?
    There are two type to components:
    1- Class Base Component
    2- Functional component
    Any function which returns JSX element or React element is known as functional component.
    Componemt name should starts from capital letter.

6 . Composing component: JSx inside JSX 

    const title = () =>(
        <h1>title here</h1>
    )

    const heading = () =>(
        <>
        {title()} or <title/> or <title></title>
            <h1>code here</h1>
        </>
    )


7. {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in  JSX ?


    All of the syntax of different ways of rendering a component.
    {TitleComponent}: This represents a value in the javascript. If there is a variable called TitleComponent then it will render the variable value in the page.
    {<TitleComponent />}: This will return a React component in the page. There is no children passed in the parameter.
    {<TitleComponent></TitleComponent>}: This is another way of rendering React component just like the self closing one. This way is used when we are supposed to provide some children in the Component as well.
