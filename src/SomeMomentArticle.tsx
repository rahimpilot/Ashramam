import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';
import { MOMENT_ARTICLES } from './someMomentArticles';

/** A single Some Moments photo article — members only. */
const SomeMomentArticle: React.FC = () => {
  const navigate = useNavigate();
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const [copied, setCopied] = useState(false);

  const article = MOMENT_ARTICLES.find((a) => a.slug === articleSlug);

  const copyArticleLink = async () => {
    if (!article) return;
    // ?v=1 busts WhatsApp's aggressive preview cache — bump on stale previews.
    const url = `https://www.ashramamvibes.com/some-moment/${article.slug}?v=1`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch { /* clipboard unavailable */ }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #d9d4e9 0%, #f0ebf9 55%, #e3def0 100%)',
      fontFamily: "'Marcellus', Georgia, serif"
    }}>
      {/* Back Button */}
      <div style={{
        padding: '1rem 0.5rem',
        background: 'rgba(255, 255, 255, 0.78)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 12px rgba(91, 155, 213, 0.15)'
      }}>
        <button
          onClick={() => navigate('/some-moment')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#3a332a'
          }}
        >
          ← Back
        </button>
      </div>

      <div className="iv-page" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
        {!article ? (
          <div style={{
            background: '#ffffff',
            border: '1px solid #d9d9d9',
            borderRadius: '12px',
            padding: '48px 24px',
            textAlign: 'center',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
          }}>
            <p style={{ fontSize: '18px', color: '#111111', margin: 0 }}>
              This story couldn&apos;t be found.
            </p>
          </div>
        ) : (
          <div style={{
            background: '#ffffff',
            border: '1px solid #d9d9d9',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
              gap: '12px'
            }}>
              <h1 style={{
                fontSize: '24px',
                fontWeight: 400,
                color: '#111111',
                margin: 0
              }}>
                {article.title}
              </h1>
              <button
                onClick={copyArticleLink}
                title="Copy link"
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '6px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  lineHeight: 1,
                  flexShrink: 0
                }}
              >
                {copied ? <span style={{ color: '#1c9c4c' }}>✓</span> : '🔗'}
              </button>
            </div>
            <img
              src={article.image}
              alt={article.title}
              style={{
                width: '100%',
                display: 'block',
                borderRadius: '8px',
                marginBottom: '16px'
              }}
            />
            {article.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: '#333333',
                  margin: i === article.paragraphs.length - 1 ? 0 : '0 0 16px 0'
                }}
              >
                {p}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Spacer so content isn't hidden behind the bottom nav */}
      <div className="iv-dock-spacer" />
      <BottomNavigation />
    </div>
  );
};

export default SomeMomentArticle;
