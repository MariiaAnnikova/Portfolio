import React, { Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './18n/18n';
import { HomePage  } from './pages/homePage/homePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <HomePage />
    </Suspense>
);

