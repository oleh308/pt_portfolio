const AdminAuthContext = React.createContext({});

const AdminAuthProvider = ({ children }) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  React.useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <AdminAuthContext.Provider value={{ width, height }}>
      {children}
    </AdminAuthContext.Provider>
  );
};


export { AdminAuthProvider, AdminAuthContext };
