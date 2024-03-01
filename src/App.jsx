import { useState } from "react";
import Card from './components/Card';
import Tabel from './components/Tabel';

const menus = [
  {
    id: 1,
    namaMenu: "Bakso",
    harga: 17000,
    gambar: '/image/bakso.jfif',
    qty: 0
  },
  {
    id: 2,
    namaMenu: "Mie Ayam",
    harga: 15000,
    gambar: '/image/mieAyam.jfif',
    qty: 0
  },
  {
    id: 3,
    namaMenu: "Mie Yamin",
    harga: 15000,
    gambar: '/image/mieYamin.jfif',
    qty: 0
  },
  {
    id: 4,
    namaMenu: "Es Jeruk",
    harga: 10000,
    gambar: '/image/esJeruk.jfif',
    qty: 0
  },
  {
    id: 5,
    namaMenu: "Es Teh",
    harga: 5000,
    gambar: '/image/esTeh.jfif',
    qty: 0
  }
];

const Pembelian = [
  {totPembelian : 0}
]

function App() {

  const [items, setItems] = useState(menus);
  const [Kembalian, setValue] = useState("");

  function tambahQTY(id){
    // alert(id)
    const index = id -1
    setItems((items) => 
      menus.splice(index,1, {
        id: menus[index].id,
        namaMenu: menus[index].namaMenu,
        harga: menus[index].harga,
        gambar: menus[index].gambar,
        qty: menus[index].qty + 1,
      })
    );
    setItems((items) => 
    Pembelian.splice(0,1, {
      totPembelian : menus[index].harga + Pembelian[0].totPembelian
    })
    );
  }
  
  function kurangQTY(id){
    // alert(id)
    const index = id -1
    
    if(menus[index].qty > 0){
      setItems((items) => 
        menus.splice(index,1, {
          id: menus[index].id,
          namaMenu: menus[index].namaMenu,
          harga: menus[index].harga,
          gambar: menus[index].gambar,
          qty: menus[index].qty - 1,
        }),
      );
      setItems((items) => 
    Pembelian.splice(0,1, {
      totPembelian : Pembelian[0].totPembelian - menus[index].harga
    })
    );
    }else{
      alert('QTY Masih Nol')
    }
  }
  
  function bayar(value){
    setValue(value.target.value)
  }

  return (
    <div className="container">
      <div className="main-1">
        {menus.map((menu) => (
          <Card key={menu.id} id={menu.id} namaMenu={menu.namaMenu} harga={menu.harga} gambar={menu.gambar} qty={menu.qty} tambahQTY={tambahQTY} kurangQTY={kurangQTY}/>
        ))}
      </div>
      <div className="main-2">
        <div>
            <Tabel pembelian={menus}/>
        </div>
        <div className='inputPembayaran'>
          <div>Total :</div>
          <input value={Pembelian[0].totPembelian} type="text" placeholder='SUBTOTAL'/>
          <div>Bayar :</div>
          <input onInput={bayar} type="text" placeholder='BAYAR'/>
          <div>Kembalian :</div>
          <input value={Kembalian - Pembelian[0].totPembelian} type="text" placeholder='KEMBALIAN'/>
        </div>
      </div>
    </div>
  )
}

export default App;