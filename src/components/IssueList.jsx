import React from 'react';

const IssueList = ({ issues }) => (
  <div>
    <h3>Issues</h3>
    <ul>
      {issues && issues.map((issue) => (  // Add a check for issues
        <li key={issue.id}>{issue.title}</li>
      ))}
    </ul>
  </div>
);

export default IssueList;
