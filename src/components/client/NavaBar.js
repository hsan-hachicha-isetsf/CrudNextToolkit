"use client"
import {useSession, signOut} from 'next-auth/react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { useShoppingCart } from "use-shopping-cart" ;
import Link from "next/link";
const NavaBar = () => {
    const {data} =useSession();
    const {cartCount} = useShoppingCart();
return (
<nav className="navbar navbar-expand-lg bg-light">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
<Link className="nav-link" href={"/client"}>Home</Link>
</li>

<li className="nav-item">
<Link className="btn btn-default" href={'/client/cartProducts'}><ShoppingBasketIcon style={{ color: 'pink' }}/>
Shopping Cart </Link>
</li>
<li className="nav-item">
<button className="btn btn-default">
<Link href={"/client/cartproductlist"}>
<ShoppingCartIcon style={{ color: 'pink' }}/>
<span className="badge bg-primary">{cartCount}</span>
</Link>
</button>

{data ? ( <>
<button className="btn btn-default" onClick={() => {signOut();}}>Logout
</button>
</>
): null
}
</li>
</ul>
</nav>
);
};
export default NavaBar;