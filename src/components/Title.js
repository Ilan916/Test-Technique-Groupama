import './Tilte.css'



function Titre({color, content}) {
    return (
        <div>
               <h1 style={{color: color}} >{content}</h1>
            </div>
    )
}

export default Titre
