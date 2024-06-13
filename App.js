import Main from './Main';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { StripeProvider } from '@stripe/stripe-react-native'; 

const stripeKey = 'pk_test_KWhJpOg4J9AwvkPcIi5x2xy200IjnwAxyG'
export default function App() {
  return (
    <StripeProvider
      publishableKey={stripeKey}
      merchantIdentifier='udta8317'
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5
      }}
    >
      <Provider store={store}>
        <Main/>
      </Provider>
    </StripeProvider>
  );
}

