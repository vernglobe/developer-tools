// import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "./components";
import "./App.css";
import { JsonMinify } from './components/center-content/JsonMinify';
import { CssMinify } from './components/center-content/CssMinify';
import { ScriptCompiler } from './components/center-content/ScriptCompiler';
import { TopbarItems } from "./components/topbar/TopbarItems";
import { Topbar } from "./components/topbar";


type MenuItem = {
  title: string;
  subItems?: Array<string>;
};
type MenuConfig = Array<MenuItem>;

const sampleConfig:MenuItem = {
  title: "item1",
  subItems: ["subItem1a","subItem1b"]
}

const allMenuConfig:MenuConfig = [];
allMenuConfig.push(sampleConfig)

const menuConfig = [
  {
    title: 'Home',
  },
  {
    title: 'Services',
    subItems: ['Cooking', 'Cleaning'],
  },
  {
    title: 'Contact',
    subItems: ['Phone', 'Mail'],
  },
];

function App() {
  //<Route path='/' element={<Home menuConfig={menuConfig}></Home>}/>
  //<Announcement/>
  // <Route path='/developer/*' element={<DevHome/>}/>
  /*
  <ShoppingCartProvider>
    <div style={{maxHeight:"900px !important"}}>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/eshop' element={<Home/>}/>
      <Route path='/eshop/products' element={<Store/>}/>
      <Route path='/eshop/register' element={<Register/>}/>
      <Route path='/eshop/checkout' element={<Checkout/>}/>
      <Route path='/eshop/shippinginfo' element={<ShippingInfo/>}/>
      <Route path='/eshop/shipping' element={<Shipping/>}/>
      <Route path='/eshop/payment' element={<Payment/>}/>

      <Route path='/tools/jsonminify' element={<JsonMinify/>}/>
      <Route path='/tools/cssminify' element={<CssMinify/>}/>
      <Route path='/tools/scriptcompiler' element={<ScriptCompiler/>}/>
      
    </Routes>
    </div>
  </ShoppingCartProvider>
      */

    return (
    <div id="devmain">
      <Sidebar>
        <BrowserRouter>
        <Routes>
          <Route key="homepage"
                path="/"
                element={<DynamicItem page="homepage" />}/>
            {dummyData &&
            dummyData.map((item:any, index: number) => (
              <>
              <Route 
                key={index}
                path={item.path}
                element={<DynamicItem page={item.name} content={item.content}/>} />
              </>
            ))}
        </Routes>
        </BrowserRouter>
      </Sidebar>
    </div>
    );
}


export default App;
