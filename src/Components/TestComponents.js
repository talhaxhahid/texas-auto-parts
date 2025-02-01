import React, { useState } from 'react';



const TestComponent = () => {


    return(<>
  
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Full Page Component</h1>
      <p style={styles.text}>This component takes up the full height of the viewport.</p>
    </div>

   
    </>);


}

const styles = {
  container: {
    height: '100vh', // Occupies 100% of the viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Optional background color
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  text: {
    fontSize: '1rem',
    color: '#555',
  }
};


export default TestComponent;
;