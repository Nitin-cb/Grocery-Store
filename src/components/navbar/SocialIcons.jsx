export function SocialIcon({ href, children, ...props }) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors" {...props}>
        {children}
      </a>
    )
  }