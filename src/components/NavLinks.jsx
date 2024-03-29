import { NavLink } from "react-router-dom";

const links = [
    { id: 1, url: '/', text: 'home' },
    { id: 2, url: 'aboutus', text: 'about us' },
    { id: 3, url: 'products', text: 'products' },
    { id: 4, url: 'cart', text: 'cart' },
    { id: 5, url: 'checkout', text: 'checkout' },
    { id: 6, url: 'orders', text: 'orders' },
  ];
const NavLinks = () => {
  return (
    <>
      {links.map((link)=>{
      // eslint-disable-next-line no-unused-vars
      const {id, url,text} = link
      return <li key={id}>
        <NavLink className='capitalize ml-1' to={url}>
            {text}
        </NavLink>
      </li>
      })}
    </>
  )
}

export default NavLinks
