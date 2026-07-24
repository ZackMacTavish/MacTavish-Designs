import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

const el = document.createElement('div');
el.id = 'agentation-root';
document.body.appendChild(el);
createRoot(el).render(React.createElement(Agentation));
