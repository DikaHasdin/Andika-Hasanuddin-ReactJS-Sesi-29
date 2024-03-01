function Tabel(props) {
    const {pembelian} = props
    const id = 0
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>MENU</th>
                    <th>QTY</th>
                    <th>HARGA</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody id="tbodyPembelian">
                {pembelian.map((pembelian, key) => {
                    if (pembelian.qty > 0) {
                        return (
                            <tr id={pembelian.qty > 0}>
                                <td>{pembelian.namaMenu}</td>
                                <td>{pembelian.qty}</td>
                                <td>{pembelian.harga}</td>
                                <td>{pembelian.qty * pembelian.harga}</td>
                            </tr>
                        )
                      }
                    })} 
            </tbody>
        </table>
    )
  }
  
  export default Tabel;