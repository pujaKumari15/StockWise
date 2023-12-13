import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from "./keycloakInstance";

const root = createRoot(document.getElementById('root'));

root.render(
    <ReactKeycloakProvider authClient={keycloak}>
        <App />
    </ReactKeycloakProvider>
);