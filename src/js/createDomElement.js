export default function createDomElem(typeOfElem, classNames, children, parent, content, ...dataAttr) {
    let element = document.createElement(typeOfElem);

    if (classNames) element.classList.add(...classNames);

    if (children && children.length != 0) {
        children.forEach(child => {
            element.appendChild(child);
        });
    }

    if (parent) parent.appendChild(element);

    if (content) element.innerHTML = content;

    if (dataAttr.length) {
        dataAttr.forEach(([attrName, attrValue]) => {
            if (!attrValue) {
                element.setAttribute(attrName, '');
            } else {
                element.dataset[attrName] = attrValue;
            }
        })
    }

    return element;
}