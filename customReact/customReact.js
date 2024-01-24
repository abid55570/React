function customRender(reactElement,container) {
//     const domElement = document.createElement
//     (reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)
//     container.appendChild(domElement)
// }
                // or we can use //
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        }
        container.appendChild(domElement)
    }

const reactElement = {
    type: 'a', //may be div, para, (type of element )
    props: { // it is an object  key:value pair
        href: 'https://google.com',
        target: '_blank' //html 
    },
    children : 'click here to visit google'
} //each element has to be white in this format 

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
//  what have to enject ^ , where^ have to inject 