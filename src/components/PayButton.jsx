import axios from "axios";
import {useSelector} from "react-redux";
//import {url} from ""

const PayButton = ({cartItems}) =>{
    const handleCheckout = () =>{
        console.log(cartItems);
        axios.post('http://localhost:3000/api/stripe/create-checkout-session',{
            _id: cartItems._id,
            content: cartItems.content,
            koszt: cartItems.koszt
        })
        .then((res)=>{
            if(res.data.url){
                window.location.href = res.data.url;
            }
        })
            .catch((err)=> console.log(err.message));

    };
    return(
        <button onClick={()=>handleCheckout()}>Check Out</button>
    )
}
export default PayButton;