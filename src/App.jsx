/* eslint-disable no-undef */
/* eslint-disable no-global-assign */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Modal,FloatingLabel,Table,Alert } from 'react-bootstrap';
import styled, { createGlobalStyle } from 'styled-components'
import JSConfetti from 'js-confetti'
const GlobalStyle = createGlobalStyle`
  body {
    background-color: lightgray;
  }
  .buttonekle{
    border-radius: 10px;
    background-color:gray;
    margin: 15px;
    padding: 10px;


  }
 .uyari{
  color: red;
}
.buttonsil{
  float: inline-end;
}

.table{
  text-align: center;
  vertical-align: middle;
}

td:hover{
  cursor: pointer;
}

.card-footer{
  position: fixed;
  bottom: 0px;
  width: 100%;
}

.mysatir{
  text-decoration: line-through;
}

.silsutun{
  width: 123px;
}
`;
function App() {


  window.onload = function() {
    setProducts((products) => {
      return products.filter((product) => product.urunno !== 0)
      }) 
  
  };
  const Markets=[
    {"id": 0,"name": "Makbul"},
    {"id": 1,"name": "BİM"},
    {"id": 2,"name": "Carrefoursa"},
    {"id": 3,"name": "DIA"},
    {"id": 4,"name": "Makro Market"},
    {"id": 5,"name": "Metro"},
    {"id": 6,"name": "Migros"},
    {"id": 7,"name": "Real"},
    {"id": 8,"name": "Kipa"},
    {"id": 9,"name": "Kim"},
    {"id": 10,"name": "A101"},
    {"id": 11,"name": "Şok"},
    {"id": 12,"name": "Bizim Market"},
    {"id": 13,"name": "File Market"},
    {"id": 14,"name": "Seç Market"},
    {"id": 15,"name": "Adese Market"},
 
    
  ];
  const Kategoris=[
    {"id": 0,"name": "Film & Müzik & Oyun"},
    {"id": 1,"name": "Elektronik"},
    {"id": 2,"name": "Giyim & Aksesuar"},
    {"id": 3,"name": "Takı & Gözlük & Saat"},
    {"id": 4,"name": "Kozmetik & Kişisel Bakım"},
    {"id": 5,"name": "Anne & Bebek & Oyuncak"},
    {"id": 6,"name": "Hobi & Oyuncak"},
    {"id": 7,"name": "Fotoğraf & Kamera"},
    {"id": 8,"name": "Ev Dekorasyon"},
    {"id": 9,"name": "Spor & Outdoor"},
    {"id": 10,"name": "Süpermarket"},
    {"id": 11,"name": "Yapı Market & Bahçe"},
    {"id": 12,"name": "Otomobil & Motosiklet"},
    {"id": 13,"name": "Pet Shop"},
    {"id": 14,"name": "Ofis Kırtasiye"},
    {"id": 15,"name": "Kitap"}
     ]
    const [urunAdi, setUrunAdi] = useState("");
    const [kategoriID, setKategoriID] = useState("");
    const [marketID, setMarketID] = useState("");
    const [products, setProducts] = useState([{
      urunno:Number=0,
      urunAdi:String="",
      kategoriID:Number=-1,
      marketID:Number=-1,
      isBought: Boolean=false
  }]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [uyari, setuyari] = useState(true);
  const [nodata,setnodata]=useState(false);
  const [controlmesaj, setControlmesaj]= useState(false);
  function UrunEkle(){
    setuyari(true);
   if (urunAdi!==""&&kategoriID!==""&&marketID!==""){

    setProducts([...products,{urunno:Math.floor(Math.random() * 1000),urunAdi:urunAdi,
      kategoriID: kategoriID,
      marketID:marketID, isBought:false}]);


      setUrunAdi("");
      setKategoriID("");
      setMarketID("");
      handleClose();  
      setnodata(true);
      setShowtebrik(true);
      setControlmesaj(true);
    } else {
      setuyari(false);

    }
    // document.getElementById("tablebody").innerHTML=`
     
    // `;
  }

  const jsConfetti = new JSConfetti()

  async function btnClickSil(urunno){

   

      setProducts((products)=>{
        return products.filter((product)=>(product.urunno!== urunno))
      });
  
      const bought = products.every(product => product.isBought ===true);
       if (bought==true && controlmesaj===true){
        setShowtebrik(false)
        setTimeout(() => {
          setShowtebrik(true)
        }, 6000);
        setControlmesaj(false);
        jsConfetti.addConfetti({
          emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
       })
      } else { setShowtebrik(true)} 
      if (products.length===1){
        setnodata(!nodata);
      }



  }
  const [showtebrik, setShowtebrik] = useState(true);
 async function btnClickSatinAl(index_){
    document.getElementById(index_).classList.remove("table-warning");
    document.getElementById(index_).classList.add("table-success");
    document.getElementById(index_).classList.add("mysatir");

    products[index_].isBought=true;

    
    const bought = products.every(product => product.isBought ===true);
    if (bought==true && controlmesaj===true){

      setShowtebrik(false)
      setTimeout(() => {
        setShowtebrik(true)
      }, 6000);
      setControlmesaj(false);
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
     })
      
    } else { setShowtebrik(true)} 
/*     
    products.map((val,i)=>{
      val[i].includes(false)
    });


    if (myi===1){
      setShowtebrik(false);

    }


    setProducts((value)=>{
      value[index_].isBought=true;
    })

    products.forEach((value,index)=>{
      if (value.urunno==urun){
        products[index].isBought=true;
      }

    });

    products.forEach((value)=>{
          if (value.urunno===urun){
            setProducts((products)=>{products.isBought=true});
          }
    }) */


/* 
    products.forEach((value)=>{
      if( value.urunno===urun){
        setProducts((products)=>{
          return products.filter((product)=>(product.isBought!== true))
        });
      };
     });


     products.map((value)=>{
        if (value.isBought===true){
          document.getElementById("mysatir").classList.remove("table-warning");
          document.getElementById("mysatir").classList.add("table-success");
        }

     })




 */




  }

  return (
    <>
    <GlobalStyle />
   <div className="container">
      <div className="row">
        <div className='col buttonekle'>
        <Button className="d-flex ms-auto" onClick={handleShow} variant="success">Ürün Ekle</Button>
        </div>
        </div>

      <div className='row'>
        <div className='col'>
            <div >
            <Table className='table' hidden={!nodata} striped bordered hover>
                        <thead>
                          <tr>
                          <th>Ürün Numarası</th>
                          <th>Ürün Adı</th>
                          <th>Ürün Kategorisi</th>
                          <th>Ürünü Satan Market</th>
                          <th className='silsutun'></th>
                          </tr>
                        </thead>
                        <tbody>
                        {products.map((value,index)=>(
                          <tr id={index} className='table-warning'  onClick={()=> btnClickSatinAl(index)} key={index}>
                            <td>{value["urunno"].toString()}</td>
                            <td>{value["urunAdi"]}</td>                                                     
                            <td>{Kategoris[value["kategoriID"]]?.name ?? "Kategori Yok" }</td>  
                            <td>{Markets[value["marketID"]]?.name ?? "Market Yok" } </td>        
                            <td><Button className='buttonsil' onClick={()=> btnClickSil(value["urunno"])}>Sil</Button></td>
                          
                          </tr>
                          ))}
                    
                        </tbody>
                      </Table>

                      <Table hidden={nodata} striped bordered hover>
                        <thead>
                          <tr>
                          <th>Ürün Numarası</th>
                          <th>Ürün Adı</th>
                          <th>Ürün Kategorisi</th>
                          <th>Ürünü Satan Market</th>
                          <th className='silsutun'></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className='myrow'><th colSpan="5" className="text-center" ><p>Gösterilecek Eleman Yoktur.</p> </th></tr>
                        </tbody>      
                      </Table>
            </div>
        </div>
      </div>  
        </div>
         {/* -------------------------------MODAL------------------------------ */}
              <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        id="myModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Ürün Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Ürün Adı"
        className="mb-3"
      >
        <Form.Control type="text" onChange={(e)=>( setUrunAdi(e.target.value))} placeholder="name@example.com" />
        </FloatingLabel>
<Form.Select onChange={(e)=>( setMarketID(e.target.value))} className='my-3 py-3' aria-label="Default select example">
      <option>Ürünü Satan Market</option>
      {Markets.map((value,index)=>(
        <option key={index} value={value["id"]}>{value["name"]}</option>
      ))}
    </Form.Select>
<Form.Select onChange={(e)=>( setKategoriID(e.target.value))}  className='my-3 py-3' aria-label="Default select example">
      <option>Ürün Kategorisi</option>
      {Kategoris.map((value,index)=>(
        <option key={index} value={value["id"]}>{value["name"]}</option>
      ))}
    </Form.Select>
    <div className='uyari' hidden={uyari}> * Lütfen Bütün Alanları Doldurunuz.</div>
        </Modal.Body>
        <Modal.Footer>
       
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=> UrunEkle()} variant="outline-success">Ürün Ekle</Button>
       
               
        </Modal.Footer>
     
      </Modal>
            <div className="card text-center">

      <div className="card-footer text-body-secondary">
        Muhammed Tahir SIRADAĞ - Metese Yazılım ® 2024
      </div>     
              </div>
     {/* ----------------------------------------MODAL---------------------------------------- */}


     <div hidden={showtebrik} className="text-end">

 
     <div className="alert alert-success" role="alert">
  <h4 className="alert-heading">TEBRİKLER!</h4>
  <p>Bütün Ürünlerimizi Satın Aldınız..</p>
  
  <p className="mb-0">Çok Teşekkürler Ederim.</p>
</div>
    </div>
    </>
  )
}

export default App
