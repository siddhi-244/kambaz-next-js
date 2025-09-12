export default function Editor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-select-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-select-group" defaultValue="assignments">
                <option value="assignments">Assignments</option>
                <option value="labs">Labs</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-select-display-grade-as">
                Display Grade as
              </label>
            </td>
            <td>
              <select id="wd-select-display-grade-as" defaultValue="percentage">
                <option value="percentage">Percentage</option>
                <option value="gpa">GPA</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-select-submission-type">Submission type</label>
            </td>
            <td>
              <select id="wd-select-submission-type" defaultValue="online">
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              Online entry options
              <br />
              <input type="checkbox" name="online-entry" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="online-entry"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="online-entry"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              Assign to
              <br />
              <input id="wd-assign-to" defaultValue={"Everyone"} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-due-date"> Due </label>
              <input type="date" defaultValue="2025-01-21" id="wd-due-date" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-available-from"> Available from</label>
              <input
                type="date"
                defaultValue="2025-01-21"
                id="wd-available-from"
              />
              <label htmlFor="wd-available-until"> Until</label>
              <input
                type="date"
                defaultValue="2025-01-21"
                id="wd-available-until"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td align="right">
              <hr />
              <button id="wd-cancel">Cancel</button>
              <button id="wd-save">Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
