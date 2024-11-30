import { createContext, useContext } from 'react';

const NonceContext = createContext<string | undefined>(undefined);
const NonceProvider = NonceContext.Provider;
const useNonce = () => useContext(NonceContext);

const getClientNonce = () => document.querySelector('meta')?.nonce;

export default NonceProvider;
export { NonceContext, getClientNonce, useNonce };
