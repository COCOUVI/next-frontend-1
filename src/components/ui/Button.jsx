export function Button({ children, onClick, type = "button", className = "", ...props }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
  