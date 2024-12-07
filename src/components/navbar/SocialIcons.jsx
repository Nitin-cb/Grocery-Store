export function SocialIcon({ href, children, ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black  hover:text-gray-800 transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}
