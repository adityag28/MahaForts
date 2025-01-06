import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './component/Layout';
import NotFound from './pages/NotFound';
import { Suspense, lazy } from 'react';

// Lazy load components
const ExploreForts = lazy(() => import('./pages/ExploreForts'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FortDetails = lazy(() => import('./pages/FortDetails'));
const DistrictPage = lazy(() => import('./pages/DistrictPages'));
const HostFortDetails = lazy(() => import('./host/HostFortDetails'));
const HostArchitectureFeatures = lazy(() => import('./host/HostArchitectureFeatures'));
const HostReach = lazy(() => import('./host/HostReach'));
const HostEntryDetails = lazy(() => import('./host/HostEntryDetails'));
const HostPhotoGallery = lazy(() => import('./host/HostPhotoGallery'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route
            path='/explore'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ExploreForts />
              </Suspense>
            }
          />
          <Route
            path='/about'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path='/contact'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/district/:districtName"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <DistrictPage />
              </Suspense>
            }
          />
          <Route
            path='/forts/:id'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FortDetails />
              </Suspense>
            }
          >
            <Route index element={
              <Suspense fallback={<div>Loading...</div>}>
                <HostFortDetails />
              </Suspense>}
            />
            <Route path='architecture' element={
              <Suspense fallback={<div>Loading...</div>}>
                <HostArchitectureFeatures />
              </Suspense>}
            />
            <Route path='reach' element={
              <Suspense fallback={<div>Loading...</div>}>
                <HostReach />
              </Suspense>}
            />
            <Route path='entry' element={
              <Suspense fallback={<div>Loading...</div>}>
                <HostEntryDetails />
              </Suspense>} />
            <Route path='photo' element={
              <Suspense fallback={<div>Loading...</div>}>
                <HostPhotoGallery />
              </Suspense>}
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
