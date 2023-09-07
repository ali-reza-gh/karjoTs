
import ReactDOM from 'react-dom/client';

//Components
import App from './App';

//Styles
import './index.css';

//React-Router-Dom
import { BrowserRouter } from 'react-router-dom';

//Polaris-Shopify
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from "@shopify/polaris";

//GQL
import { ApolloProvider } from '@apollo/client';
import { client } from './graphQL/Client';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ApolloProvider client={client} >
      <BrowserRouter>
        <AppProvider i18n={enTranslations}>
          <App />
        </AppProvider>
      </BrowserRouter>
    </ApolloProvider>
);