import Aside from './Aside';
import Main from './Main';
import AsideFooter from './AsideFooter';

function App() {
  return (
    <div>
      <div className="container">
        <div className="flex">
          <Aside />
          <Main />
          <AsideFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
