import React from 'react';

const PageContainer = ({ children }) => {
  return (
    <div style={{
      paddingTop: '80px', // Adjust this value based on your navbar height
      minHeight: 'calc(100vh - 80px)', // Adjust if needed
      backgroundColor: '#000', // Match your background color
    }}>
      {children}
    </div>
  );
};

export default PageContainer;
