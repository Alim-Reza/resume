import { ResumeDataV2 } from './ResumeDataV2';
import './TwoColumn.css';
import Achevements from './components/achievements';
import Education from './components/education';
import Experience from './components/experience';
import Header from './components/header';
import Skill from './components/skill';
import Summary from './components/summary';

function TwoColumn() {
  return <>
    <Header />  
  <div className="twoColumns">
    <div id="left">
      <Summary value={ResumeDataV2.summary} />
      <Experience value={ResumeDataV2.experience} />
      <Education value={ResumeDataV2.education} />
    </div>
    <div id="right">
      <Achevements value={ResumeDataV2.summary} />
      <Skill value={ResumeDataV2.skills} />
    </div>
  </div>
  </>;
}
export default TwoColumn;
