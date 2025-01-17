import React from 'react'
import ReactDom from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistor, store } from './redux/store'
// import { Provider } from 'react-redux'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <Provider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </PersistGate> */}
      {/* </Provider> */}
  </React.StrictMode>
)
