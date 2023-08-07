import {memo} from 'react'
import "./app-info.css";

const AppInfoComponent = props => {
    const {employeeCount, increasedCount} = props;

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employeeCount}</h2>
      <h2>Премию получат: {increasedCount}</h2>
    </div>
  );
};

export const AppInfo = memo(AppInfoComponent);
