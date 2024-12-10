import { ResumeDataV2 } from './ResumeDataV2';
import './TwoColumn.css';
import Achevements from './components/achievements';
import Education from './components/education';
import Experience from './components/experience';
import Header from './components/header';
import Summary from './components/summary';

function TwoColumn() {
  return <>
    <Header />  
  <div className="twoColumns">
    <div id="left">
      <Summary value={ResumeDataV2.summary} />
      <Experience value={ResumeDataV2.summary} />
      <Education value={ResumeDataV2.summary} />
    </div>
    <div id="right">
      <Achevements value={ResumeDataV2.summary} />
    </div>
  </div>
  </>;
}
export default TwoColumn;
