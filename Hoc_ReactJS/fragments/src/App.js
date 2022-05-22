import './App.css';
import Table from './components/Table';
import Glossary from './components/Glossary';

const ternms = [
  {
    id: 'dasdsa3242',
    term: 'Beast of Bodmin',
    description: 'A large feline inhabiting Bodmin Moor.'
  },
  {
    id: 'da3dsa3242',
    term: 'Morgawr',
    description: 'A sea serpent.'
  },
  {
    id: 'das5sa3242',
    term: 'Owlman',
    description: 'A giant owl-like creature.'
  }
];

function App() {
  return (
    <div>
      <Table />
      <Glossary items={ternms} />
    </div>
  );
}

export default App;
