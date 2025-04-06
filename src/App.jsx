import React from 'react'
import { Header } from './Header'
import { useState } from 'react';
import { Section } from './Section';
import { ContactSection } from './ContactSection';
import { AboutSection } from './AboutSection';

export const App = () => {
  const [view, setView] = useState("");

  const renderContent = () => {
    switch (view) {
      case "projects":
        return <Section />;
      case "contact":
        return <ContactSection />;
      case "about":
        return <AboutSection/>;
      default:
        return;
    }
  };
  return (
    <>
    <div id="left-image-stripe"></div>
    
      <Header currentView={view} onChangeView={setView} />
      <div>
        {renderContent()}
      </div>
    </>
  );
}
