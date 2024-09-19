import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './ui/About.jsx';
import { MemberList } from './ui/Members.jsx';
import { User } from './ui/User.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} >
          <Route path="/" element={<MemberList />} />
          <Route path="/koby" element={<User name="Koby Kern" role="Team Lead" stID="918451214" pic="Koby_Kern.jpg" />} />
          <Route path="/ali" element={<User name="Ali" role="Front End" stID="921040195" pic="bird-building-nest-stockcake.png" />} />
          <Route path="/ethan" element={<User name="Ethan" role="GitHub Master" stID="123456789" pic="imgA.jpg" />} />
          <Route path="/jacob" element={<User name="Jacob" role="Backend Lead" stID="923077698" pic="Batman.jpeg" />} />
          <Route path="/miguel" element={<User name="Miguel" role="Front-end lead" stID="922097199" pic="cool-pic.jpg" />} />
          <Route path="/nathan" element={<User name="Nathan" role="Scrum Master" stID="123456789" pic="nathanpicture.png" />} />
          <Route path="/zeke" element={<User name="Zeke" role="Intern" stID="921212731" pic="78.png" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
