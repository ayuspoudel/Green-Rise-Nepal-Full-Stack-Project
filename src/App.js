import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, Register, ProtectedRoute, AboutUs } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Profile,
  AddJob,
  AllJobs,
  Stats,
  Projects,
  SharedLayout,
  SinglePost,
  EWasteSurveyForm
} from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
    >
      <Route index element={<Stats />} />
      <Route path='blogs' element={<Projects />} />
      <Route path='blogs/:id' element={<SinglePost />} />
      <Route path='all-jobs' element={<AllJobs />} />
      <Route path='add-job' element={<AddJob />} />
      <Route path='EWasteSurveyForm' element={<EWasteSurveyForm />} />

      <Route path='profile' element={<Profile />} />
    </Route>
    <Route path='landing' element={<Landing />} />
    <Route path='register' element={<Register />} />
    <Route path='aboutUs' element={<AboutUs />} />
    <Route path='*' element={<Error />} />
  </Routes>
  <ToastContainer position='top-center' />
</BrowserRouter>

  );
}

export default App;
