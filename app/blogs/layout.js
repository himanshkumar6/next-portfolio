import React from 'react';

export const metadata = {
  title: 'Blogs - MySite',
  description: 'Read our latest blogs and articles',
};

export default function BlogsLayout({ children }) {

  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
}
