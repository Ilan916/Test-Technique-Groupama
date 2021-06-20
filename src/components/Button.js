import './Button.css'
import chevron from '../chevron-right-solid.png'


function BtnTest({ PlusUn, nbrUn, altText }) {
    return (
        <div onClick={PlusUn}  className="Button">

                <p className="ContentBtn">Lire L'article</p> <img className="chevron" alt={altText}  src={chevron} />

                <span style={{display: nbrUn <= 0 ? 'none' : 'block' }} className="counter">{nbrUn}</span>
                
            </div>
    )
}

export default BtnTest
