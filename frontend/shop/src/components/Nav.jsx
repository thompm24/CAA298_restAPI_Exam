import { Link } from 'react-router-dom'

function Nav() {
  const links = [
    {id: 1, text: "Home", path: ""},
    {id: 2, text: "Customers", path: "/customers/"},
  ]

  return (
    <div className="h-10vh flex bg-slate-900 justify-between z-50 text-white lg:py-5 px-20 py-4">
      <div className="flex items-center flex-1">
        <span className="text-3xl font-bold">University</span>
      </div>
      <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
      <div className="flex-10 ">
      <ul className="flex gap-8 mr-16 text-[18px]"> 
      {
        links.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.text}</Link>
          </li>
          )
        )
      }
      </ul>
      </div>
    </div>
    </div>
  ) 
}

export default Nav;
