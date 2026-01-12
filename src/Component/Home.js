
import Header from './Header';
import FoodOption from './FoodOption';
import GroceryOption from './GroceryOption';
import DineOption from './DineOption';
import Image from './Image';
import FoodDeliveryOption from './FoodDeliveryOption';
import GroceryDeliveryOption from './GroceryDeliveryOption';

export default function Home(){


    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        <DineOption></DineOption>
        <Image></Image>
        <FoodDeliveryOption></FoodDeliveryOption>
        <GroceryDeliveryOption></GroceryDeliveryOption>
        </>
    )
}