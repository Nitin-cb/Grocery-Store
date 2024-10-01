export function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative text-gray-600 hover:text-gray-900 font-medium transition duration-300 ease-in-out transform  group"
    >
      {children}
      {/* Underline animation */}
      <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-green-500 scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
    </a>
  );
}
