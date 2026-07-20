import { createContext, useContext, useState, useEffect, ReactNode, MouseEvent, AnchorHTMLAttributes } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  // Use path-based routing. To support preview and share links correctly, 
  // we initialize with the actual path.
  const [currentPath, setCurrentPath] = useState(() => {
    const initialPath = window.location.pathname;
    // For local environments and sub-directories, we ensure it maps nicely.
    return initialPath || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (to === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState(null, '', to);
    setCurrentPath(to);
    // Instant scroll to top on page swap for a clean, consistent shift
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used within RouterProvider');
  return context;
}

export interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any;
}

export function Link({
  to,
  children,
  onClick,
  className,
  id,
  title,
  ...props
}: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // If meta key is held (e.g., cmd+click to open in new tab), let the browser handle it
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} id={id} title={title} {...props}>
      {children}
    </a>
  );
}
