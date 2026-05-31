function PageLayout({ children }) {
  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-800">
      {children}
    </div>
  );
}

export default PageLayout;