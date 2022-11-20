// SSD memory charge

function  addproduct_Id(product_id,price){
    const product_Id=document.getElementById(product_id+'-memory');
    
    let getValue=product_Id.innerText;
    const addValueWithGotValue=parseFloat(getValue)+price;
    product_Id.innerText=addValueWithGotValue;

    // let product_inputVlue=product_Id.value;

    // const baseValue_Id=product_Id.value;
    // baseValue_Id.innerText=product_inputVlue+price;

    calculateTotal()
}

function updateproductValue(product_Id){
    const getProduct=document.getElementById(product_Id+'-memory');
    const thisIsProductValue=parseInt(getProduct.innerText);
    return thisIsProductValue;
}
function calculateTotal(){
    const getValue=document.getElementById('ProductValue-memory');
    const getValuePars=parseInt(getValue.innerText);
    console.log(getValuePars);
    const memory=updateproductValue('Sixteengb');
    const SSD=updateproductValue('extraStorage');
    const SSD1=updateproductValue('extraStorage');
    const Delivery=updateproductValue('deliverycharge');
    console.log(Delivery);
    let GrandTotal=getValuePars+memory+SSD+SSD1+Delivery;
    document.getElementById('sub-total-price').innerText=GrandTotal;
    document.getElementById('finalTotal').innerText=GrandTotal;
    

    

    
}
    
    document.getElementById('apply').addEventListener('click',function(){
        calculateTotal();
        const Pcode=document.getElementById('code').innerText;
        let promocode='abc';
        if(promocode==Pcode){
            const discount=GrandTotal*0.2;
           const discounted= GrandTotal-discount;
            
        }else{
            alert('Sorry ,add PromoCode')
        }
        
    })
    
function DisableNextButton(btnId) {
    
    document.getElementById(btnId).disabled = 'true';
    
    
}
document.getElementById('Sixteengb-memory').addEventListener('click',function(){
    addproduct_Id('extra16gb',180);
})
document.getElementById('ssd-512gb-memory').addEventListener('click',function(){
    addproduct_Id('extraStorage',100);
    DisableNextButton('ssd-512gb-memory');
   
})
document.getElementById('ssd-1tb-memory').addEventListener('click',function(){
    addproduct_Id('extraStorage',180);
    DisableNextButton('ssd-1tb-memory');
    
})
document.getElementById('aug21Delivery-memory').addEventListener('click',function(){
    addproduct_Id('deliverycharge',20);
})
document.getElementById('ProductValue-memory').addEventListener('click',function(){
    addproduct_Id('sub-total',0)
})

document.getElementById('apply').addEventListener('click',function(){
    apply('abc')
   
})