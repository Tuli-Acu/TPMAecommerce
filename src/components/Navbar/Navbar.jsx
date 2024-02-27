import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget.jsx'

const Navbar = () => {
    return (
    <header className={classes .header}>
        <nav>
        
        <h4> Ecommerce El Tuli </h4>
    
            <a className='btn btn-primary'> Monopatin </a>
            <a className='btn btn-primary'> Bicicleta </a>
            <a className='btn btn-primary'> E-Bike </a>
            <div>
               <CartWidget/> 
            </div>
        </nav>
    </header>
      )
    }

    export default Navbar