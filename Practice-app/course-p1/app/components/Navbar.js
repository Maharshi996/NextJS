import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link className="link" href = "/">Home</Link>
                <Link className="link" href = "/users">Users</Link>
                <Link className="link" href = "/users/about">about</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar