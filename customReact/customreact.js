//jo maine index.html mei root id ke saath script banaayi hai usme render karne ke liye dena hai
//jaise ki main khud ki react library bana rha hoon to mujhe bataana padega ki mera react kaisa hoga kis order mei woh cheezein padhega and so on
const reactElement={
    type:'a',
    props: {
        href:"www.google.com",
        target:"_blank"
    },
    children:"click me to visit google"
}
function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    //per ek cheez soch ke dekho ki bhai main aise ek ek karke thode hi attribute set karunga, aise to dikkat ho jaayegi isliye I will write a loop based code
    for(prop in reactElement.props){
        if(prop==='children') continue //pehle aisa hota tha ki condition bhi de di jaati thi props ke andar to usi ko check karne ke liye hai
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)

}
//iss se maine yeh bata diya hai ki jo bhi meri banaayi library use karega usko har ek element isi tarah se likhna padega
const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer) //yeh maine khud ka render banaaya jo ki 2 cheezein lega pehla yeh ki kya inject karna hai and dusra yeh ki kahaan inject karni hai woh cheez

