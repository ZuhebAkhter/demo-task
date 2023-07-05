let totalPrice = 0;

function AddProduct(event){
    event.preventDefault();
    const productName = document.getElementById('nameofproduct').value;
    const sellingPrice = parseFloat(document.getElementById('price').value);
    let priceoflocal=parseFloat(localStorage.getItem('productprice'));
    if(priceoflocal!=0){
        totalPrice=sellingPrice+priceoflocal;}
        else{
    totalPrice += sellingPrice}
    const Productdetails={
        sellingPrice,
        productName 
    }
    // ShowUser(Productdetails);
    // const sellingPrice = parseFloat(document.getElementById('price').value);
    const listofAllproducts=document.querySelector(".listofProduct");
    const list=document.createElement('li');
    list.classList.add('newlist');

    list.innerHTML=`  ${Productdetails.productName} - ${Productdetails.sellingPrice}  `
    const deletebutton=document.createElement('input');
    deletebutton.type='button';
    deletebutton.value="Delete Product";
    // try{
    // const res=  axios.get(`https://crudcrud.com/api/fe3b6a964ee54316b2eb0d0527da01fb/productdetails`)
    // console.log(res)}
    // catch{
    //     (err)=>console.log(err)
    // }
    async function Posttocrud(){
        try{const res= await axios.post("https://crudcrud.com/api/f69c4cbf309f450b92f32228cb7f8091/productdetails",Productdetails)
    }
        catch{
            (err)=>console.log(err)
            
        }
    }
    Posttocrud();



    deletebutton.addEventListener('click',async()=>{
    //   axios.delete(`https://crudcrud.com/api/31df43141d8b4bfa8524091127f39de9/productdetails/${Productdetails._id}`)
    //   .then(res=>removeUser(res))
    //   .catch(err=>console.log(err))
    try{
        const res= await  axios.delete(`https://crudcrud.com/api/f69c4cbf309f450b92f32228cb7f8091/productdetails/${}`)
        console.log(res)
    }
        catch{
            (err)=>console.log(err)
        }
   

    listofAllproducts.removeChild(list)
        totalPrice=totalPrice-sellingPrice;

    
    // totalPrice=localstotal-sellingPrice;
    

    const Finalprice=document.querySelector('.finalprice');
    Finalprice.innerHTML=`In Rupees ${totalPrice}`;
    // deleteUser();
    // localStorage.setItem("productprice", totalPrice);

    
    
    })

    
    list.appendChild(deletebutton)
    listofAllproducts.appendChild(list);

    

    // totalPrice=totalPrice-sellingPrice;


    const Finalprice=document.querySelector('.finalprice');
    
    
    Finalprice.innerHTML=`In Rupees ${totalPrice}`;
    localStorage.setItem("productprice", totalPrice);









}
//  async function deleteUser(data){
//     try{
//         await axios.delete(`https://crudcrud.com/api/2f557b57f1cb4bb1a3f858312bcdc59e/productdetails/${data._id}`)
   
//    }catch{
//        (err)=>console.log(err)
//    }
// }










function ShowUser(Productdetails){

    document.getElementById('nameofproduct').value='';
    document.getElementById('price').value='';

    const listofAllproducts=document.querySelector(".listofProduct");
    const list=document.createElement('li');
    // list.classList.add('newlist');

    list.innerHTML=`  ${Productdetails.productName} - ${Productdetails.sellingPrice}  `
    const deletebutton=document.createElement('input');
    deletebutton.type='button';
    deletebutton.value="Delete Product";

    deletebutton.addEventListener('click',async()=>{
    //   axios.delete(`https://crudcrud.com/api/31df43141d8b4bfa8524091127f39de9/productdetails/${Productdetails._id}`)
    //   .then(res=>removeUser(res))
    //   .catch(err=>console.log(err))
    try{
         await axios.delete(`https://crudcrud.com/api/f69c4cbf309f450b92f32228cb7f8091/productdetails/${Productdetails._id}`)
    }catch{
        (err)=>console.log(err)
    }
    
    // listofAllproducts.removeChild(list)
    listofAllproducts.removeChild(list);
    
    let localstotal=localStorage.getItem('productprice')
    
    // totalPrice=localstotal-sellingPrice;
    totalPrice=localstotal-Productdetails.sellingPrice;
    
    const Finalprice=document.querySelector('.finalprice');
    Finalprice.innerHTML=`In Rupees ${totalPrice}`;
    // deleteUser();
    localStorage.setItem("productprice", totalPrice);

    
    
    })
    list.appendChild(deletebutton)
    listofAllproducts.appendChild(list);

}

function removeUser(){
    const listofAllproducts=document.querySelector(".listofProduct");
    const listofprdt=document.querySelector('.newlist');

    listofAllproducts.removeChild(listofprdt);



}

        window.addEventListener('DOMContentLoaded',async ()=>{
            // axios.get('https://crudcrud.com/api/31df43141d8b4bfa8524091127f39de9/productdetails1')
            // .then((res)=>{
                
            //     for(var i=0;i<res.data.length;i++){
            //         ShowUser(res.data[i])
            //     }
            // })
            // .catch((err)=>{
            //     console.log(err)
            // })
            // let price=localStorage.getItem('productprice');
            let price=0;
            const Finalprice=document.querySelector('.finalprice');
        
        
                try{ const res= await axios.get('https://crudcrud.com/api/f69c4cbf309f450b92f32228cb7f8091/productdetails')
                for(var i=0;i<res.data.length;i++){
                            ShowUser(res.data[i])
                            price=price+(res.data[i].sellingPrice);
                        }
            }catch{
                (err)=>console.log(err)
            }
            
            Finalprice.textContent=`In Rupees ${price}`;
            localStorage.setItem("productprice",price)
        
            
            
        })