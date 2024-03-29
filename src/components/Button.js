export function Button() {
  return (
    <div>
      <h1>Examples</h1>
      <p>
        Bootstrap includes several predefined button styles, each serving its
        own semantic purpose, with a few extras thrown in for more control.
      </p>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>
      <button type="button" className="btn btn-link">
        Link
      </button>

      <h1> Button Group </h1>
      <p>
        Wrap a series of buttons with .btn in .btn-group. Add on optional
        JavaScript radio and checkbox style behavior with our buttons plugin.
      </p>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary">
          Left
        </button>
        <button type="button" className="btn btn-secondary">
          Middle
        </button>
        <button type="button" className="btn btn-secondary">
          Right
        </button>
      </div>
      <h1> Button toolbar </h1>
      <p>
        Combine sets of button groups into button toolbars for more complex
        components. Use utility classes as needed to space out groups, buttons,
        and more.
      </p>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-secondary">
            1
          </button>
          <button type="button" className="btn btn-secondary">
            2
          </button>
          <button type="button" className="btn btn-secondary">
            3
          </button>
          <button type="button" className="btn btn-secondary">
            4
          </button>
        </div>
        <div className="btn-group mr-2" role="group" aria-label="Second group">
          <button type="button" className="btn btn-secondary">
            5
          </button>
          <button type="button" className="btn btn-secondary">
            6
          </button>
          <button type="button" className="btn btn-secondary">
            7
          </button>
        </div>
        <div className="btn-group mr-2" role="group" aria-label="Third group">
          <button type="button" className="btn btn-secondary">
            8
          </button>
        </div>
      </div>
      <h1> Nesting </h1>
      <p>
        Place a .btn-group within another .btn-group when you want dropdown
        menus mixed with a series of buttons.
      </p>
      <div
        className="btn-group"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button type="button" className="btn btn-secondary">
          1
        </button>
        <button type="button" className="btn btn-secondary">
          2
        </button>

        <button id="btnGroupDrop1" className="dropdown-toggle">
          Dropdown
        </button>
      </div>
    </div>
  );
}
