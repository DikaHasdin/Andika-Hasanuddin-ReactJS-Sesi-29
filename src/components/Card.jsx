import { useState } from 'react'
function Card(props) {
    const {id, namaMenu, harga, gambar, qty, tambahQTY, kurangQTY} = props
    const [count, setCount] = useState(0)
    return (
   
        <div className="card">
            <div className="card-img">
                <img src={gambar} alt=""/>
            </div>
            <div className="card-judul">
                <div>{ namaMenu }</div>
                <div>Rp. {harga}</div>
            </div>
            <div className="card-qty">
                <div>
                    <button onClick={() => tambahQTY(id)}>+</button>
                </div>
                <div>{qty}</div>
                <div>
                    <button onClick={() => kurangQTY(id)}>-</button>
                </div>
            </div>
        </div>

    )
  }
  
  export default Card;