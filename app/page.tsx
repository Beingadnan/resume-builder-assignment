'use client';
import React from 'react';
import { ResumeProvider } from './context/ResumeContext';
import EditorPanel from './components/editor/EditorPanel';
import PreviewPanel from './components/preview/PreviewPanel';
import ExportButton from './components/ui/ExportButton';

export default function HomePage() {
  return (
    <ResumeProvider>
      <div className="app-root">
        {/* Header */}
        <header className="app-header" role="banner">
          <div className="header-left">
            <div className="logo-mark">
              <span className="logo-icon">◈</span>
              <span className="logo-text">ResumeForge</span>
            </div>
            <span className="header-tagline">Craft your story</span>
          </div>
          <div className="header-center">
            <div className="header-status">
              <span className="status-dot" />
              <span>Auto-saving to preview</span>
            </div>
          </div>
          <div className="header-right">
            <div className="header-author">
              <span className="author-name">Adnan Khan</span>
              <span className="author-email">beingadnankhan678@gmail.com</span>
            </div>
            <ExportButton />
          </div>
        </header>

        {/* Main Split Pane */}
        <main className="app-main" role="main">
          <EditorPanel />
          <div className="pane-divider" aria-hidden="true" />
          <PreviewPanel />
        </main>

        {/* Footer */}
        <footer className="app-footer" role="contentinfo">
          <div className="footer-inner">
            <div className="footer-left">
              <span className="footer-name">Adnan Khan</span>
              <span className="footer-sep">·</span>
              <span className="footer-email">beingadnankhan678@gmail.com</span>
            </div>
            <div className="footer-center">
              <span className="footer-copy">© 2026 ResumeForge. All rights reserved.</span>
            </div>
            <div className="footer-right">
              <a
                id="digital-heroes-btn"
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="digital-heroes-btn"
                aria-label="Built for Digital Heroes"
              >
                <span className="dh-icon">⚡</span>
                Built for Digital Heroes
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ResumeProvider>
  );
}
