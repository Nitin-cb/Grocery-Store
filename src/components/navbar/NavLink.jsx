export function NavLink({ href, children }) {
    return (
      <a href={href} className="relative text-gray-600 hover:text-gray-800 py-2 group">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      </a>
    )
  }