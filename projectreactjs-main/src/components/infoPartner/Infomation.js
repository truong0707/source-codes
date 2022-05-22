import TaskBar from './TaskBar'
import AnhNen from './BackgroundImage';
import Slogan from './Slogan';
import Menu from './Menu'
import Infoo from './Info'


function Appdss() {

  return (
    <div>
      <TaskBar />
      <AnhNen 
        avatar= './image/avatar.jpg' 
        background= './image/nen2.jpg'    
      />
      <Slogan 
        mainName="Lý Văn Chính"
      />
      <Menu />
      <Infoo />
    </div>
  );
}

export default Appdss;
